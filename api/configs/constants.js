"use strict";

module.exports = {
    code: {
        HTTP_ERR: 400, //  bad request to the server
        CONFLICT: 409,  //if data already exists
        SUCCESS: 200, //get result success
        INVALID: 400, //invalid data
        HTTP_POST_S: 201, //post request succcess
        DB_ERR: 500, //Error in database
        NOT_FOUND: 404, //if data is not present
        NOT_AUTHERIZED: 401, //user is not authorised to access the api
        FORBIDDEN: 403, //forbidden
        NO_RECORDS: 404, //no records found
        BAD_REQUEST: 400, //bad request 
        BAD_PARAMS: 400, //invalid  params
        PARAM_MISSING: 400, // required params are missing

    },
    text: {
        "SUCCESS": "Success",
        "HTTP_SUCCESS": "Success",
        "DB_FAILURE": "Database Failure",
        "DB_ERR": "Error in  Database",
        "DB_DUPLICATE": "Duplicate data is entered",
        "NO_RECORDS": "No Records Found",
        "BAD_PARAMS": "Invalid params",
        "BAD_REQUEST": "Bad request to server.",
        "PARAM_MISSING": "Required Parameter missing",
        "NO_PARAMS": "Parameter Missing !",
        "NOT_AUTHERIZED": "Not Authorized",
        "TOKEN_EXPIRED": "Token Expired!",
        "INV_CRED": "Invalid Credentials.",
        "BRAND_NOT_EXISTS": "Brand does not exist!!",
        "BRAND_EXISTS": "Brand name already exists!!!",
        "CATEGORY_EXISTS": "Category name already exists!",
        "CATEGORY_NOT_EXISTS": "Category does not exist!",
        "PRODUCT_EXISTS": "Product name already exists!",
        "PRODUCT_NOT_EXISTS": "Product does not exist!",
        "USER_EXISTS": "User already exists",
        "USER_NOT_EXISTS": "User does not exist",
        "DATA_EXISTS": "Data exists",
        "DATA_NOT_EXISTS": "Data does not exist",
        "PARAMS_MISSING": "Required parameter is missing!",
        "OTP_EXPIRED": "Otp expired",
        "JOB_NOT_EXISTS": "Invalid job id",
        "APPLICATION_NOT_EXISTS": "Application does not exist",
        "INVALID_STATUS": "Invalid status",
        "SENT_TO_MAIL" : "Otp has been sent to your mail",
        "POLICY_NOT_EXISTS" : "Policy doest not exists"


    }
};

