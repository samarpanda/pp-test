// main.js
var React = require('react');
var ReactDOM = require('react-dom');

var Contactlist = require('./components/contactlist.jsx').contactlist;

ReactDOM.render(<Contactlist />, document.getElementById('contacts'), () => {
	console.log('Render my App');
});