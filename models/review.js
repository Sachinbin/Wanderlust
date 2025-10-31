const mongoose = require ("mongoose");
const { schema } = require("./listing");
const { number } = require("joi");
const { type } = require("os");
const Schema = mongoose.Schema;

const reviewSchema= new mongoose.Schema({
    comment :String,
    rating:{
        type: Number,
        min:1,
        max:5
    },
    CreateAt:{
        type:Date,
        defualt:Date.now()
    },
    author:{
        type:Schema.Types.ObjectId,
        ref:"User",
    },
})

module.exports= mongoose.model("Review",reviewSchema);