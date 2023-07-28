const express = require('express')
const router =  new express.Router();
const MensRanking = require('../models/mens')
// we will handle post request
router.post("/mens",async(req,res)=>{
    try{

        const addingMensRecord = new MensRanking(req.body)
        console.log(req.body)
       const insertMens = await addingMensRecord.save();
       res.status(201).send(insertMens)
    }catch(e){
        res.status(400).send(e);
    }
})

//get all data from the database
router.get("/mens",async(req,res)=>{
    try{
        const getMens = await MensRanking.find().sort({"ranking" :1 })
       res.send(getMens)
    }catch(e){
        res.status(400).send(e);
    }
})


//get data from the database vby id (only one data find)
router.get("/mens/:id",async(req,res)=>{
    try{
        const _id = req.params.id;
        const getMen = await MensRanking.findById(_id)
       res.send(getMen)
    }catch(e){
        res.status(400).send(e);
    }
})

//patch data from the database by id (only one data find)
router.patch("/mens/:id",async(req,res)=>{
    try{
        const _id = req.params.id;
        const getMen = await MensRanking.findByIdAndUpdate(_id,req.body , {
            new : true
        })
       res.send(getMen)
    }catch(e){
        res.status(500).send(e);
    }
})

//delete data from the database by id (only one data find)
router.delete("/mens/:id",async(req,res)=>{
    try{
        const _id = req.params.id;
        const deleteMen = await MensRanking.findByIdAndDelete(_id)
       res.send(deleteMen)
    }catch(e){
        res.status(500).send(e);
    }
})

module.exports = router