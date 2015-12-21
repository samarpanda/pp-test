var React = require('react');
var ReactDOM = require('react-dom');

var createContact = require('../utils/ApiUtil').createContact;

var App = React.createClass({
	getInitialState(){
		return {
			'name': '',
			'phone': ''
		};
	},
	handleNameChange(e){
		this.setState({
			'name': e.target.value
		});
	},
	handlePhoneChange(e){
		this.setState({
			'phone': e.target.value
		});
	},
	handleSubmit(e){
		e.preventDefault();
		//POST data to server
		createContact(this.state, (res) => {
			console.log(res, " >> ");
		});

		//On success
		this.setState({
			'name': '',
			'phone': ''
		});
	},
	componentDidMount(){
		
	},
	render(){
		return <div>
			<h2>Create new contact</h2>
			<form onSubmit={this.handleSubmit}>
				<label>Name: <input name="name" id="name" type="text" value={this.state.name} onChange={this.handleNameChange} /></label>
				<label>Phone No: <input name="phone" id="phone" type="text" value={this.state.phone} onChange={this.handlePhoneChange} /></label>
				<input type="submit" />
			</form>
		</div>;
	}

});

module.exports.createcontact = App;