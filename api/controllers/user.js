"use strict";

const { queue } = require("async");
const { token } = require("morgan");
const util = require("../utils/util");

let xlsxFile = require('read-excel-file/node');
module.exports = function (mongoose, utils, config, constants, logger) {

    var Users = mongoose.model('Users');
    var userCtrl = {}



    userCtrl.addAdmin = async function (req, res) {
        try {
            console.log("----------------req.user", req.user)
            if (req.user && req.user.type === 'superAdmin') {
                var userObj = {};
                userObj.type = "admin";
                //userObj.ID = '';
                if (req.body.name) {
                    userObj.name = req.body.name;
                }
                if (req.body.email) {
                    userObj.email = req.body.email;
                }
                if (req.body.empCode) {
                    userObj.empCode = req.body.empCode;
                }
                var query = {};
                query.email = req.body.email;
                let data = await Users.getData(query);
                if (data) {
                    return utils.sendCustomError(req, res, "CONFLICT", "USER_EXISTS")
                }
                else {
                    let emailThePassword = utils.generatePassword();
                    userObj.password = await utils.encryptPassword(emailThePassword);

                    let data = await Users.addData(userObj);
                    console.log("________________data", data);
                    await utils.sendMail(userObj.name, userObj.email, emailThePassword);
                    var response = {};
                    response.name = data.name;
                    response.email = data.email;
                    response.empCode = data.empCode;
                    return utils.sendResponse(req, res, response, "SUCCESS", "SUCCESS");
                }
            } else {
                return utils.sendAuthError(req, res, "NOT_AUTHERIZED", "NOT_AUTHERIZED")
            }
        } catch (error) {
            console.log('addAdmin error', error)
            return utils.sendDBCallbackErrs(req, res, error, null);
        }

    }


   
    userCtrl.addSuperAdmin = async function (req, res) {
        try {
            console.log("----------------req.user", req.user)
            if (req.user && req.user.type === 'superAdmin') {
                var userObj = {};
                userObj.type = "superAdmin";
                userObj.ID = '';
                if (req.body.name) {
                    userObj.name = req.body.name;
                }
                if (req.body.email) {
                    userObj.email = req.body.email;
                }
                if (req.body.empCode) {
                    userObj.empCode = req.body.empCode;
                }
                var query = {};
                query.email = req.body.email;
                let data = await Users.getData(query);
                if (data) {
                    return utils.sendCustomError(req, res, "CONFLICT", "USER_EXISTS")
                }
                else {
                    let emailThePassword = utils.generatePassword();
                    userObj.password = await utils.encryptPassword(emailThePassword);

                    let data = await Users.addData(userObj);
                    console.log("________________data", data);
                    await utils.sendMail(userObj.name, userObj.email, emailThePassword);
                    return utils.sendResponse(req, res, data, "SUCCESS", "SUCCESS");
                }
            } else {
                return utils.sendAuthError(req, res, "NOT_AUTHERIZED", "NOT_AUTHERIZED")
            }

        } catch (error) {
            console.log("____________Err", error)
            return utils.sendDBCallbackErrs(req, res, error, null);
        }
    }
    userCtrl.deleteAdmin = async function (req, res) {
        try {
            console.log("----------------req.user", req.user)
            if (req.user && req.user.type === 'superAdmin') {

                let data = await Users.removeDataById(req.params.userId);
                if (!data) {
                    return utils.sendCustomError(req, res, "HTTP_ERR", "DATA_NOT_EXISTS")
                } else {
                    return utils.sendResponse(req, res, data, "SUCCESS", "SUCCESS");
                }
            } else {
                return utils.sendAuthError(req, res, "NOT_AUTHERIZED", "NOT_AUTHERIZED")
            }
        } catch (error) {
            return utils.sendDBCallbackErrs(req, res, error, null);
        }

    }
    userCtrl.deleteSuperAdmin = async function (req, res) {
        try {
            console.log("----------------req.user", req.user)
            if (req.user && req.user.type === 'superAdmin') {
                console.log("here")
                let data = await Users.removeDataById(req.params.userId);
                if (!data) {
                    return utils.sendCustomError(req, res, "HTTP_ERR", "DATA_NOT_EXISTS")
                } else {
                    return utils.sendResponse(req, res, data, "SUCCESS", "SUCCESS");
                }
            } else {
                return utils.sendAuthError(req, res, "NOT_AUTHERIZED", "NOT_AUTHERIZED")
            }
        } catch (error) {
            return utils.sendDBCallbackErrs(req, res, error, null);
        }

    }

    userCtrl.saveQuestionnaires = async function (req, res) {
        try {
            if (req.user && req.user.type === 'superAdmin' || 'admin') {
                console.log("re body", req.user)
                var userObj = {};
                if (req.body.title) {
                    userObj.title = req.body.title;
                }
                if (req.body.description) {
                    userObj.description = req.body.description;
                }
                if (req.body.buttonTitle) {
                    userObj.buttonTitle = req.body.buttonTitle;
                }
                if (req.body.buttonText) {
                    userObj.buttonText = req.body.buttonText;
                }
                if (req.body.checkBoxText) {
                    userObj.checkBoxText = req.body.checkBoxText;
                }
                if (req.body.startDate) {
                    userObj.startDate = req.body.startDate;
                }
                if (req.body.endDate) {
                    userObj.endDate = req.body.endDate;
                }
                if (req.body.autoReminder) {
                    userObj.autoReminder = req.body.autoReminder;
                }
                if (req.body.mailBody) {
                    userObj.mailBody = req.body.mailBody;
                }
                if (req.body.participantXLSheet) {
                    userObj.participantXLSheet = req.body.participantXLSheet
                }
                if (req.body.contentPptFile) {
                    userObj.contentPptFile = req.body.contentPptFile
                }
                userObj.ID = req.user._id;

                console.log("user--", userObj)
                var query = {};
                query.title = req.body.title;
                let data = await Users.getData(query);
                if (data) {
                    return utils.sendCustomError(req, res, "CONFLICT", "USER_EXISTS")
                }

                if (req.body.participantXLSheet) {
                    let participantsEmailIds = [];
                    await xlsxFile(__dirname + '/../uploads/' + req.body.participantXLSheet).then((rows) => {
                        for (let i in rows) {
                            for (let j in rows[i]) {
                                if (i !== "0" && j === "1") {
                                    participantsEmailIds.push(rows[i][j]);
                                }
                            }
                        }
                    });
                    console.log("participantsEmailIds--", participantsEmailIds)
                    userObj.participants = participantsEmailIds;

                    let data = await Users.addData(userObj);
                    console.log("________________data", data);

                    //updating
                    console.log("questionnaire id", data._id)
                    var updateObj = {};

                    updateObj.ID = data._id;
                    await Users.updateDataById(req.user._id, updateObj);
                    //

                    return utils.sendResponse(req, res, data, "SUCCESS", "SUCCESS");
                }
            } else {
                return utils.sendAuthError(req, res, "NOT_AUTHERIZED", "NOT_AUTHERIZED")
            }

        } catch (error) {
            console.log("error", error)
            return utils.sendDBCallbackErrs(req, res, error, null);
        }
    }

    userCtrl.loginUser = async function (req, res) {
        try {
            var query = {};
            query.email = req.body.email;
            query.password = req.body.password;
            query.password = await utils.encryptPassword(req.body.password);
            let data = await Users.getData(query);
            console.log("----data", data, "query= ", query);

            if (!data) {
                return utils.sendCustomError(req, res, "HTTP_ERR", "USER_NOT_EXISTS")
            }
            else {

                data.token = await utils.generateBearerToken();
                data.tokenExpiry = await utils.generateExpiryTime();

                data = await Users.updateDataById(data._id, { token: data.token, tokenExpiry: data.tokenExpiry });
                return utils.sendResponse(req, res, data, "SUCCESS", "SUCCESS");
            }

        } catch (error) {
            return utils.sendDBCallbackErrs(req, res, error, null);
        }

    }


    userCtrl.publish = async function (req, res) {
        try {
            if (req.user && req.user.type === 'superAdmin' || "admin") {
                let data = await Users.getDataById(req.params.userId);
                if (!data) {
                    return utils.sendCustomError(req, res, "HTTP_ERR", "POLICY_NOT_EXISTS")
                } else {
                    var userObj = {};
                    console.log("publish data", data.participants);
                    for (let i = 0; i < data.participants.length; i++) {
                        let data1 = await Users.getDataById(req.params.userId);
                        console.log("publish ----------data", data1.participants);
                        userObj.email = data1.participants[i];
                        let emailThePassword = utils.generatePassword();
                        userObj.password = await utils.encryptPassword(emailThePassword);
                        userObj.questionnaireID = req.params.userId;
                        userObj.title = data1.title;
                        userObj.description = data1.description;
                        userObj.buttonTitle = data1.buttonTitle;
                        userObj.buttonText = data1.buttonText;
                        userObj.checkBoxText = data1.checkBoxText;
                        userObj.startDate = data1.startDate;
                        userObj.endDate = data1.endDate;
                        userObj.autoReminder = data1.autoReminder;
                        userObj.mailBody = data1.mailBody;
                        userObj.contentPptFile = data1.contentPptFile;
                        userObj.status = "null";

                        let data = await Users.addData(userObj);
                        console.log("________________data", data);
                        await utils.sendMail(userObj.name, userObj.email, emailThePassword);

                    }
                    return utils.sendResponse(req, res, data, "SUCCESS", "SUCCESS");
                }
            } else {
                return utils.sendAuthError(req, res, "NOT_AUTHERIZED", "NOT_AUTHERIZED")
            }
        } catch (error) {
            console.log("publish error", error)
            return utils.sendDBCallbackErrs(req, res, error, null);
        }
    }

    userCtrl.remind = async function (req, res) {
        try {
            let data = await Users.getDataById(req.params.userId);
            if (!data) {
                return utils.sendCustomError(req, res, "HTTP_ERR", "POLICY_NOT_EXISTS")
            } else {
                var userObj = {};
                for (let i = 0; i < data.participants.length; i++) {
                    let data1 = await Users.getDataById(req.params.userId);
                    userObj.email = data1.participants[i];
                    let emailThePassword = "Reminder to Accept the questionnaire";
                    utils.sendMail(userObj.name, userObj.email, emailThePassword);
                }
                return utils.sendResponse(req, res, data, "SUCCESS", "SUCCESS");
            }
        } catch (error) {
            console.log("remind error", error)
            return utils.sendDBCallbackErrs(req, res, error, null);
        }
    }


    userCtrl.preview = async function (req, res) {
        try {
            if (req.user && req.user.type === 'superAdmin' || "admin") {
                let data = await Users.getDataById(req.params.userId);
                if (!data) {
                    return utils.sendCustomError(req, res, "HTTP_ERR", "USER_NOT_EXISTS")
                } else {
                    return utils.sendResponse(req, res, data, "SUCCESS", "SUCCESS");
                }
            } else {
                return utils.sendAuthError(req, res, "NOT_AUTHERIZED", "NOT_AUTHERIZED")
            }


        } catch (error) {
            return utils.sendDBCallbackErrs(req, res, error, null);
        }
    }



    userCtrl.listSuperAdmin = async function (req, res) {

        try {
            console.log("----------------req.user", req.user)
            if (req.user && req.user.type === 'superAdmin') {
                var queryObj = {};
                queryObj.query = {};
                if (req.query.name) {
                    queryObj.query.name = req.query.name;
                }
                if (req.query.email) {
                    queryObj.query.email = req.query.email;
                }
                queryObj.query.type = "superAdmin";
                console.log(queryObj)
                queryObj.options = {

                };
                if (req.query.limit) {
                    queryObj.options.limit = JSON.parse(req.query.limit)
                }
                if (req.query.skip) {
                    queryObj.options.skip = JSON.parse(req.query.skip);
                }
                if (req.query.sortField && req.query.sortOrder) {
                    console.log("------------------sortField", req.query.sortField, req.query.sortOrder);
                    var sortField = req.query.sortField;
                    var sortOrder = req.query.sortOrder;
                    queryObj.options.sort = { [`${sortField}`]: JSON.parse(sortOrder) };
                };
                if (req.query.searchText) {
                    queryObj.query.name = { $regex: req.query.searchText, $options: 'i' }
                };
                queryObj.selectFields = 'name type email empCode ';
                queryObj.populate = { path: 'category', select: 'name' }
                console.log(queryObj)
                let data = await Users.getLists(queryObj);
                let count = await Users.getCount(queryObj.query);
                return utils.sendResponse(req, res, data, "SUCCESS", "SUCCESS", count);

            } else {
                return utils.sendAuthError(req, res, "NOT_AUTHERIZED", "NOT_AUTHERIZED")
            }
        } catch (error) {
            return utils.sendDBCallbackErrs(req, res, error, null);
        }
    }


    userCtrl.listAdmin = async function (req, res) {

        try {
            console.log("----------------req.user", req.user)
            if (req.user && req.user.type === 'superAdmin') {
                var queryObj = {};
                queryObj.query = {};
                if (req.query.name) {
                    queryObj.query.name = req.query.name;
                }
                if (req.query.email) {
                    queryObj.query.email = req.query.email;
                }
                queryObj.query.type = "admin";
                console.log(queryObj)
                queryObj.options = {

                };
                if (req.query.limit) {
                    queryObj.options.limit = JSON.parse(req.query.limit)
                }
                if (req.query.skip) {
                    queryObj.options.skip = JSON.parse(req.query.skip);
                }
                if (req.query.sortField && req.query.sortOrder) {
                    console.log("------------------sortField", req.query.sortField, req.query.sortOrder);
                    var sortField = req.query.sortField;
                    var sortOrder = req.query.sortOrder;
                    queryObj.options.sort = { [`${sortField}`]: JSON.parse(sortOrder) };
                };
                // }
                if (req.query.searchText) {
                    queryObj.query.name = { $regex: req.query.searchText, $options: 'i' }
                };
                queryObj.selectFields = 'name type email empCode ';
                queryObj.populate = { path: 'category', select: 'name' }
                console.log(queryObj)
                let data = await Users.getLists(queryObj);
                let count = await Users.getCount(queryObj.query);
                return utils.sendResponse(req, res, data, "SUCCESS", "SUCCESS", count);
            } else {
                return utils.sendAuthError(req, res, "NOT_AUTHERIZED", "NOT_AUTHERIZED")
            }

        } catch (error) {
            return utils.sendDBCallbackErrs(req, res, error, null);
        }
    }


    userCtrl.iAccept = async function (req, res) {
        try {
            if (req.user) {

                var userObj = {};
                userObj.status = "accepted";
                let data = await Users.updateDataById(req.user._id, userObj);
                console.log("iAccept", req.user.questionnaireID);
                await Users.updateDataById(req.user.questionnaireID, { acceptedBy: req.user.email });
                var response = {};
                response.title = data.title;
                if (!data) {
                    return utils.sendCustomError(req, res, "HTTP_ERR", "DATA_NOT_EXISTS")
                } else {
                    return utils.sendResponse(req, res, response, "SUCCESS", "SUCCESS");
                }
            } else {
                return utils.sendAuthError(req, res, "NOT_AUTHERIZED", "NOT_AUTHERIZED")
            }
        } catch (error) {
            return utils.sendDBCallbackErrs(req, res, error, null);
        }

    }

  
    userCtrl.getUsersCount = async function (req, res) {
        logger.info("*********")
        try {
            let data = await Users.aggregate([
                {
                    $group: {
                        _id: '$category',
                        count: { $sum: 1 }
                    }
                }


            ]);
            // console.log("---data", data)
            logger.info("----data", data)
            return utils.sendResponse(req, res, data, "SUCCESS", "SUCCESS");

        } catch (error) {
            console.log("------err", error)
            return utils.sendDBCallbackErrs(req, res, error, null);
        }
    }


    userCtrl.sendOtp = async function (req, res) {
        try {
            if (!req.body.email) {
                return utils.sendCustomError(req, res, "BAD_PARAMS", "PARAMS_MISSING")
            }
            var query = {};
            query.email = req.body.email;
            let user = await Users.getData(query);
            if (!user) {
                return utils.sendCustomError(req, res, "HTTP_ERR", "DATA_NOT_EXISTS");
            } else {
                var updateQuery = {
                    emailVerificationCode: utils.generateOtp(),
                    otpExpiry: utils.generateOtpExpiryTime()
                };
                user = await Users.updateData(query, updateQuery);
                await utils.sendMail(user.name, user.email, user.emailVerificationCode);
                return utils.sendResponse(req, res, user, "SUCCESS", "SUCCESS");
            }

        } catch (error) {
            return utils.sendDBCallbackErrs(req, res, error, null);
        }
    }
    userCtrl.forgotPassword = async function (req, res) {
        try {
            if (!req.body.email) {
                return utils.sendCustomError(req, res, "BAD_PARAMS", "PARAMS_MISSING")
            }
            var query = {};
            query.email = req.body.email;
            let user = await Users.getData(query);
            if (!user) {
                return utils.sendCustomError(req, res, "HTTP_ERR", "DATA_NOT_EXISTS");
            } else {
                var updateQuery = {
                    emailVerificationCode: utils.generateOtp(),
                    otpExpiry: utils.generateOtpExpiryTime(),

                };

                user = await Users.updateData(query, updateQuery);
                await utils.sendMail(user.name, user.email, user.emailVerificationCode);
                return utils.sendResponse(req, res, user, "SUCCESS", "SENT_TO_MAIL");
            }


        } catch (error) {
            return utils.sendDBCallbackErrs(req, res, error, null);
        }
    }


 

    userCtrl.changePassword = async function (req, res) {
        try {
            if (!req.body.email) {
                return utils.sendCustomError(req, res, "BAD_PARAMS", "PARAMS_MISSING")
            }
            var query = {};
            query.email = req.body.email;
            query.emailVerificationCode = req.body.otp;
            let user = await Users.getData(query);
            if (!user) {
                return utils.sendCustomError(req, res, "HTTP_ERR", "DATA_NOT_EXISTS");
            } else {
                if (user.otpExpiry >= new Date()) {
                    if (req.body.newPassword = req.body.reEnterNewPassword) {
                        var updateQuery = {
                            emailVerificationCode: '',
                            otpExpiry: '',
                            password: await utils.encryptPassword(req.body.newPassword)
                        };
                        user = await Users.updateData(query, updateQuery);
                        // if (!user) {
                        //     return utils.sendCustomError(req, res, "HTTP_ERR", "DATA_NOT_EXISTS")
                        // } else {

                        return utils.sendResponse(req, res, user, "SUCCESS", "SUCCESS");
                        // }
                    }
                } else {
                    return utils.sendCustomError(req, res, "HTTP_ERR", "OTP_EXPIRED");
                }
            }

        } catch (error) {
            console.log('change password error', error)
            return utils.sendDBCallbackErrs(req, res, error, null);
        }
    }
    return userCtrl;
}