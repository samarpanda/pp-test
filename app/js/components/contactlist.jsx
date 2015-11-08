var React = require('react');
var ReactDOM = require('react-dom');

var {API} = require('../constants');
var xhr = require('../libs/xhr');
var Contactdetail = require('./contactdetail.jsx').contactdetail;

var selectedContactId = 0;

var deleteUser = (cb) => {
	xhr.deleteJSON(`${API}/contacts`, (err, res) => {
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
		this.setState({
			contacts: this.props.contacts,
			loaded: true
		});
	},

	deleteUsers (target) {
		var contacts = this.state.contacts;
		var withoutContact = contacts.filter(contact => contact._id !== target._id);

		//On delete update view
		console.log('deleted: ', target.name);
		this.setState({contacts: withoutContact});
		if(selectedContactId === target._id){
			var tmpContact = {};
			this.renderDetailChild(tmpContact);
		}
	},

	renderDetail(contact){
		this.renderDetailChild(contact);
		selectedContactId = contact._id;
	},

	renderDetailChild(contact) {
		ReactDOM.render(<Contactdetail contact={contact} />, document.getElementById('detail'), () => {});
	},

	render () {

		var contacts = this.state.contacts.map((contact) => {
			return <li key={contact._id}>
				<span onClick={this.renderDetail.bind(this, contact)}>{contact.name}  </span>
				<span onClick={this.deleteUsers.bind(this, contact)}>X</span>
			</li>
		});

		return <div>
			<ul>
				{contacts}
			</ul>
			</div>;
	}

});

module.exports.contactlist = App;