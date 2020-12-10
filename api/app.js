
"use strict"; 
require("dotenv").config();


var env = process.env.NODE_ENV || "development"; 
var config = require("./configs/config");


var express = require("express"); 
var app = express(); 

const bodyParser = require("body-parser");
var passport = require('passport');
var cron = require('node-cron');
app.use(passport.initialize());
const mongoose = require("./configs/mongodb"); 
const constants = require("./configs/constants");
var utils = require("./utils/util"); 
console.log("Entering environment \"" + env + "\"");



app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));


app.use("/images", express.static(__dirname + "/uploads"));
app.use("/docs", express.static(__dirname + "/apidoc"));
var logger = require('logger').createLogger('development.log');
require("./configs/loader")(app, mongoose, utils, config, constants, logger);


app.listen(config.port, function () {
    console.log("Server Listening to port :", config.port);
});

cron.schedule('* * * Jan,Sep Sun', () => {
    console.log('running on Sundays of January and September');
});

module.exports = app;