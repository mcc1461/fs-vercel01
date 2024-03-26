const express = require('express');

const mongoose = require('mongoose');
const UserModel = require('./models/user');
mongoose.connect('mongodb+srv://mcc:Mongo1461@mern01.6ujwote.mongodb.net/merndb', { });


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
    // const jsonFilePath = path.resolve('./data', 'data.json'); 
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
// app.get("/users", async (req, res) => {
//     try {
//         const users = await UserModel.find();
//         res.json(users);
//     } catch (err) {
//         res.status(500).send('Error fetching users');
//     }
// });

const userController = require('./controllers/user');
app.get("/users", userController.list);
app.get("/users", userController.read);


app.listen(8005, () => {
    console.log("Server is running on port 8005");
});

