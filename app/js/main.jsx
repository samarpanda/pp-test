// main.js
var React = require('react');
var ReactDOM = require('react-dom');

var SearchQuery = require('./search-query').init;
var Contactblock = require('./components/contactblock.jsx').contactblock;

ReactDOM.render(<Contactblock />, document.getElementById('create-contact'), () => {
	SearchQuery();
});