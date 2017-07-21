const mongoose = require('mongoose'),
  extend = require('mongoose-schema-extend'),
  passportLocalMongoose = require('passport-local-mongoose');

const bedin = require ('./userBedin');
const Schema = mongoose.Schema;
 
const userSchema = new Schema({
	name : {type : String, required : true},
	lastName : {type : String, required : true},
	createdAt : {type : Date, default: Date.now}, 
	idBedin : {type : mongoose.Schema.Types.ObjectId, ref : 'hospitals'}
}, {discriminatorKey : '_type'});
 
userSchema.plugin(passportLocalMongoose);
 
const userModel = mongoose.model('userSchema', userSchema);

module.exports = {userModel, userSchema};
