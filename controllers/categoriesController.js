// Importing Models
import Categories from './../models/categories.js'

const allCategories = async(req, res) => {
  try {
    const categories = await Categories.findAll();
    res.json(categories);
  } catch (error) {
    // const error= new Error("Tu cuenta no ha sido confirmada");
    return res.status(500).json({message: error.message})
  }
};

export { 
  allCategories 
};
