// Importing express
import express from "express";
import { allCategories } from './../controllers/categoriesController.js'

const router = express.Router();

router.get('/', allCategories)

export default router;