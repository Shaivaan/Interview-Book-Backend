const express = require("express");
const Data = require("../model/data.model");
const router = express.Router();

router.get("/",async(req,res)=>{
    try{
        const data = await Data.find().lean().exec();
        res.send(data);
    }catch(err){
        console.log(err);
    }
})


router.get("/:topic",async(req,res)=>{
    try{
        const data = await Data.find({topic:req.params.topic}).lean().exec();
        res.send(data);
    }catch(err){
        console.log(err);
    }
})




module.exports = router;
