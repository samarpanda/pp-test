var express = require('express');
var app = express();
var hack = require('./hack').allowCrossDomain;

//Allow cross origin hack
app.use(hack);

app.use(express.static('dist'));

app.route('/contacts')
.get(function(req, res, next){
	res.json([
		{id: 1, name: 'Samar'}, {id: 2, name: 'Sagar'}, {id: 3, name: 'Sony'}
	]);
});

app.listen(3000);