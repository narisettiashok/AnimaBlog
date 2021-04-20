const express = require("express");
const bodyParser = require("body-parser");
const mongoose = require("mongoose");
const session = require('express-session');
const passport = require('passport');
const passportLocalMongoose = require("passport-local-mongoose");

const app = express();
app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());
app.use(express.static("public"));
app.use(express.json({limit: '100mb'}));
app.use(bodyParser.urlencoded({extended: true}));


app.use(session({
    secret: "Amaze Creations Secret Code.",
    resave: false,
    saveUninitialized: false
}));

app.use(passport.initialize());
app.use(passport.session()); 
 
mongoose.connect('mongodb://localhost:27017/userDB', {useNewUrlParser: true, useUnifiedTopology:true});
mongoose.set('useCreateIndex', true);

const userSchema = new mongoose.Schema({
    username: String,
    email: String,
    password: String,
    mobileNumber: Number
});

userSchema.plugin(passportLocalMongoose);

const User = new mongoose.model("User", userSchema);
passport.use(User.createStrategy());
passport.serializeUser(User.serializeUser());
passport.deserializeUser(User.deserializeUser());



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
    const mobileNumber = req.body.mobilenumber;

    User.register({username: username, email: email, mobileNumber: mobileNumber}, password, function(err, user) {
        console.log(user);
        if(err) {
            console.log(err);
            res.sendFile(__dirname + "/signup.html");
        } else {
            passport.authenticate("local")(req, res, function() {
                console.log("Signup Succesfull");
            })
        }
    });



// const newUser = new User({
//     username: username,
//     email: email,
//     password: password,
//     mobileNumber: mobileNumber
// });

//     newUser.save(function(err) {
//         if(err) {
//             console.log(err)
//         } else {
//             console.log("User Submitted Succesfully");
//         }
//     });
//     console.log("Form Submitted", req.body);
//     res.end();
});

app.post("/login", function(req, res) {
    const username = req.body.username;
    const email = req.body.email;
    const password = req.body.password;

    const user = new User({
        username: req.body.username,
        password: req.body.password
    });

    req.login(user, function(err) {
        if(err) {
            console.log(err);
        } else {
            passport.authenticate('local')(req, res, function() {
                res.sendFile(__dirname + "/home.html");
            })
        }
    });

    // User.findOne({email: email}, function(err, foundUser) {
    //     if(err) {
    //         console.log(err)
    //     } else {
    //         if(foundUser.password === password && foundUser.username === username) {
    //             res.sendFile(__dirname + "/home.html");
    //             console.log("Login Succesfull")
    //         }
    //     }
    // })
});

app.listen(3002, function() {
    console.log("Server is running at port 3002");
});