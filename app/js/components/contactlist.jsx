var React = require('react');
var {API, SP} = require('../constants');
var xhr = require('../libs/xhr');

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
	},

	render () {
		if(! this.state.loaded)
			return <div>Loading</div>;

		var contacts = this.state.contacts.map((contact) => {
			return <li onClick={this.deleteUsers.bind(this, contact)} key={contact.id}>{contact.name}</li>
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