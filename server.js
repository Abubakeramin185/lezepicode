// const express =require('express')
import express from "express"
import "dotenv/config";
import db from './db.js';


const app = express();
app.use(express.json());
app.get('/', (req, res) => {
    res.send('ciao a tutti!');
})

db();
app.post('/', (req, res) => {
    res.json(req.body)
})

app.listen(process.env.port, () => {
    console.log(`server is running on port 3001`)
})