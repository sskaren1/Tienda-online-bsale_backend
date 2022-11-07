
// Importing express
import express from "express";
// Importing Environment Variables
import dotenv from "dotenv";

// Setting environment variables
dotenv.config();
// Configuring express
const app = express();



// Port
const PORT = process.env.PORT || 4000
app.listen(PORT, ()=>{
    console.log(`Servidor está funcionando desde el puerto ${PORT}`);
})