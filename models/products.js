// Importing Sequelize
import { DataTypes } from 'sequelize';
// Importing DB
import db from './../config/db.js';

const productsModel = db.define('product', {
    "id": {type: DataTypes.INTEGER, primaryKey:true},
    "name": DataTypes.STRING,
    "url_image": DataTypes.STRING,
    "price": DataTypes.FLOAT,
    "discount": DataTypes.INTEGER,
    "category": DataTypes.INTEGER,
}, {
    freezeTableName: true,
    timestamps: false
})

export default productsModel;