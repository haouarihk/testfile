const express = require("express");
const { join } = require("path")

let app = express();

app.get("/", (req, res) => {
    res.sendFile(join(__dirname, "./index.html"))
})

app.post("/upload", (req, res) => {
    console.log(req.body)

    res.end()
})


app.listen(5000)