import express from "express";
import cors from "express";
import "dotenv/config";
import db from './db.js';
import authorsRoutes from "./routes/authorsRoutes.js";
import postsRoutes from "./routes/postsRoutes.js";
import connectDB from "./db.js";




//imposto l'app express e definisco i dati della connessione

const app =express();
const port = 3001
const dbname = "Epicode24"; 


//middleware 
app.use(cors()); //middleware  per la gestione del cors
app.use(express.json()); //middleware per la gestione del formato json

app.use("/authors", authorsRoutes)
app.use("/posts", postsRoutes)
db();


// await connectDB();

app.listen(process.env.PORT,() => {
    console.log("server is running on port" + process.env.PORT)
})


