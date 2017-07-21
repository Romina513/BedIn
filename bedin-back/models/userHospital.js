const mongoose =  require('mongoose'),
	passportLocalMongoose = 'passport-local-mongoose';

const userHospital = new mongoose.Schema({
	/*name : {type : String, required : true},
	lastName : {type : String, required : true},
	createdAt : {type : Date, default: Date.now},
	*/hospitalCode:{type : mongoose.Schema.Types.ObjectId, ref: "hospitals"},
});

//userHospital.plugin(passportLocalMongoose);

module.exports = mongoose.model('userHospital', userHospital);
