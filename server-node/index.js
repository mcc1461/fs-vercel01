const express = require('express');

const mongoose = require('mongoose');
// const UserModel = require('./models/user');   // *  MVC CONNECTED PART   

const fs = require('fs').promises;
const path = require('path');
const cors = require('cors');


const app = express();
app.use(cors());

app.use(express.json());
// app.use(express.urlencoded({ extended: true }));



//WITHOUT DB PART
app.get("/", (req, res) => {
    res.send("Hello from your SERVER!");
});

app.get("/api", async (req, res) => {
    // const jsonFilePath = path.resolve('./data', 'data.json');  //! __dirname is required !!
    const jsonFilePath = path.resolve(__dirname , 'data', 'data.json');
    try {
        
        const data = await fs.readFile(jsonFilePath, "utf8");
        // const stats = await fs.stat(jsonFilePath);
        // console.log(stats);
        // console.log(data);
        res.setHeader('Content-Type', 'application/json'); 
        res.status(200).send(data);
    } catch (err) {
        console.error(err);
        res.status(500).send("An error occurred while reading the file.");
    }
});

// MONGO DB PART
const UserSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    age: {
        type: Number,
        required: true
    },
    username: {
        type: String,
        required: true
    }
});

const UserModel = mongoose.model('User', UserSchema); // ~ Without MVC
mongoose.connect('mongodb+srv://mcc:Mongo1461@mern01.6ujwote.mongodb.net/merndb', { });

// ~ Without MVC
app.all("/users", async (req, res) => {
    try {
        const users = await UserModel.find();
        res.json(users);
    } catch (err) {
        res.status(500).send('Error fetching users');
    }
});

app.all("/users2", async (req, res) => {
    try {
        // await kullanarak sonucu direkt olarak alıyoruz.
        const users = await UserModel.find().where('age').gt(34);
        res.json(users);
    } catch (err) {
        console.error(err); // Hatanın konsolda görünmesini sağlayabiliriz.
        res.status(500).send('Error fetching users');
    }
});



// // * MVC CONNECTED PART
// const userController = require('./controllers/user');
// app.get("/users", userController.list);
// app.get("/users", userController.read);


app.listen(8005, () => {
    console.log("Server is running on port 8005");
});

