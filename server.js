const express = require("express");
const bodyParser = require("body-parser");

const app = express();
app.use(bodyParser.urlencoded({extended: true}));
app.use(express.static("public"));

app.get("/", function(req, res) {
    res.sendFile(__dirname + "/index.html");
});

app.get("/home.html", function(req, res) {
    res.sendFile(__dirname + "/home.html");
});

app.listen(3000, function() {
    console.log("Server is running at port 3000");
});