// main.js
var React = require('react');
var ReactDOM = require('react-dom');

var Contactsearch = require('./components/contactsearch.jsx').contactsearch;

ReactDOM.render(<Contactsearch />, document.getElementById('search'), () => {
	console.log('Render my App');
});


// var Contactlist = require('./components/contactlist.jsx').contactlist;

// ReactDOM.render(<Contactlist />, document.getElementById('contacts'), () => {
// 	console.log('Render my App');
// });