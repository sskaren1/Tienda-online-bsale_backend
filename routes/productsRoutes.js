// Importing express
import express from "express";
// Importing controllers
import {
    allProducts, 
    // filterProducts,
    // orderProducts, 
    searchProduct, 
    // shoppingCart,
} from "./../controllers/productsController.js";

const router = express.Router();

router.get("/", allProducts);
//router.get("/", filterProducts);
//router.get("/", orderProducts);
router.get("/:nombre", searchProduct); //:id => routing dinamico en express

export default router;
