"use strict";
//Mongoose is an ODM (Object Document Mapping) tool for Node.js and MongoDB. It helps you convert the objects in your code to documents in the database and vice versa.
var mongoose = require("mongoose");
var config = require("./config");



config.mongo.options.useNewUrlParser = true;
config.mongo.options.useUnifiedTopology = true;
config.mongo.options.autoIndex= true;
mongoose.connect(config.mongo.dbURL, config.mongo.options, function (error) {
    if (error) {
        console.log(error)
    } else {
        console.log("Database connection to MongoDB opened.")
    }

});


module.exports = mongoose;