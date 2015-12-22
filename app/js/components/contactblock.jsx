var React = require('react');
var ReactDOM = require('react-dom');

var Contactlist = require('./contactlist.jsx').contactlist;
var CreateContact = require('./createcontact.jsx').createcontact;

var {createContact, fetchUsers, filterUsers} = require('../utils/ApiUtil');

var App = React.createClass({

	getInitialState() {
		return {
			contacts: [],
			query: '',
			loaded: false
		};
	},

	loadContacts(){
		console.log(" >>  load contacts");
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

	handleUpdateList(){

	},

	renderContacts(){
		console.log("Rendered >> ");
		ReactDOM.render(<div><Contactlist onUpdate={this.handleUpdateList} contacts={this.state.contacts} /><CreateContact onContactSubmit={this.handleCreateContact} /></div>, document.getElementById('contacts'), () => {});
	},

	render() {
		if(! this.state.loaded)
			return <div>Loading</div>;

		return <div></div>;
	}

});

module.exports.contactblock = App;