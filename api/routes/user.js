const express = require("express");
const passport = require("passport");
module.exports = function (app, mongoose, utils, config, constants, logger, upload) {
    app.use(passport.initialize());
    var userCtrl = require("../controllers/user")(mongoose, utils, config, constants, logger);
    var authenticateToken = require("../auth/bearer").isAuthenticated;


    var userRouter = express.Router();
   
   
    
    
    userRouter.get("/listAdmin",authenticateToken, userCtrl.listAdmin);
    userRouter.get("/listSuperAdmin", authenticateToken,userCtrl.listSuperAdmin);
    userRouter.get("/getCount", userCtrl.getUsersCount);

    
  

    userRouter.post("/publish/:userId",authenticateToken, userCtrl.publish);
    
    userRouter.post("/login", userCtrl.loginUser);
    userRouter.post("/addAdmin",authenticateToken, userCtrl.addAdmin);
    userRouter.post("/addSuperAdmin",authenticateToken, userCtrl.addSuperAdmin);

    
    userRouter.post("/iAccept",authenticateToken, userCtrl.iAccept);

    

    userRouter.get("/preview/:userId", userCtrl.preview);

    
  
    userRouter.post("/remind/:userId", userCtrl.remind);

    userRouter.post("/saveQuestionnaires",authenticateToken, upload.any(), userCtrl.saveQuestionnaires);
    
    
    
    userRouter.delete("/deleteSuperAdmin/:userId",authenticateToken, userCtrl.deleteSuperAdmin);
    userRouter.delete("/deleteAdmin/:userId",authenticateToken, userCtrl.deleteAdmin);


   
    userRouter.post("/forgotPassword", userCtrl.forgotPassword);
    
    userRouter.post("/changePassword", userCtrl.changePassword);

    userRouter.post("/sendOtp", userCtrl.sendOtp);


    app.use("/api/v1/users", userRouter);
};
