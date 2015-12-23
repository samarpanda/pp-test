var React = require('react');
var ReactDOM = require('react-dom');

var Contactdetail = require('./contactdetail.jsx').contactdetail;

var selectedContactId = 0;

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
		this.props.onContactDelete(target);
	},

	renderDetail(contact){
		this.renderDetailChild(contact);
		selectedContactId = contact._id;
	},

	renderDetailChild(contact) {
		ReactDOM.render(<Contactdetail contact={contact} />, document.getElementById('detail'), () => {});
	},

	render () {
		console.log('contactlist render >>');
		var contacts = this.props.contacts.map((contact) => {
			return <li key={contact._id}>
				<span onClick={this.renderDetail.bind(this, contact)}>{contact.name}  </span>
				<span onClick={this.deleteUsers.bind(this, contact)}>X</span>
			</li>
		});

		return (<div>
			<ul>
				{contacts}
			</ul>
			</div>);
	}

});

module.exports.contactlist = App;