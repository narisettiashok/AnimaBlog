const express = require("express");
const bodyParser = require("body-parser");
const mongoose = require('mongoose');

const app = express();

app.use(express.static("public"));
app.use(express.json({limit: '100mb'}));
app.use(bodyParser.urlencoded({extended: true}));

mongoose.connect("mongodb://localhost:27017/userDB", {useNewUrlParser: true, useUnifiedTopology: true});

const userSchema = {
    username: String,
    email: String,
    password: String,
    mobileNumber: String
};

const contactSchema = {
    name: String,
    email: String,
    mobileNumber: Number,
    service: String,
    description: String
}

const User = new mongoose.model("User", userSchema);
const Contact = new mongoose.model("Contact", contactSchema);

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

app.post("/contact", function(req, res) {
    const name = req.body.name;
    const email = req.body.email;
    const mobileNumber = req.body.mobileNumber;
    const service = req.body.Services;
    const description = req.body.description;

    console.log(name + email + mobileNumber + service + description);
})

app.get("/signup.html", function(req, res) {
    res.sendFile(__dirname + "/signup.html");
});

app.post("/signup", function(req, res) {

    const username = req.body.username;
    const email = req.body.email;
    const password = req.body.password;
    const mobileNumber = req.body.mobileNumber;

    const newUser = new User({
    username: username,
    email: email,
    password: password,
    mobileNumber: mobileNumber
    });


    function existingUser() {
        User.findOne({email: email}, function(err, checkUser) {
            if(err) {
                console.log(err)
            } else {
                if(checkUser.username === username || checkUser.mobileNumber === mobileNumber) {
                    return true;
                } else {
                    return false;
                }
            }
        });
    }

    if(existingUser() == true) {
        console.log("Username or Email or Mobile Number ALready exists")
    } else {
        newUser.save();
        res.json({
                status: 'success',
                test: req.body
            });
    } 

    console.log("Data received Succesfully");
    const test2 = req.body;
    console.log(test2);
});

app.post("/login", function(req, res) {
    const username = req.body.username;
    const email = req.body.email;
    const password = req.body.password;
    User.findOne({email: email}, function(err, foundUser) {
        if(err) {
            console.log(err)
        } else {
            if(foundUser.password === password && foundUser.username === username) {
                console.log("Succesfully Logged In");
                res.sendFile(__dirname + "/home.html");
            } else {
                console.log("Login Error")
            }
        }
    })
});

app.listen(3000, function() {
    console.log("Server is running at port 3000");
});