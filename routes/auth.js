const express = require("express");
const router = express.Router();

// http://localhost:9000/auth/login
router.get('/login', (req, res) => {
    res.send('<h1> salut les gars</h1>');
});

// http://localhost:9000/auth/register
router.get('/register', (req, res) => {
    res.sendFile(__dirname + '/register.html');
});


module.exports = router;