require("dotenv").config();

const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");
const jwt = require("jsonwebtoken");
const utils = require("./utils");

const app = express();
const port = process.env.PORT || 4000;

// static user details
const userData = {
    userId: "1234",
    password: "1234",
    name: "Some Guy",
    username: "someGuy",
    isAdmin: true
}

// enable cors
app.use(cors());

// parse application/json
app.use(bodyParser.json());

// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: true }));

// middleware that checks if JWT exists and verifies if it doesn't.
// in all future routes, this helps to know if the request is authenticated or not.
app.use(function (req, res, next) {
    // check header or url parameters or post parameters for token
    var token = req.headers['authorization'];
    if (!token) {
        return next(); // if no token, continue
    }

    token = token.replace('Bearer ', '');
    jwt.verify(token, process.env.JWT_SECRET, function (err, user) {
        if (err) {
            return res.status(401).json({
                error: true,
                message: "Invalid user."
            });
        } else {
            req.user = user; // set user to req so other routes can use it
            next();
        }
    });
});

//request handlers
app.get('/', (req, res) => {
    if (!req.user) {
        return res.status(401).json({
            success: false,
            message: 'Invalid user to access it.'
        });
    }
    res.send('Welcome to the Node.js Tutorial! - ' + req.user.name);
});

// validate user credentials
app.post('/users/signin', function (req, res) {
    const user = req.body.username;
    const password = req.body.password;

    // return 400 if user/pass doesn't exist
    if (!user || !password) {
        return res.status(400).json({
            error: true,
            message: "Username or password is required."
        });
    }

    // return 401 if credentials don't match
    if (user !== userData.username || password !== userData.password) {
        return res.status(401).json({
            error: true,
            message: "Username or password is incorrect."
        });
    }

    // generate token
    const token = utils.generateToken(userData);

    // get basic user details
    const userObj = utils.getCleanUser(userData);

    // return token with user details
    return res.json({user: userObj, token});
});

app.listen(port, () => {
    console.log('Server started on: ' + port);
});
