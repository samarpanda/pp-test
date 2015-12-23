var React = require('react');
var ReactDOM = require('react-dom');

var Contactlist = require('./contactlist.jsx').contactlist;
var CreateContact = require('./createcontact.jsx').createcontact;

var {createContact, fetchUsers, filterUsers, deleteUser} = require('../utils/ApiUtil');

var App = React.createClass({

	getInitialState() {
		return {
			contacts: [],
			query: '',
			loaded: false
		};
	},

	loadContacts(){
		fetchUsers((contacts) => {
			this.setState({
				contacts,
				query: this.state.query,
				loaded: true
			});
			this.renderContacts();
		});
	},

	componentDidMount () {
		this.loadContacts();
	},

	handleCreateContact(data){
		createContact(data, (res) => {
			this.loadContacts();
		});
	},

	handleDeleteContact(data){
		deleteUser(data._id, (res) => {
			this.loadContacts();
		});
	},

	renderContacts(){
		ReactDOM.render(<div><Contactlist contacts={this.state.contacts} onContactDelete={this.handleDeleteContact} /><CreateContact onContactSubmit={this.handleCreateContact} /></div>, document.getElementById('contacts'), () => {});
	},

	render() {
		if(! this.state.loaded)
			return <div>Loading</div>;

		return <div></div>;
	}

});

module.exports.contactblock = App;