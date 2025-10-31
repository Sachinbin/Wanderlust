const User = require("../models/user")



module.exports.signUpUser = async (req, res,next) => {
    try {
        let { username, email, password } = req.body;
        let newUser = new User({
            username, email
        });

        let newRegister = await User.register(newUser, password)
        console.log(newRegister)
        req.login(newRegister, (err) => {
            if (err) {
                return next(err)
            }
            req.flash("success", "Welcome to Wnaderlust ")
            res.redirect("/listing")
        })
    } catch (e) {
        req.flash("error", `${e.message}`)
        res.redirect("/signup")
    };
};

module.exports.LoginForm =  (req, res) => {
    res.render("user/login.ejs");
};

module.exports.postLoginUserRoute = async (req, res) => {
        req.flash("success", "Welcome back to WanderLust!")
        let redirectUrl=res.locals.redirectUrl || "/listing" ;
        res.redirect(redirectUrl);
    };


module.exports.logoutUser = (req, res, next) => {
    req.logOut((err) => {
        if (err) {
            return next(err);
        }
        req.flash("success", "you logout successfully!")
        res.redirect("/listing")
    });

};    