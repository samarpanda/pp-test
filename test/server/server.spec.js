var test = require('ava');
var p = require('path').resolve;
var l = console.log;

test('Initial test setup', function(t){
	t.same([1], [1]);
	t.end();
});