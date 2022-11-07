// Importing express
import express from "express";
// Importing Environment Variables
import dotenv from "dotenv";
// Importing routes
import router from "./routes/index.js"
// Importing db
import db from './config/db.js'

// Setting environment variables
dotenv.config();
// Configuring express
const app = express();

// Connecting to database
try {
    await db.authenticate();
    console.log('Conexion correcta a la DB');
} catch (error) {
    console.log(error);
}

//Routing
app.use('/', router)

// Port
const PORT = process.env.PORT || 4000
app.listen(PORT, ()=>{
    console.log(`Servidor está funcionando desde el puerto ${PORT}`);
})