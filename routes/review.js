const express=require("express");
const router= express.Router({mergeParams:true});
const wrapAsync = require("../utils/wrapAsync.js");
const ExpressError = require("../utils/ExpressError.js")
const List = require("../models/listing");
const Review = require("../models/review");
const {
    validateReview,
     isLoggedIn, 
     isReviewAuthor
    } = require("../middleware.js");


const reviewController = require("../controllers/review.js");
const review=require("../models/review.js");


//review route
// POST route
router.post("/",
    isLoggedIn,
    validateReview,
    wrapAsync(reviewController.createReview));

//review delet route
router.delete("/:reviewId",
    isLoggedIn,
    isReviewAuthor,
    wrapAsync(reviewController.destroyReview))

module.exports=router;