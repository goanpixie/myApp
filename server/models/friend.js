console.log('friends model');
var mongoose = require('mongoose');
var friendSchema = new mongoose.Schema({
	firstName: 'string',
	lastName: 'string',
	birthDate: Date
});

var Friend = mongoose.model('Friend', friendSchema);