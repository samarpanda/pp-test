var express = require('express');
var bodyParser = require('body-parser');
var mongoose = require('mongoose');

var app = express();
var hack = require('./hack').allowCrossDomain;
var port = process.env.PORT || 3000;
var mongoURI = process.env.MONGOLAB_URI || 'mongodb://localhost/mymongodb';

//Allow cross origin hack
app.use(hack);

app.use(express.static('dist'));

/**
 * bodyParser
 */
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

//mongo
mongoose.connect(mongoURI, function(err){
	if(err){
		console.log("Couldn't connect to mongodb");
		console.log('Error: ', err);
	}
});

var MySchema = new mongoose.Schema({
    name: String,
    phone: String
});
var Contact = mongoose.model('test-collection', MySchema);

/**
 * Handle get & post requests
 */
app.route('/contacts')
.get(function(req, res, next){
	Contact.find(function(error, contacts){
		contacts.sort(function(a, b){
			if(a.name < b.name){
				return -1;
			}
			if(a.name > b.name){
				return 1;
			}
			return 0;
		});
		res.end(JSON.stringify(contacts));
	});
})
.post(function(req, res, next){
	var obj = req.body;
	var person = new Contact({ name:obj.name, phone:obj.phone });
	person.save(function(error, contact){
		res.end(JSON.stringify(contact));
	});
});

/**
 * Handle put & delete requests
 */
app.route('/contacts/:id')
.put(function(req, res){
	var obj = req.body;
	Contact.findByIdAndUpdate(req.params.id, {name:obj.name, phone:obj.phone}, {new: true}, function(err, contact){
		res.end(JSON.stringify(contact));
	});
})
.delete(function(req, res, next){
	var obj = req.params;
	Contact.findByIdAndRemove( obj.id, function(err, contact){
		res.end(JSON.stringify(contact));
	});
});

/**
 * Handle filter requests
 */
app.route('/contacts/filter/:name')
	.get(function(req, res){
		var obj = req.params;
		Contact.find({name: new RegExp(obj.name, 'i')}, function(err, contacts){
			res.send(JSON.stringify(contacts));
		});
	});

var http = app.listen(port);
exports.http = http;