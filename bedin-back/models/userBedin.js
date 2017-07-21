const mongoose =  require('mongoose'),
	passportLocalMongoose = 'passport-local-mongoose';

//const user = require ('./user');

const Schema = mongoose.Schema;

const userBedinSchema = new Schema({
//	id : {type : String}
});

module.exports = mongoose.model('userBedinSchema', userBedinSchema);