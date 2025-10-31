const mongoose = require("mongoose");
const { type } = require("os");
const { title } = require("process");
const {Schema}=mongoose ;
const Review=require("./review.js")
const listingSchema = new mongoose.Schema({
    title: {
        type: String,
        require: true
    },
    description: String,
    image: {        
        type: String,
        default:"https://www.techsmith.com/wp-content/uploads/2023/08/What-are-High-Resolution-Images.png",
        set: (v) =>
        v === ""
        ? "https://www.techsmith.com/wp-content/uploads/2023/08/What-are-High-Resolution-Images.png"
        : v,
        // url: {
        //     type:String,
        //     default:"https://www.techsmith.com/wp-content/uploads/2023/08/What-are-High-Resolution-Images.png",
        //     set: (v) =>
        //         v === ""
        //             ? "https://www.techsmith.com/wp-content/uploads/2023/08/What-are-High-Resolution-Images.png"
        //             : v,
        // }
    },
    price: Number,
    location: String,
    country: String,
    reviews:[
        {
        type : Schema.Types.ObjectId,
        ref: "Review",
    },
    ],
    owner:{
        type:Schema.Types.ObjectId,
        ref:"User",
    },
    // category:{
    //     type: String,
    //     enum:["Mountain","Tranging","Rooms","Iconic Cities","Amazing Pools", "Farms", "Camping", "Arcitc","Casties"],

    // },
});

listingSchema.post("findOneAndDelete",async (listing)=>{
    if(listing){
        await Review.deleteMany({_id: {$in : listing.reviews}});
    }
})
const List = mongoose.model("List", listingSchema);
module.exports = List;