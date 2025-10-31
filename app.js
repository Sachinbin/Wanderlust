if(process.env.NODE_ENV != "production"){
    require('dotenv').config()
}

// console.log("Cloudinary config:", process.env.CLOUD_NAME, process.env.CLOUD_API_KEY);

const express = require("express");
const app = express();
const mongoose = require("mongoose");
const path = require("path");
const methodOverride = require("method-override");
const ejsMate = require('ejs-mate');
const listing = require("./routes/listing.js");
const reviews = require("./routes/review.js");
const session = require("express-session");
const cookie = require("express-session/session/cookie.js");
const flash = require("connect-flash");
const passport = require("passport");

const LocalStrategy = require("passport-local");
const User = require("./models/user.js");
const userRouter = require("./routes/user.js");

const dbUrl= process.env.ATALESDB_URL;
main().then(() => {
    console.log(`connection successfull`)
}).catch(err => console.log(err));

async function main() {
    // await mongoose.connect(dbUrl);
    await mongoose.connect('mongodb://127.0.0.1:27017/wanderlust');
    // 'mongodb://127.0.0.1:27017/wanderlust'
    // use `await mongoose.connect('mongodb://user:password@127.0.0.1:27017/test');` if your database has auth enabled
}

const sessionOption = {
    secret: "mysupersecretcode",
    resave: false,
    saveUninitialized: true,
    cookie: {
        expries: Date.now() + 7 * 24 * 60 * 60 * 1000,
        maxAge: 7 * 24 * 60 * 60 * 1000,
        httpOnly: true,
    }
};


app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "views"));
app.use(express.static(path.join(__dirname, "/public")));
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(methodOverride('_method'));
app.engine('ejs', ejsMate);
app.use(session(sessionOption));
app.use(flash());



app.use(passport.initialize());
app.use(passport.session());

app.use((req,res,next)=>{
    res.locals.success=req.flash("success");
    res.locals.error=req.flash("error");
    res.locals.currUser = req.user; 
    next();
});
passport.use(new LocalStrategy(User.authenticate()))

passport.serializeUser(User.serializeUser());
passport.deserializeUser(User.deserializeUser());


app.get("/listing/demouser",async (req,res)=>{
    let fakeUser = new User({
        email:"Student@gamil.com",
        username:"delta-Student"
    })

    let newRegister=await User.register(fakeUser,"helloworld")
    // res.send(newRegister)
    console.log(newRegister)
})

app.use("/listing", listing);
app.use("/listing/:id/review", reviews);
app.use("/",userRouter);

// app.all("*", (req, res, next) => {
//     next(new ExpressError(404, "page not found!"));
// });

app.use((err, req, res, next) => {
    let { statusCode = 500, message = "someting went wrong!" } = err;
    res.status(statusCode).render("error.ejs", { message })
    // res.status(statusCode).send(message);
})

// app.get("/", (req, res) => {
//     res.send("working");
// });
    
app.listen(8080, () => {
    console.log(`listening port is 8080`)
});




// app.get("/search",(req, res) => {
//     res.render("/views/include/navbar.ejs")
// })








