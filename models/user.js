const { required } = require("joi");
const mongoose = require("mongoose");
const { type } = require("os");
const Schema= mongoose.Schema;
const passportLocalMongoose = require("passport-local-mongoose");

const userSchama = new Schema({
    email : {
        type:String,
        required:true
    }
});

userSchama.plugin(passportLocalMongoose);

module.exports = mongoose.model('User', userSchama);

