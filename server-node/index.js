const express = require('express');
const fs = require('fs');
const path = require('path');

const app = express();

app.get("/", (req, res) => {
    res.send("Hello from your SERVER!");
    });

    app.get('/api', async (req, res) => {
        const jsonFilePath = path.resolve('./data', 'data.json');
        try {
            const data = await fs.readFileSync(jsonFilePath, "utf8");
            res.setHeader('Content-Type', 'application/json');
            res.send(data);
        } catch (err) {
            console.error(err);
            res.status(500).send("An error occurred while reading the file.");
        }
    });



app.listen(8005, () => {
    console.log("Server is running on port 8005");
});

