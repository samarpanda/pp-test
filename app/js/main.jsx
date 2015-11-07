// main.js
var React = require('react');
var ReactDOM = require('react-dom');

var fetchUsers = (cb) => {
	setTimeout(() => {
		cb([{id: 1, name: 'Samar'}, {id: 2, name: 'Sagar'}, {id: 3, name: 'Sony'}]);
	}, 500);
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

ReactDOM.render(<App />, document.getElementById('contacts'), () => {
	console.log('Render my App');
});