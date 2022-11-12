// Importing express
import express from "express";
// Importing controllers
import {
    allProducts, 
    filterByCategory,
    sortProducts, 
    searchProduct, 
} from "./../controllers/productsController.js";

const router = express.Router();

router.get("/", allProducts);
router.get("/filter/categories/:nameCategory", filterByCategory);//:nameCategory => routing dinamico en express
router.get("/sort/:type/:property", sortProducts);
router.get("/:name", searchProduct);

export default router;
