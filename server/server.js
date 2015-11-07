var express = require('express');
var bodyParser = require('body-parser');
var mongoose = require('mongoose');

// var dbDump = require('./contacts_data.json').data;
// console.log(dbDump);

var app = express();
var hack = require('./hack').allowCrossDomain;

//Allow cross origin hack
app.use(hack);

app.use(express.static('dist'));
app.use(bodyParser.urlencoded({ extended: false }));

//
mongoose.connect('mongodb://localhost/mymongodb');
var Schema = mongoose.Schema,
	ObjectId = Schema.ObjectId;
//mongoose.model('contacts', {name: String});
var MySchema = new Schema({
    name: String,
    phone: String
});
var Contact = mongoose.model('Contact', MySchema);

app.route('/contacts')
.get(function(req, res, next){
	mongoose.model('Contact').find(function(error, contacts){
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
})
.put(function(req, res){
	var obj = req.body;
	Contact.findByIdAndUpdate(obj.id, {name:obj.name, phone:obj.phone}, function(err, contact){
		res.end(JSON.stringify(contact));
	});
})
.delete(function(req, res, next){
	Contact.findByIdAndRemove( req.body.id, function(err, contact){
		res.end(JSON.stringify(contact));
	});
});

// app.route('/reset')
// .get(function(req, res, next){
// 	Contact.remove({}, function(){
// 		console.log('deleted all');
// 	});
// });

app.listen(3000);