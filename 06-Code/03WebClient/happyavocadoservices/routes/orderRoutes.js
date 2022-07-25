const express = require("express");
const order = require("../models/order");
const router = express.Router();

//Get all orders
router.get("/order/all", async(req, res) => {
    try{
        const orders = await order.find();
        res.json(orders)

    }
    catch(err){
        res.status(500).json({message: err.message});   
    }
});


module.exports = router;
