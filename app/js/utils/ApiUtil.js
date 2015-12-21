var xhr = require('../libs/xhr');
var {API} = require('../constants');

/**
 * Fetch users
 * Request type : GET
 * @return : JSON
 */
exports.fetchUsers = (cb) => {
	xhr.getJSON(`${API}/contacts`, (err, res) => {
		if(!err)
			cb(res);
	});
};

/**
 * Filter users
 * Request type : GET
 * @return : JSON
 */
exports.filterUsers = (query, cb) => {
	xhr.getJSON(`${API}/contacts/filter/${query}`, (err, res) => {
		if(!err)
			cb(res);
	});
};

/**
 * Create Contact
 * Request type: POST
 * @return : JSON
 */
exports.createContact = (obj, cb) => {
	xhr.postJSON(`${API}/contacts`, obj, (err, res) => {
		if(!err)
			cb(res);
	});
};


/**
 * Delete Contact
 * Request type: Delete
 * @return : JSON
 */
 
exports.deleteUser = (id, cb) => {
	xhr.deleteJSON(`${API}/contacts/${id}`, (err, res) => {
		if(!err)
			cb(res);
	});
};

