var Observable = require('rx').Observable;

var {API} = require('./constants');
var xhr = require('./libs/xhr');

var searchInput = document.getElementById('search');
var keypresses = Observable.fromEvent(searchInput, 'keyup');
var displayResult = document.getElementById('result');

var getContactSearchResults = function(query){
	var canelled = false;
	return Observable.create(function(observer){
		var url = `${API}/contacts/filter/${query}`;

		xhr.getJSON(url, (err, res) => {
			if(!canelled){
				observer.onNext(res);
				observer.onCompleted();
			}
		});
		return function dispose(){
			canelled = true;
		};
	});
};

var searchResultSets =
	keypresses.
		throttle(10).
		map(function(key){
				if(searchInput.value != '')
					return searchInput.value;
		}).
		distinctUntilChanged().
		map(function(query){
			return getContactSearchResults(query);
		}).
		switchLatest();

var AppInit = function(){

	searchResultSets.forEach(
		function(resultSet){
			// console.log('>>', resultSet, resultSet.length);
			displayResult.value = JSON.stringify(resultSet, null, 2);
		},
		function(error){
			console.error(error);
		});

};

module.exports.init = AppInit;
