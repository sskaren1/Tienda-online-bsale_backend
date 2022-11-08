// Importing Sequelize
import { DataTypes } from 'sequelize';
// Importing DB
import db from './../config/db.js';

const categoriesModel = db.define('category', {
    "id": {type: DataTypes.INTEGER, primaryKey:true},
    "name": DataTypes.STRING,
}, {
    freezeTableName: true,
    timestamps: false
})

export default categoriesModel;