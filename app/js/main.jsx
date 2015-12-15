// main.js
var React = require('react');
var ReactDOM = require('react-dom');

var SearchQuery = require('./search-query').init;

var Contactsearch = require('./components/contactsearch.jsx').contactsearch;

var CreateContact = require('./components/createcontact.jsx').createcontact;

ReactDOM.render(<CreateContact/>, document.getElementById('create-contact'), () => {
	console.log('post create contact render');
});

ReactDOM.render(<Contactsearch />, document.getElementById('search'), () => {
	SearchQuery();
});