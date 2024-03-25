const express = require('express');
const fs = require('fs');
const path = require('path');

const app = express();

app.use("/", (req, res) => {
    res.send("Hello from your SERVER!");
    });

app.get('/api', (req, res) => {
    const jsonFilePath = path.resolve('./', 'data.json');
    const data = fs.readFileSync(jsonFilePath, "utf8", (err, data) => {
        if (err) {
            res.status(500).send("An error occurred while reading the file.");
            return;
        }
        res.setHeader('Content-Type', 'application/json');
        res.send(data);

    });
});


app.listen(8005, () => {
    console.log("Server is running on port 8005");
});

