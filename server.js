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

app.get("/aboutme.html", function(req, res) {
    res.sendFile(__dirname + "/aboutme.html");
});

app.get("/services.html", function(req, res) {
    res.sendFile(__dirname + "/services.html");
});

app.get("/portfolio.html", function(req, res) {
    res.sendFile(__dirname + "/portfolio.html");
});

app.get("/contact.html", function(req, res) {
    res.sendFile(__dirname + "/contact.html");
});

app.get("/signup.html", function(req, res) {
    res.sendFile(__dirname + "/signup.html");
});

app.post("/signup.html", function(req, res) {

    res.send((console.log("Form Submitted")))
});

app.listen(3000, function() {
    console.log("Server is running at port 3000");
});