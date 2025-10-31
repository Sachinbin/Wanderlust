const express = require("express");
const router = express.Router();
const User = require("../models/user.js");
const wrapAsync = require("../utils/wrapAsync.js");
const passport = require("passport");
const { saveRedirectUrl } = require("../middleware.js");
const userController = require("../controllers/user.js")

// signup route
router.route("/signup")
.get( (req, res) => {
    res.render("user/signup.ejs")
    // res.send("form")
})
.post( wrapAsync(userController.signUpUser));


// login route
router.route("/login")
.get(userController.LoginForm)
.post(
    saveRedirectUrl,
    passport.authenticate(
        "local",
        {
            failureRedirect: '/login',
            failureFlash: true,
        }),
        userController.postLoginUserRoute
);
  

// logout router
router.get("/logout", userController.logoutUser);
module.exports = router