const List = require("../models/listing")

module.exports.index = async (req, res) => {
    let allListings = await List.find({});
    // res.send("listing")
    //   let seacrchListings;

    // // ✅ check if search query exists
    // if (req.query.q) {
    //     let query = req.query.q;
    //     seacrchListings = await List.find({
    //         $or: [
    //             { title: { $regex: query, $options: "i" } },
    //             { description: { $regex: query, $options: "i" } },
    //             { location: { $regex: query, $options: "i" } },
    //             { country: { $regex: query, $options: "i" } }
    //         ]
    //     });
    // } else {
    //     // ✅ default: show all listings
    //     seacrchListings = await List.find({});
    // }
    res.render("./listing/index.ejs", { allListings })
};

module.exports.renderNewForm = (req, res) => {
    res.render("listing/new.ejs")
}

module.exports.showRoute = async (req, res) => {
    let { id } = req.params;

    let listData = await List.findById(id)
        .populate({
            path: "reviews",
            populate: {
                path: "author",
            },
        })
        .populate("owner");
    
    // console.log(listData.category); 

    if (!listData) {
        req.flash("error", "You requsted listing for does not exist");
        res.redirect("/listing");
    }
    res.render("listing/show.ejs", { listData })
}

module.exports.createRoute = async (req, res, next) => {
        // let listing=req.body;
        // console.log(listing)
        const newListing = new List(req.body.listing)
        console.log(req.user)
        newListing.owner = req.user._id;
        req.flash("success", "New Listing Added Successfully")
        let c= await newListing.save();
        console.log(c)
        res.redirect("/listing");

    };

module.exports.editRoute = async (req, res) => {
        let { id } = req.params;
        let editListing = await List.findById(id)
        if (!editListing) {
            req.flash("error", "You requsted listing for does not exist");
            res.redirect("/listing");
        }
        let originalImage=editListing.image;
        originalImage=originalImage.replace("/upload","/upload/h_300,w_250")
        res.render("./listing/edit.ejs", { editListing,originalImage })
    };
module.exports.updateRoute = async (req, res, next) => {
        let { id } = req.params;
        await List.findByIdAndUpdate(id, { ...req.body.listing });

        req.flash("success", "Listing Updated Successfully")
        res.redirect(`/listing/${id}`);


    };        

module.exports.deleteRoute = async (req, res) => {
        let { id } = req.params;
        let deleteListing = await List.findByIdAndDelete(id);
        // console.log(deleteListing)
        req.flash("success", "Listing Deleted Successfully")
        res.redirect("/listing");
        console.log("deleted.")
    };