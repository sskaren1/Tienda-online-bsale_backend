// Importing ORM Sequelize
import Sequelize from "sequelize";
// Importing Environment Variables
import dotenv from "dotenv";
// Setting environment variables
dotenv.config();

const db = new Sequelize(process.env.DB_NAME, process.env.DB_USER, process.env.DB_PASSWORD, {
    host: process.env.DB_HOST,
    port: 3306,
    dialect: 'mysql',
    pool: {
        max: 5, // max de conexiones
        min: 0, // min de conexiones
        acquire: 30000, // tiempo antes de comentar el error
        idle: 10000 // tiempo que debe de transcurrir para finalizar una conexión a la db
    },
    operatorAliases: false
})

export default db;