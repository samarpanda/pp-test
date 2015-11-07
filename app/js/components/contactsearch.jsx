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

var App = React.createClass({

	getInitialState() {
		return {
			contacts: [],
			loaded: false
		};
	},

	componentDidMount () {

		fetchUsers((contacts) => {
			console.log(contacts);
			this.setState({
				contacts,
				loaded: true
			});
			this.renderContacts();
		});
	},

	renderContacts(){
		ReactDOM.render(<Contactlist contacts={this.state.contacts} />, document.getElementById('contacts'), () => {});
	},

	keypressHandler(e){
		console.log(e);
	},

	render() {
		if(! this.state.loaded)
			return <div>Loading</div>;

		return <div>
			<input onKeyPress={this.keypressHandler} />
		</div>;
	}

});

module.exports.contactsearch = App;