var React = require('react');
var ReactDOM = require('react-dom');

var {API} = require('../constants');
var xhr = require('../libs/xhr');
var Contactlist = require('./contactlist.jsx').contactlist;

var fetchUsers = (cb) => {
	xhr.getJSON(`${API}/contacts`, (err, res) => {
		if(!err)
			cb(res);
	});
};

var filterUsers = (query, cb) => {
	xhr.getJSON(`${API}/contacts/filter/${query}`, (err, res) => {
		if(!err)
			cb(res);
	});
};

var App = React.createClass({

	getInitialState() {
		return {
			contacts: [],
			query: '',
			loaded: false
		};
	},

	componentDidMount () {

		fetchUsers((contacts) => {
			this.setState({
				contacts,
				query: this.state.query,
				loaded: true
			});
			this.renderContacts();
		});

		// filterUsers('Sa', (contacts) => {
		// 	console.log(contacts);
		// });
	},

	renderContacts(){
		ReactDOM.render(<Contactlist contacts={this.state.contacts} />, document.getElementById('contacts'), () => {});
	},

	render() {
		if(! this.state.loaded)
			return <div>Loading</div>;

		return <div></div>;
	}

});

module.exports.contactsearch = App;