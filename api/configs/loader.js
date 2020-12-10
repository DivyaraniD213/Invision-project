"use strict";

var fs = require("fs"); //filesystem module
var multer = require("multer");
var path = require("path");

module.exports = function (app, mongoose, utils, config, constants, logger) {
    let storage = multer.diskStorage({
        destination: function (req, file, cb) {
            console.log("inside destination")
            req.body[file.fieldname] = file.originalname;
            let ext = path.extname(file.originalname);
            if (ext === ".ppt" || ext === ".pptx") {
                cb(null, __dirname + '/../uploads')
            } else if(ext === ".xls" || ext === ".xlsx"){
                cb(null, __dirname + '/../uploads')
            }
        },
        filename : function(req,file,cb){
            let fileName = file.originalname;
            cb(null, fileName)
        },
    });

    let upload = multer({ storage: storage });

    
    // Paths
    var modelPath = config.root + "/models";
    var routePath = config.root + "/routes";

    // Bootstrap models
    fs.readdirSync(modelPath).forEach(function (file) {
        console.log("Loading model : " + file);
        require(modelPath + "/" + file + "/schema.js")(mongoose, utils);
    });

    // Bootstrap routes
    fs.readdirSync(routePath).forEach(function (file) {
        console.log("Loading routes : " + file);
        require(routePath + "/" + file)(app, mongoose, utils, config, constants,logger, upload);
    });



};