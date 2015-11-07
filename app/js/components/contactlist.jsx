var React = require('react');
var ReactDOM = require('react-dom');

var {API} = require('../constants');
var xhr = require('../libs/xhr');
var Contactdetail = require('./contactdetail.jsx').contactdetail;

var selectedContactId = 0;

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
		}
	},

	componentDidMount () {
		fetchUsers((contacts) => {
			this.setState({
				contacts,
				loaded: true
			});
		});
	},

	deleteUsers (target) {
		var contacts = this.state.contacts;
		var withoutContact = contacts.filter(contact => contact.id !== target.id);
		this.setState({contacts: withoutContact});

		if(selectedContactId === target.id){
			var tmpContact = {};
			ReactDOM.render(<Contactdetail contact={tmpContact} />, document.getElementById('detail'), () => {});
		}
	},

	renderDetail(contact){
		ReactDOM.render(<Contactdetail contact={contact} />, document.getElementById('detail'), () => {});
		selectedContactId = contact.id;
	},

	render () {
		if(! this.state.loaded)
			return <div>Loading</div>;

		var contacts = this.state.contacts.map((contact) => {
			return <li key={contact.id}>
				<span onClick={this.renderDetail.bind(this, contact)}>{contact.name}  </span>
				<span onClick={this.deleteUsers.bind(this, contact)}>X</span>
			</li>
		});

		return <div>
			<h3>Contacts</h3>
			<ul>
				{contacts}
			</ul>
			</div>;
	}

});

module.exports.contactlist = App;