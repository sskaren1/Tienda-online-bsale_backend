// Importing sequelize
import { Sequelize } from 'sequelize';
// Importing Models
import Products from "./../models/products.js";

const allProducts = async (req, res) => {
  try {
    const products = await Products.findAll();
    res.json(products);
  } catch (error) {
    // const error= new Error("Tu cuenta no ha sido confirmada");
    return res.status(500).json({ message: error.message });
  }
};

// const filterProducts = (req, res) => {
//   res.send("lista  filtrada productos");
// };
// const orderProducts = (req, res) => {
//   res.send("lista  filtrada productos");
// };
const searchProduct = async (req, res) => {
  const { nombre } = req.params;

  // Validar que no esté vacío el campo de busqueda
  if(!nombre.trim()) {
    return res.redirect('back');
  }

  // Consult the products
  const product = await Products.findAll({
    where: {
      name: {
        [Sequelize.Op.like] : '%' + nombre + '%'
      },
    }
  });
  // const product = await Products.findAll({name});
  if (product) {
    res.json(product);
    // res.json({msg:"Producto existente"})
  } else {
    const error = new Error("Producto no existe");
    return res.status(404).json({ msg: error.message });
  }
};

// const shoppingCart = (req, res) => {
//   res.send("producto buscado");
// };

export {
  allProducts,
  // filterProducts,
  // orderProducts,
  searchProduct,
  // shoppingCart,
};
