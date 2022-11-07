// Importing express
import express from "express";

const router = express.Router();

router.get('/products', (req, res)=>{
    res.send('products')
})

export default router;