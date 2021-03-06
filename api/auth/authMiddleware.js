var mongoose = require("mongoose");
var utils = require("../utils/util");
var Users = mongoose.model('Users');
var config = require("../configs/config");


module.exports = function (req, res, next) {

    var token = req.headers['authorization'];
    console.log("token------------------->", token)
    if (token) {
        var decodedData;
        utils.verifyToken(token, function (err, payload) {
            if (err) {
                return utils.sendAuthError(req, res, "NOT_AUTHERIZED", "NOT_AUTHERIZED");
            } else {
                decodedData = payload;
                console.log("decodedData----------------->", decodedData);
                if (decodedData && decodedData.exp <= new Date()) {
                    return utils.sendCustomError(req, res, "BAD_REQUEST", "TOKEN_EXPIRED");
                } else {
                    var userId = decodedData._id;
                    Users.getUserById(userId, function (err, user) {
                        if (err || !user) {
                            return utils.sendAuthError(req, res, "NOT_AUTHERIZED", "NOT_AUTHERIZED");
                        } else {
                            req.user = user;
                            
                            next();
                        }

                    })

                }
            }
        });


    } else {
        return utils.sendAuthError(req, res, "NOT_AUTHERIZED", "NOT_AUTHERIZED");
    }




}