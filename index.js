const express = require("express");
var multer = require('multer')
var upload = multer({ dest: 'uploads/' })


const { join } = require("path")

let app = express();


app.get("/", (req, res) => {
    res.sendFile(join(__dirname, "./index.html"))
})

app.post("/upload", upload.any(), (req, res) => {
    let ah = { headers: req.headers, body: req.body }
    console.log(ah)
    res.send(ah)
    res.end()
})


app.listen(5000)