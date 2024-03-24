const express = require('express');
const app = express();

app.use("/", (req, res) => {
    res.send("Hello from your SERVER!");
    });

app.listen(8005, () => {
    console.log("Server is running on port 8005");
});

