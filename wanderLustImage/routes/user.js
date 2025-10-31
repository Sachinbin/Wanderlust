const express = require("express");
const router= express.Router();

//user route
router.get('/',(req,res)=>{
    res.send("User Home Route");
});
//user show route
router.get("/:id",(req,res)=>{
    res.send("User Show id.");
});
//suer create route
router.post("/",(req,res)=>{
    res.send("user create route")
})
//delete route
router.delete("/:id",(req,res)=>{
    res.send("User Show id.");
});

module.exports=router;