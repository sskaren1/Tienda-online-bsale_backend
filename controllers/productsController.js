// Importing sequelize
import { Sequelize } from "sequelize";
// Importing Models
import Products from "./../models/products.js";
import Categories from "./../models/categories.js";

// Get all products
const allProducts = async (req, res) => {
  try {
    const products = await Products.findAll({
      order: [["category", "ASC"]],
    });
    res.json(products);
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};

// Filtering products by category
const filterByCategory = async (req, res) => {
  const { nameCategory } = req.params;

  try {
    if (nameCategory === "all") {
      const products = await Products.findAll({
        order: [["category", "ASC"]],
      });
      res.json(products);
    } else {
      const categorie = await Categories.findOne({
        where: { name: nameCategory },
      });
      console.log("categorie", categorie);
      const { id } = categorie;

      // Consult the products
      const product = await Products.findAll({
        where: {
          category: id,
        },
      });
      if (product) {
        res.json(product);
      }
    }
  } catch (error) {
    error = new Error("No hay productos");
    return res.status(500).json({ message: error.message });
  }
};

// Sort products ascending
const sortProducts = async (req, res) => {
  const { type, property } = req.params;
  try {
    const products = await Products.findAll({
      order: [[property, type]],
    });
    res.json(products);
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};

// Product finder
const searchProduct = async (req, res) => {
  const { name } = req.params;

  // Validar que no esté vacío el campo de busqueda
  if (!name.trim()) {
    return res.redirect("back");
  }

  // Consult the products
  const product = await Products.findAll({
    where: {
      name: {
        [Sequelize.Op.like]: "%" + name + "%",
      },
    },
  });
  if (product) {
    res.json(product);
  } else {
    const error = new Error("Producto no existe");
    return res.status(404).json({ msg: error.message });
  }
};

export { allProducts, filterByCategory, sortProducts, searchProduct };
