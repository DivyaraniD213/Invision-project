"use strict";

/**
 * Module dependencies.
 * https://code.tutsplus.com/articles/an-introduction-to-mongoose-for-mongodb-and-nodejs--cms-29527
 */
/*Mongoose is a JavaScript library that allows you to define schemas with strongly typed data. Once a schema is defined, Mongoose lets you create a Model based on a specific schema. A Mongoose Model is then mapped to a MongoDB Document via the Model's schema definition.

Once you have defined your schemas and models, Mongoose contains many different functions that allow you to validate, save, delete, and query your data using common MongoDB functions.*/
module.exports = function (mongoose) {
    var Schema = mongoose.Schema;


    /*
     * User Schema
     */
    var UserSchema = new Schema({
        name: {
            type: String,
            //required: [true, 'Please enter your name'],
            // required: true

        },
        email: {
            type: String,
            //required: [true, 'Please enter your emailID']
            // required: [true, 'Please enter your valid email address!!!'],
            // unique: true
        },
        emailThePassword: {
            type: String
        },
        emailVerificationCode: {
            type: String
        },
        otpExpiry: {
            type: Date
        },
        empCode: {
            type: String
        },
        status: {
            type: String
        },
        questionnaireID: {
            type: String
        },
        acceptedBy: {
            type: Array
        },
        password: {
            type: String,
            select: false,
            // required: true,
            // minlength: [6, 'Minimum password length is 6 characters']
        },
        newPassword: {
            type: String
        },
        reEnterNewPassword: {
            type: String
        },
        auth: { type: String },
        // _id: {
        //     type: String,
        //     select: false
        // },
        type: {
            type: String
        },
        userType: {
            type: String,     //seeker, provider
            enum: ['seeker', 'provider']
        },
        gender: {
            type: String
        },
        location: {
            type: String
        },
        profilePic: {
            type: String
        },
        phone: {
            type: String,
            // validate: {
            //     validator: function (v) {
            //         return /\d{3}-\d{3}-\d{4}/.test(v);
            //     },
            //     message: props => `${props.value} is not a valid phone number!`
            // },
            // required: [true, 'User phone number required'],
            // unique: true
        },
        token: {
            type: String
        },
        tokenExpiry: {
            type: Date
        },
        faceBookId: {
            type: String
        },
        googleId: {
            type: String
        },
        twitterId: {
            type: String
        },







        //Title, description, Button Title, Button Text, Check box text, Start  Date,  End Date, Auto Reminder, 
        // Content PPT file, participant XL sheet, Mail body.
        title: {
            type: String,
            // required: [true, 'Please enter your title']
        },
        description: {
            type: String,

        },
        buttonTitle: {
            type: String
        },

        buttonText: {
            type: String
        },
        checkBoxText: {
            type: String,
        },
        startDate: {
            type: Date
        },
        endDate: {
            type: Date
        },
        autoReminder: {
            type: Number
        },
        contentPptFile: {
            type: String
        },
        participantXLSheet: {
            type: String
        },
        mailBody: {
            type: String
        },
        participants: {
            type: Array
        },
        ID: {
            type: String
        },










        __v: {
            type: Number,
            select: false
        }
    }, { timestamps: true });
    // UserSchema.index({ email: 1, unique: true });
    UserSchema = require('../../utils/db_queries')(UserSchema);

    return mongoose.model('Users', UserSchema);
};
