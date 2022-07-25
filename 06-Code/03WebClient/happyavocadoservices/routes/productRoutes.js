const express = require("express");
const product = require("../models/product");
const router = express.Router();


//Get all Products
router.get("/product/all", async(req, res) => {
    try{
        const products = await product.find();
        res.json(products)

    }
    catch(err){
        res.status(500).json({message: err.message});   
    }
});

//Get products by ProductId
router.get("/product/:id", async(req, res)  => {
    try{
        const productObject = await product.findOne({ id: req.params.id});    
        if(productObject == null){
            res.status(400).json("Product not Found " + 404 );
        }
        else {
            res.json(productObject);
        }
    }
    catch(err){
        res.status(500).json({message: err.message});   
    }
});

//Create/Insert one product (Post) 
router.post("/product", async(req, res) => {
    const productObject = new product({
    
        id: req.body.id,
        name: req.body.name,
        price: req.body.price,
        type: req.body.type,
        description: req.body.description
    });
    try{
        const productToSave = await productObject.save();
        res.status(200).json(productToSave);
    }
    catch(error){
        res.status(500).json({message: error.message});
    }
});

module.exports = router;


