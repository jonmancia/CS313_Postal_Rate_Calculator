const express = require("express");
const app = express();
const path = require("path");
const favicon = require('serve-favicon');
const calculate = require('./calc.js');
// Enable static files
app.use(express.static('public'));
app.use(favicon(__dirname + '/public/' + 'favicon.ico'));
app.set('view engine', 'ejs');
// Routes
app.get("/", (req, res) => {
    res.sendFile(__dirname + '/public/home.html');
});
app.get("/rate", (req, res) => {
    let shippingType = req.query.shippingType;
    let weight = req.query.weight;
    let price = calculate(shippingType, weight);
    res.render("result.ejs", {
        weight: weight,
        price: price
    });
});
app.listen(process.env.PORT || 8888, () => "Listening on Port 8888");