define({ "api": [
  {
    "type": "post",
    "url": "/applications",
    "title": "Create application",
    "name": "CreateApplication",
    "group": "Application",
    "description": "<p>API to create an application</p>",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "job",
            "description": "<p>Jobs unique ID.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Request-Example:",
          "content": "{\n   \"job\":\"5f9f98e77feb783cd183e344\"\n}",
          "type": "json"
        }
      ]
    },
    "examples": [
      {
        "title": "Example usage:",
        "content": "curl -i http://localhost:4000/api/v1/applications",
        "type": "curl"
      }
    ],
    "sampleRequest": [
      {
        "url": "http://localhost:4000/api/v1/applications"
      }
    ],
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": "  HTTP/1.1 200 OK\n  {\n    \"meta\": {\n    \"code\": 200,\n    \"message\": \"Success\",\n    \"timestamp\": \"2020-11-12T04:47:52.234Z\"\n   },\n  \"pagination\": {},\n  \"data\": {\n    \"status\": \"applied\",\n    \"_id\": \"5facbe780e43085622fe5c82\",\n    \"job\": \"5f9f948ed6253b396f0dd4f8\",\n    \"seeker\": \"5fabc627ab5fd76debd8b47e\",\n    \"createdAt\": \"2020-11-12T04:47:52.199Z\",\n    \"updatedAt\": \"2020-11-12T04:47:52.199Z\",\n    \"__v\": 0\n  }\n}",
          "type": "json"
        }
      ]
    },
    "error": {
      "examples": [
        {
          "title": "Error-Response:",
          "content": "HTTP/1.1 400 Bad Request\n{\n  \"meta\": {\n  \"code\": 400,\n  \"message\": \"Invalid job id\",\n  \"timestamp\": \"2020-11-12T04:49:00.959Z\"\n }\n}",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "routes/application.js",
    "groupTitle": "Application",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "Authorization",
            "description": "<p>Bearer token obtained through login</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Header-Example:",
          "content": "{\n  \"Authorization\": \"Bearer e244d797-c6fc-4681-a82d-abbc3faa99ab\"\n}",
          "type": "json"
        }
      ]
    }
  },
  {
    "type": "delete",
    "url": "/applications/:applicationId",
    "title": "Delete application",
    "name": "DeleteApplication",
    "group": "Application",
    "examples": [
      {
        "title": "Example usage:",
        "content": "curl -i http://localhost:4000/api/v1/applications/5fa3db1cb7b879440a547246",
        "type": "curl"
      }
    ],
    "sampleRequest": [
      {
        "url": "http://localhost:4000/api/v1/applications/5fa3db1cb7b879440a547246"
      }
    ],
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": "    HTTP/1.1 200 OK\n   {\n    \"meta\": {\n        \"code\": 200,\n        \"message\": \"Success\",\n        \"timestamp\": \"2020-11-12T10:07:39.643Z\"\n    },\n    \"pagination\": {},\n    \"data\": {\n        \"status\": \"applied\",\n        \"_id\": \"5fa3db1cb7b879440a547246\",\n        \"job\": \"5f9f98e77feb783cd183e344\",\n        \"seeker\": \"5f9f90fcc6078f3755051797\",\n        \"createdAt\": \"2020-11-05T10:59:40.031Z\",\n        \"updatedAt\": \"2020-11-05T10:59:40.031Z\"\n    }\n}",
          "type": "json"
        }
      ]
    },
    "error": {
      "examples": [
        {
          "title": "Error-Response:",
          "content": " HTTP/1.1 400 Bad Request\n{\n     \"meta\": {\n     \"code\": 400,\n     \"message\": \"Data does not exist\",\n     \"timestamp\": \"2020-11-12T10:07:56.784Z\"\n    }\n   }",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "routes/application.js",
    "groupTitle": "Application",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "Authorization",
            "description": "<p>Bearer token obtained through login</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Header-Example:",
          "content": "{\n  \"Authorization\": \"Bearer e244d797-c6fc-4681-a82d-abbc3faa99ab\"\n}",
          "type": "json"
        }
      ]
    }
  },
  {
    "type": "get",
    "url": "/applications",
    "title": "List applications",
    "name": "ListApplications",
    "group": "Application",
    "examples": [
      {
        "title": "Example usage:",
        "content": "curl -i http://localhost:4000/api/v1/applications",
        "type": "curl"
      }
    ],
    "sampleRequest": [
      {
        "url": "http://localhost:4000/api/v1/applications"
      }
    ],
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": "    HTTP/1.1 200 OK\n    {\n    \"meta\": {\n        \"code\": 200,\n        \"message\": \"Success\",\n        \"timestamp\": \"2020-11-12T10:05:17.506Z\"\n    },\n    \"pagination\": {\n        \"totalCount\": 3\n    },\n    \"data\": [\n        {\n            \"_id\": \"5fa3db1cb7b879440a547246\",\n            \"job\": {\n                \"_id\": \"5f9f98e77feb783cd183e344\",\n                \"title\": \"test engineer2\"\n            },\n            \"seeker\": null\n        },\n        {\n            \"_id\": \"5facbe780e43085622fe5c82\",\n            \"job\": {\n                \"_id\": \"5f9f948ed6253b396f0dd4f8\",\n                \"title\": \"software engineer\"\n            },\n            \"seeker\": {\n                \"_id\": \"5fabc627ab5fd76debd8b47e\",\n                \"name\": \"Likhitha.M.\"\n            }\n        },\n        {\n            \"_id\": \"5fad07df75e985065502d8b4\",\n            \"job\": {\n                \"_id\": \"5f9f98505935283c789ef46a\",\n                \"title\": \"test engineer\"\n            },\n            \"seeker\": {\n                \"_id\": \"5fabc627ab5fd76debd8b47e\",\n                \"name\": \"Likhitha.M.\"\n            }\n        }\n    ]\n}",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "routes/application.js",
    "groupTitle": "Application",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "Authorization",
            "description": "<p>Bearer token obtained through login</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Header-Example:",
          "content": "{\n  \"Authorization\": \"Bearer e244d797-c6fc-4681-a82d-abbc3faa99ab\"\n}",
          "type": "json"
        }
      ]
    }
  },
  {
    "type": "put",
    "url": "/applications/:applicationId",
    "title": "Update application",
    "name": "UpdateApplication",
    "group": "Application",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "job",
            "description": "<p>Jobs unique ID.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "status",
            "description": "<p>status of the application.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Request-Example:",
          "content": "{\n   \"job\":\"5f9f98e77feb783cd183e344\"\n}",
          "type": "json"
        },
        {
          "title": "Request-Example:",
          "content": "{\n       \"job\":\"5f9f948ed6253b396f0ddf8\",\n       \"status\":\"shortlisted\"\n    }",
          "type": "json"
        }
      ]
    },
    "examples": [
      {
        "title": "Example usage:",
        "content": "curl -i http://localhost:4000/api/v1/applications/5facbe780e43085622fe5c8",
        "type": "curl"
      }
    ],
    "sampleRequest": [
      {
        "url": "http://localhost:4000/api/v1/applications/5facbe780e43085622fe5c8"
      }
    ],
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 200 OK\n{\n      \"meta\": {\n     \"code\": 200,\n     \"message\": \"Success\",\n     \"timestamp\": \"2020-11-12T09:42:19.434Z\"\n    },\n    \"pagination\": {},\n    \"data\": {\n      \"status\": \"shortlisted\",\n      \"_id\": \"5facbe780e43085622fe5c82\",\n      \"job\": \"5f9f948ed6253b396f0dd4f8\",\n      \"seeker\": \"5fabc627ab5fd76debd8b47e\",\n      \"createdAt\": \"2020-11-12T04:47:52.199Z\",\n      \"updatedAt\": \"2020-11-12T09:42:19.432Z\"\n    }\n }",
          "type": "json"
        }
      ]
    },
    "error": {
      "examples": [
        {
          "title": "Error-Response:",
          "content": "   HTTP/1.1 400 Bad Request\n   {\n         \"meta\": {\n         \"code\": 400,\n         \"message\": \"Data does not exist\",\n         \"timestamp\": \"2020-11-12T09:43:08.478Z\"\n    }\n}",
          "type": "json"
        },
        {
          "title": "Error-Response:",
          "content": "   HTTP/1.1 400 Bad Request\n  {\n        \"meta\": {\n        \"code\": 400,\n        \"message\": \"Application does not exist\",\n        \"timestamp\": \"2020-11-12T09:47:19.345Z\"\n    }\n}\n}",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "routes/application.js",
    "groupTitle": "Application",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "Authorization",
            "description": "<p>Bearer token obtained through login</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Header-Example:",
          "content": "{\n  \"Authorization\": \"Bearer e244d797-c6fc-4681-a82d-abbc3faa99ab\"\n}",
          "type": "json"
        }
      ]
    }
  },
  {
    "type": "post",
    "url": "/jobs",
    "title": "Create job",
    "name": "CreateJob",
    "group": "Job",
    "examples": [
      {
        "title": "Example usage:",
        "content": "curl -i http://localhost:4000/api/v1/jobs",
        "type": "curl"
      }
    ],
    "sampleRequest": [
      {
        "url": "http://localhost:4000/api/v1/jobs"
      }
    ],
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": "    HTTP/1.1 200 OK\n   {\n    \"meta\": {\n        \"code\": 200,\n        \"message\": \"Success\",\n        \"timestamp\": \"2020-11-09T05:15:43.707Z\"\n    },\n    \"pagination\": {},\n    \"data\": {\n        \"applicantsCount\": 0,\n        \"_id\": \"5fa8d07f51ee5034e810485f\",\n        \"title\": \"testing\",\n        \"description\": \"test description\",\n        \"provider\": \"5fa8d010b68162341188edfd\",\n        \"createdAt\": \"2020-11-09T05:15:43.680Z\",\n        \"updatedAt\": \"2020-11-09T05:15:43.680Z\",\n        \"__v\": 0\n    }\n}",
          "type": "json"
        }
      ]
    },
    "error": {
      "examples": [
        {
          "title": "Error-Response:",
          "content": "  HTTP/1.1 400 Bad Request\n{\n      \"meta\": {\n      \"code\": 409,\n      \"message\": \"Data exists\",\n      \"timestamp\": \"2020-11-09T05:15:52.979Z\"\n    }\n }",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "routes/job.js",
    "groupTitle": "Job",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "Authorization",
            "description": "<p>Bearer token obtained through login</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Header-Example:",
          "content": "{\n  \"Authorization\": \"Bearer e244d797-c6fc-4681-a82d-abbc3faa99ab\"\n}",
          "type": "json"
        }
      ]
    }
  },
  {
    "type": "post",
    "url": "/users/facebookLogin",
    "title": "Facebook login",
    "name": "FacebookLogin",
    "group": "User",
    "description": "<p>API for facebook login</p>",
    "examples": [
      {
        "title": "Example usage:",
        "content": "curl -i http://localhost:4000/api/v1/users/facebookLogin",
        "type": "curl"
      }
    ],
    "sampleRequest": [
      {
        "url": "http://localhost:4000/api/v1/users/facebookLogin"
      }
    ],
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": "    HTTP/1.1 200 OK\n    {\n    \"meta\": {\n        \"code\": 200,\n        \"message\": \"Success\",\n        \"timestamp\": \"2020-11-12T09:41:45.917Z\"\n    },\n    \"pagination\": {},\n    \"data\": {\n        \"_id\": \"5fabc1c8922eb26aa4e5fe07\",\n        \"name\": \"Likhitha M\",\n        \"gender\": \"\",\n        \"profilePic\": \"https://graph.facebook.com/v2.6/1325342204467400/picture?type=large\",\n        \"faceBookId\": \"1325342204467400\",\n        \"createdAt\": \"2020-11-11T10:49:44.315Z\",\n        \"updatedAt\": \"2020-11-12T09:41:45.914Z\",\n        \"location\": \"mangalore\",\n        \"phone\": \"9686324141\",\n        \"token\": \"e244d797-c6fc-4681-a82d-abbc3faa99ab\",\n        \"tokenExpiry\": \"2020-11-12T10:41:45.913Z\",\n        \"userType\": \"provider\"\n    }\n}",
          "type": "json"
        }
      ]
    },
    "error": {
      "examples": [
        {
          "title": "Error-Response:",
          "content": "HTTP/1.1 400 Bad Request\nUnauthorized",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "routes/user.js",
    "groupTitle": "User",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "access_token",
            "description": "<p>Access token for facebook login</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Header-Example:",
          "content": "{\n  \"access_token\": \"EAAFWbcxcUJwBAPS4afL5rsfGfA9df3apigbul6hlff5g3ByG4bYcY0BZB6NsyLEe7oeQsDgBxyvNtgegGZAccWwHbCrNNaKZBVSvZAA6pHWJifQyNpGxJyZCVZBJf0fNcIIWKdpcBaRcTbE6dH8qC1k0WZCtOLjjheRqZBBLw4pmRgZDZD\"\n}",
          "type": "json"
        }
      ]
    }
  }
] });
