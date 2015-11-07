// main.js
var React = require('react');
var ReactDOM = require('react-dom');

var SearchQuery = require('./search-query').init;

var Contactsearch = require('./components/contactsearch.jsx').contactsearch;

ReactDOM.render(<Contactsearch />, document.getElementById('search'), () => {
	SearchQuery();
});