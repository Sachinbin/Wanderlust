const express = require("express");
const router = express.Router();
const wrapAsync = require("../utils/wrapAsync.js");
const List = require("../models/listing.js");
const { isLoggedIn, isOwner, validateListing } = require("../middleware.js");
const listingController = require("../controllers/listing.js");

const multer = require('multer');
const { storage } = require("../cloudConfig.js");
const upload = multer({ storage });

// app.use(flash());

// index and create route
router.route("/")
    .get(wrapAsync(listingController.index))
    .post(
        validateListing,
        isLoggedIn,
        isOwner,
        wrapAsync(listingController.createRoute));
    // .post(upload.single('listing[image]'), (req, res) => {
    //     console.log("Cloudinary file details:", req.file);
    //     // res.json({ url: req.file.path });
    // })


//new route
router.get("/new", isLoggedIn, listingController.renderNewForm)


// show,update and Delete route
router.route("/:id")
    .get(wrapAsync(listingController.showRoute))
    .put(
        isLoggedIn,
        isOwner,
        validateListing,    
        wrapAsync(listingController.updateRoute))
    .delete(
        isLoggedIn,
        isOwner,
        wrapAsync(listingController.deleteRoute));


// Edit route
router.get("/:id/edit",
    isLoggedIn,
    isOwner,
    wrapAsync(listingController.editRoute));





module.exports = router;

