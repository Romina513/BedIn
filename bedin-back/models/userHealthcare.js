const mongoose =  require('mongoose'),
	passportLocalMongoose = 'passport-local-mongoose';

const userHealthcare = new mongoose.Schema({
	/*name : {type : String, required : true},
	lastName : {type : String, required : true},
	createdAt : {type : Date, default: Date.now},
	*/healthCareCode : {type : mongoose.Schema.Types.ObjectId, ref : 'healthcare'}
});

//userHealthcare.plugin(passportLocalMongoose);

module.exports = mongoose.model('userHealthcare', userHealthcare);
