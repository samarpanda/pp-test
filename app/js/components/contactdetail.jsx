var React = require('react');

var App = React.createClass({
	getInitialState() {
		return {};
	},
	render() {
		var dContact = this.props.contact;
		return <div>{dContact.name}</div>;
	}
});

module.exports.contactdetail = App;