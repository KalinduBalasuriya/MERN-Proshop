import express from 'express';
import asyncHandler from 'express-async-handler';
const router = express.Router();
import Product from '../models/productModel.js';


// Fet all products
// route GET/api/products
// access Public
router.get('/', async (req, res) => {
    try {
        const products = await Product.find({})
        res.json(products);
    }
    catch {
        console.error(`Error: ${error.message}`)
        process.exit(1)
    }
})

// Fet single products
// route GET/api/products/:id
// access Public
router.get('/:id', asyncHandler(async (req, res) => {
    const product = await Product.findById(req.params.id)
    if (product) {
        res.json(product)
        console.log('Here i am');
    } 
    else{
        res.status(404).json({ message: "Product not found" })
    }
}))

export default router;