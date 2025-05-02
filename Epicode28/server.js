const express = require ('express');
const cors = require('cors');
const mongoose = require('mongoose');
require('dotenv').config();



const app = expree();
const port = 3001;
const dbname = "Epicode28";

app.use(cors());
app.use(express.json());



//model
const postSchema = new mongoose.Schema({
    title:{type: String, required: true},
    body:{type: String, required: true},
    date:{type: date, required: true},
})
const postModel = mongoose.model('posts', postSchema);



const userSchema = new mongoose.Schema({
    name:{type: String, requires: true},
    lastname:{type: String, requires: true},
    age:{type: String, requires: true},
    email:{type: String, requires: true, unicque: true},
    adress:{
    street:{type: String},
    city: {type: String},
    state:{type: String},
}
})
posts: [
   { type: mongoose.type.objectId, ref: 'posts'}
]


const userModel = mongoose.model('users', userSchema);


//Enpoint

app.get('create_user', async (req, res) => {
    const newpost = {
        title: "referencing",
        body: "post esempio referencing mongodb",
        date: date.new ()
    }
})










mongoose.connect(process.env.MONGODB_URL + dbname)
.then(resp => app.listen(port,() => console.log("server attivo sulla port" + port)))
.catch(err => console.error(err))

