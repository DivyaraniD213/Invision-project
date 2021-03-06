"use strict";
//Lodash has several built-in utility functions that make coding in JavaScript easier and cleaner.
var _ = require("lodash");

var config = {
     
    local: {
        mongo: {
            dbURL: process.env.MONGO_URL,
            options: {
            },
        },
        root: require("path").normalize(__dirname + "/.."), 
        host: process.env.HOST || "http://localhost",
        port: process.env.PORT || 3000,
        imageUrl: 'localhost:4000/images/',
        passwordSecret: process.env.PASSWORD_SECRET,
        jwtTokenSecret: process.env.JWT_SECRET,
        tokenExpiry: 60,
        otpExpiry: 10,
        email: {

            'user': 'divyaranid213@yahoo.com',
            'pass': 'qcejlthxsxuntdzy'


        },
        facebook: {
            appId: '376504556736668',
            appSecret: 'dcdea76b856258f6f5455f2af141e8af'
        },
        google: {
            clientId: "321295520785-4qg71efq6g9p8nnrt1pnfg5ki9sa5gav.apps.googleusercontent.com",
            clientSecret: "eEpQO0wuIT7YnDDadwR6L_jC"
        },
        twitter: {
            consumerKey: 'x5cODy7gon51zcNHPSK17aKcq',
            consumerSecret: 'vB65cMTIRwK7nYkialTbvDIPFJ6Fg5wIWEDkzAEeUUBuxHtNLp'
        }


    },

    development: {
        mongo: {
            dbURL: "mongodb://10.10.41.7:27017/JobPortal",
            options: {
            },
        },
        root: require("path").normalize(__dirname + "/.."),
        host: process.env.HOST || "http://localhost",
        port: process.env.PORT || 3000,
        imageUrl: 'localhost:4000/images/',
        passwordSecret: process.env.PASSWORD_SECRET,
        jwtTokenSecret: process.env.JWT_SECRET,
        tokenExpiry: 60,
        otpExpiry: 5,
        email: {
            'user': 'likhitha2904@yahoo.com',
            'pass': 'slamsizkrlmkrlsx'
        },
        facebook: {
            appId: '376504556736668',
            appSecret: 'dcdea76b856258f6f5455f2af141e8af'
        },
        google: {
            clientId: "321295520785-4qg71efq6g9p8nnrt1pnfg5ki9sa5gav.apps.googleusercontent.com",
            clientSecret: "eEpQO0wuIT7YnDDadwR6L_jC"
        },
        twitter: {
            consumerKey: 'Fo5Dzvx9LLqxQo7eDEnUnvEM5',
            consumerSecret: 'xVpcv8A8r9O3o1cPf5poPN0OX99YWmlPNg3NkXfdzUVihnKbpG'
        }


    },

    staging: {
        mongo: {
            dbURL: "mongodb://localhost:27017/JobPortal",
            options: {
            },
        },
        root: require("path").normalize(__dirname + "/.."),
        host: process.env.HOST || "http://localhost",
        port: process.env.PORT || 3000,
        imageUrl: 'localhost:4000/images/',
        passwordSecret: process.env.PASSWORD_SECRET,
        jwtTokenSecret: process.env.JWT_SECRET,
        tokenExpiry: 60,
        otpExpiry: 5,
        email: {
            'user': 'likhitha2904@yahoo.com',
            'pass': 'slamsizkrlmkrlsx'
        },
        facebook: {
            appId: '680442852909593',
            appSecret: '67d746ffa1db32ff32e47cade07a6d9b'
        },
        google: {
            clientId: "321295520785-4qg71efq6g9p8nnrt1pnfg5ki9sa5gav.apps.googleusercontent.com",
            clientSecret: "eEpQO0wuIT7YnDDadwR6L_jC"
        },
        twitter: {
            consumerKey: 'Fo5Dzvx9LLqxQo7eDEnUnvEM5',
            consumerSecret: 'xVpcv8A8r9O3o1cPf5poPN0OX99YWmlPNg3NkXfdzUVihnKbpG'
        }



    },
    uat: {
        mongo: {
            dbURL: "mongodb://localhost:27017/JobPortal",
            options: {
            },
        },
        root: require("path").normalize(__dirname + "/.."),
        host: process.env.HOST || "http://localhost",
        port: process.env.PORT || 3000,
        imageUrl: 'localhost:4000/images/',
        passwordSecret: process.env.PASSWORD_SECRET,
        jwtTokenSecret: process.env.JWT_SECRET,
        tokenExpiry: 60,
        otpExpiry: 5,
        email: {
            'user': 'likhitha2904@yahoo.com',
            'pass': 'slamsizkrlmkrlsx'
        },
        facebook: {
            appId: '680442852909593',
            appSecret: '67d746ffa1db32ff32e47cade07a6d9b'
        },
        google: {
            clientId: "321295520785-4qg71efq6g9p8nnrt1pnfg5ki9sa5gav.apps.googleusercontent.com",
            clientSecret: "eEpQO0wuIT7YnDDadwR6L_jC"
        },
        twitter: {
            consumerKey: 'Fo5Dzvx9LLqxQo7eDEnUnvEM5',
            consumerSecret: 'xVpcv8A8r9O3o1cPf5poPN0OX99YWmlPNg3NkXfdzUVihnKbpG'
        }



    },
    production: {
        mongo: {
            dbURL: process.env.MONGO_URL,
            options: {
                db: {
                    native_parser: true  //native_parser {Boolean, default:false}, use c++ bson parser.
                },
                user: process.env.MONGODBAuthUser, //get username from .env
                pass: process.env.MONGODBAuthPass, //get password from .env
                auth: {   //authenticate db
                    authdb: "admin"
                }
            },
        },
        root: require("path").normalize(__dirname + "/.."),
        host: process.env.HOST || "http://localhost",
        port: process.env.PORT || 3000,
        imageUrl: 'localhost:4000/images/',
        passwordSecret: process.env.PASSWORD_SECRET,
        jwtTokenSecret: process.env.JWT_SECRET,
        tokenExpiry: 60,
        otpExpiry: 5,
        email: {
            'user': 'likhitha2904@yahoo.com',
            'pass': 'slamsizkrlmkrlsx'


        },
        facebook: {
            appId: '680442852909593',
            appSecret: '67d746ffa1db32ff32e47cade07a6d9b'
        },
        google: {
            clientId: "321295520785-4qg71efq6g9p8nnrt1pnfg5ki9sa5gav.apps.googleusercontent.com",
            clientSecret: "eEpQO0wuIT7YnDDadwR6L_jC"
        },
        twitter: {
            consumerKey: 'Fo5Dzvx9LLqxQo7eDEnUnvEM5',
            consumerSecret: 'xVpcv8A8r9O3o1cPf5poPN0OX99YWmlPNg3NkXfdzUVihnKbpG'
        }

    }
};

module.exports = (function () {
    var env = process.env.NODE_ENV || "development";

    return _.merge(config[env]);
})();
