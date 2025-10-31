const express = require("express");
const app = express();
const users=require("./routes/user.js")
const posts =require("./routes/post.js")
const cookieParser= require("cookie-parser")
const session= require("express-session")
const path=require("path");
const flash=require("connect-flash")


const sessionOption={secret:"mysupersecretstring",
    resave:false,
    saveUninitialized:true
}

app.listen(3000,() => {
    console.log(`listen port is 3000`)
})

app.use(flash())
app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "views"));
app.use(session(sessionOption))
// app.use(cookieParser("secretcode"))
// app.use("/user",users);
// app.use("/post",posts);

// app.get("/getcookies",(req,res)=>{
//     res.cookie("greet", "Namaste",{signed:true})
//     res.cookie("madeIn", "india")
    
//     res.send("Get Cookies!")
    
// })

// app.get("/greet",(req,res)=>{
//     console.log(req.signedCookies);
//     res.send("verifyed")
// })
// app.get("/test",(req,res)=>{
//     res.send("test successfull route")
// })
// app.get("/reqcount",(req,res)=>{
//     if(req.session.count){
//         req.session.count++;
//     }else{
//         req.session.count=1
//     }
//     res.send(`request count is ${req.session.count}`)
// })

app.get("/register",(req,res)=>{
    let {name="anonymouse"}=req.query;
    req.session.name=name;
    if(name==="anonymouse"){
        req.flash("error","user not registered")
    }else{
        req.flash("success","user register successfully!")
    }
    res.redirect("/hello")
})

app.get("/hello",(req,res)=>{
    res.locals.successMsg=req.flash("success");
    res.locals.errorMsg=req.flash("error");
    res.render("flash.ejs",{name:req.session.name});
    // res.send(`hello , ${req.session.name}`)
})