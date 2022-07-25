const express = require("express");
const provider = require("../models/provider");
const router = express.Router();

//Get all providers
router.get("/provider/all", async(req, res) => {
    try{
        const providers = await provider.find();
        res.json(providers)

    }
    catch(err){
        res.status(500).json({message: err.message});   
    }
});


module.exports = router;
