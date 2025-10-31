const express=require("express")
const router=express.Router();


// post route
router.get('/',(req,res)=>{
    res.send("post Home Route");
});
// show route
router.get("/:id",(req,res)=>{
    res.send("post Show id.");
});
// create route
router.post("/",(req,res)=>{
    res.send("post create route")
})
//delete route
router.delete("/:id",(req,res)=>{
    res.send("post Show id.");
});

module.exports=router;