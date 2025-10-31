const List = require("../models/listing");
const Review = require("../models/review");


module.exports.createReview = async (req,res)=>{
    let listing= await List.findById(req.params.id);
    let newReview= new Review(req.body.review);
    newReview.author = req.user._id;
    // console.log(listing.reviews.push(newReview))

    listing.reviews.push(newReview)
    req.flash("success", "New Review Added Successfully")

    await newReview.save();
    await listing.save();
    res.redirect(`/listing/${listing.id}`);
   

};

module.exports.destroyReview = async (req,res,next) => {
    let {id, reviewId}=req.params;
    await List.findByIdAndUpdate( id,{$pull:{reviews:reviewId}});
    await Review.findByIdAndDelete(reviewId)
    req.flash("success", "Review Deleted Successfully")
    res.redirect(`/listing/${id}`)
};