export const Services = {
  "tasks": {
    "general": {
      "name": "tasks",
      "description": "Task Services",
      "version": "1.0.0",
      "lifecycle": {
        "deprecated": false,
        "info": "This version is still valid"
      }
    },
    "services": {
      "Create": {
        "description": "creates a new contract composite",
        "data": {
          "request": "vnd.com.acme.task",
          "response": "vnd.com.acme.task"
        },
        "query": [],
        "deeplink": {
          "rel": "create",
          "method": "POST",
          "href": "/api/v1/tasks"
        },
        "caching": {
          "no-cache": false,
          "private": true,
          "max-age": 10,
          "Expires": 10,
          "ETag": true
        }
      },
      "List": {
        "description": "The List method takes a collection name and zero or more parameters as input, and returns a list of resources (response type definition) that match the input.",
        "data": {
          "request": null,
          "response": "vnd.com.acme.task"
        },
        "query": {
          "parameters": {
            "opt": {
              "description": "Option des Taskes",
              "value": "",
              "type": "string"
            }
          }
        },
        "deeplink": {
          "rel": "list",
          "method": "GET",
          "href": "./api/v1/tasks/list.json"
        },
        "options": {
          "filter": {
            "enabled": true,
            "fields": [
              "taskId",
              "title"
            ]
          },
          "sort": {
            "enabled": true,
            "fields": [
              "taskId",
              "title"
            ]
          },
          "pagination": {
            "enabled": true,
            "default": 19,
            "max": 42
          }
        },
        "caching": {
          "no-cache": false,
          "private": true,
          "max-age": 10,
          "Expires": 10,
          "ETag": true
        }
      },
      "Update": {
        "description": "The Update method takes a Body.",
        "data": {
          "request": "vnd.com.acme.task",
          "response": "vnd.com.acme.task"
        },
        "query": [],
        "deeplink": {
          "rel": "update",
          "method": "PATCH",
          "href": "./api/v1/tasks/{vtr}.json"
        },
        "caching": {
          "no-cache": false,
          "private": true,
          "max-age": 10,
          "Expires": 10,
          "ETag": true
        }
      },
      "Get": {
        "description": "The Get method takes a resource name, zero or more parameters, and returns the specified resource (response type definition).",
        "data": {
          "request": null,
          "response": "vnd.com.acme.task"
        },
        "query": [],
        "deeplink": {
          "rel": "self",
          "method": "GET",
          "href": "./api/v1/tasks/{vtr}.json"
        },
        "caching": {
          "no-cache": false,
          "private": true,
          "max-age": 10,
          "Expires": 10,
          "ETag": true
        }
      },
      "Release": {
        "description": "Releases the pending contract",
        "data": {
          "request": null,
          "response": "vnd.com.acme.task"
        },
        "query": [],
        "deeplink": {
          "rel": "release",
          "method": "POST",
          "href": "/api/v1/tasks/{vtr}:release"
        },
        "caching": {
          "no-cache": false,
          "private": true,
          "max-age": 10,
          "Expires": 10,
          "ETag": true
        }
      }
    }
  },
  "tasksDeprecated": {
    "general": {
      "name": "tasks",
      "description": "Task Services",
      "version": "1.0.0",
      "lifecycle": {
        "deprecated": true,
        "info": "Please change to service tasks until Q3-2033"
      }
    },
    "services": {
      "Create": {
        "description": "creates a new contract composite",
        "data": {
          "request": "vnd.com.acme.task",
          "response": "vnd.com.acme.task"
        },
        "query": [],
        "deeplink": {
          "rel": "create",
          "method": "POST",
          "href": "/api/v1/tasks"
        },
        "caching": {
          "no-cache": false,
          "private": true,
          "max-age": 10,
          "Expires": 10,
          "ETag": true
        }
      },
      "List": {
        "description": "The List method takes a collection name and zero or more parameters as input, and returns a list of resources (response type definition) that match the input.",
        "data": {
          "request": null,
          "response": "vnd.com.acme.task"
        },
        "query": {
          "parameters": {
            "opt": {
              "description": "Option des Taskes",
              "value": "",
              "type": "string"
            }
          }
        },
        "deeplink": {
          "rel": "list",
          "method": "GET",
          "href": "./api/v1/tasks/list.json"
        },
        "options": {
          "filter": {
            "enabled": true,
            "fields": [
              "taskId",
              "title"
            ]
          },
          "sort": {
            "enabled": true,
            "fields": [
              "taskId",
              "title"
            ]
          },
          "pagination": {
            "enabled": true,
            "default": 19,
            "max": 42
          }
        },
        "caching": {
          "no-cache": false,
          "private": true,
          "max-age": 10,
          "Expires": 10,
          "ETag": true
        }
      },
      "Update": {
        "description": "The Update method takes a Body.",
        "data": {
          "request": "vnd.com.acme.task",
          "response": "vnd.com.acme.task"
        },
        "query": [],
        "deeplink": {
          "rel": "update",
          "method": "PATCH",
          "href": "./api/v1/tasks/{vtr}.json"
        },
        "caching": {
          "no-cache": false,
          "private": true,
          "max-age": 10,
          "Expires": 10,
          "ETag": true
        }
      },
      "Get": {
        "description": "The Get method takes a resource name, zero or more parameters, and returns the specified resource (response type definition).",
        "data": {
          "request": null,
          "response": "vnd.com.acme.task"
        },
        "query": [],
        "deeplink": {
          "rel": "self",
          "method": "GET",
          "href": "./api/v1/tasks/{vtr}.json"
        },
        "caching": {
          "no-cache": false,
          "private": true,
          "max-age": 10,
          "Expires": 10,
          "ETag": true
        }
      },
      "Release": {
        "description": "Releases the pending contract",
        "data": {
          "request": null,
          "response": "vnd.com.acme.task"
        },
        "query": [],
        "deeplink": {
          "rel": "release",
          "method": "POST",
          "href": "/api/v1/tasks/{vtr}:release"
        },
        "caching": {
          "no-cache": false,
          "private": true,
          "max-age": 10,
          "Expires": 10,
          "ETag": true
        }
      }
    }
  }
};

export const Types = {
  "vnd.acme.zeitunddatum": {
    "description": "Task komposit",
    "type": "vnd.acme.zeitunddatum",
    "fields": {
      "date": {
        "description": "Beschreibung",
        "type": "date",
        "meta": {
          "default": "",
          "hint": "",
          "label": "Datum",
        },
        "constraints": {
          "min": {"value": "today", "message": "max 129"},
          "max": {"value": "eom"},
          "mandatory": {"value": false},
          "readonly": {"value": false}
        },
        "options": {},
        "toString": {
          "fields": [
            "taskNummer"
          ],
          "fmt": "%1"
        }
      },
      "repstring": {
        "description": "repstring",
        "type": "string",
        "meta": {
          "repeated": true,
          "default": "repeat in repeat"
        }

      },
      "time": {
        "description": "Beschreibung",
        "type": "time",
        "meta": {
          "label": "Zeit",
          "default": "",
          "hint": ""
        },
        "constraints": {
          "mandatory": {"value": false},
          "readonly": {"value": false}
        },
        "options": {},
        "toString": {
          "fields": [
            "taskNummer"
          ],
          "fmt": "%1"
        }
      },
      "anytype":{
        "description":"kann alles sein, kommt als JSON",
        "type":"any",
        "meta":{
          "default":{


                "@type": "vnd.com.acme.reference",
                "display_name": "Any default ref",
                "id":3223

          }
        }
      },
      "keyvaluetype":{
        "description":"key value map",
        "type":"map<string, string>",
        "meta":{
          "default":{
            "error": "invalid username",
            "message": "invalid username"
          }
        }
      }
    }
  },
  "vnd.com.acme.reference": {
    "name": "Reference",
    "type": "vnd.com.acme.reference",
    "description": "reference",
    "fields": {
      "display_name": {
        "description": "String representation of the reference",
        "type": "string",
        "__proto": {
          "number": 1
        }
      },
      "id": {
        "description": "Value of the reference",
        "type": "string",
        "__proto": {
          "number": 2
        }
      },
      "rel": {
        "description": "the relationship",
        "type": "string",
        "__proto": {
          "number": 3
        }
      },
      "method": {
        "description": "method of curl GET, POST, PUT, PATCH, DELETE",
        "type": "string",
        "__proto": {
          "number": 4
        }
      },
      "href": {
        "description": "link",
        "type": "string",
        "__proto": {
          "number": 5
        }
      },
      "type": {
        "description": "mime type",
        "type": "string",
        "__proto": {
          "number": 6
        }
      }
    }
  },

  "vnd.com.acme.task": {
    "name": "Task",
    "type": "vnd.com.acme.task",
    "mime": "application/vnd.com.acme.task+json",
    "description": "Task komposit",

    "fields": {

      "ref": {
        "description": "ref",
        "type": "vnd.com.acme.reference",
        "meta": {
          "label": "REFsrch",
          "default": {"display_name":"Hampel","id":"0003","href":"./api/v1/tasks/list.json","rel":"list","method":"get", "type":"vnd.com.acme.task"},
          "hint": ""
        }
      },
      "id": {
        "description": "ulid des Taskes",
        "type": "int",
        "meta": {
          "label": "Task ID",
          "default": 443343,
          "hint": ""
        },
        "constraints": {
          "min": {"value": 3, "message": "max 129"},
          "max": {"value": 129},
          "mandatory": {"value": false},
          "readonly": {"value": false}
        }
      },

      "display_name": {
        "description": "Nummer des Taskes",
        "type": "string",
        "meta": {
          "label": "TITEL",
          "default": "Tit",
          "hint": "dsfdfs",
          "readonly": true
        },
        "constraints": {
          "min": {"value": 3, "message": "Drei Zeichen sind zwingend"},
          "max": {"value": 9, "message": "Neun Zeichen sind genug"},
          "mandatory": {"value": false},
          "readonly": {"value": false}
        },
        "options": {},
        "toString": {
          "fields": [
            "taskNummer"
          ],
          "fmt": "%1"
        }
      },
      "description": {
        "description": "Beschreibung",
        "type": "string",
        "meta": {
          "label": "Beschreibung",
          "default": "",
          "hint": "short text"
        },
        "constraints": {
          "min": {"value": 3, "message": "max 129"},
          "max": {"value": 129},
          "mandatory": {"value": false},
          "readonly": {"value": false}
        },
        "options": {},
        "toString": {
          "fields": [
            "taskNummer"
          ],
          "fmt": "%1"
        }
      },
      "descrWithDefault": {
        "description": "To test default values",
        "type": "string",
        "meta": {
          "label": "Beschreibung",
          "default": "YES",
          "hint": "short text"
        },
        "constraints": {
          "min": {"value": 3, "message": "max 129"},
          "max": {"value": 129},
          "mandatory": {"value": false},
          "readonly": {"value": false}
        },
        "options": {},
        "toString": {
          "fields": [
            "taskNummer"
          ],
          "fmt": "%1"
        }
      },
      "repdate": {
        "type": "vnd.acme.zeitunddatum",
        "meta": {
          "repeated": true,
          "default": {"date": "2019-12-12", "time": "11:44"}
        }

      },
      "repstring": {
        "type": "string",
        "meta": {
          "repeated": true,
          "initialValue": ["aaaa", "bbbbb", "ccc"]
        },
        "constraints": {
          "min": {
            "value": 3, "message": "Kleinster wert ist 3"
          },
          "max":
              {"value": 9}
        }

      },

      "zeitunddatum": {
        "type": "vnd.acme.zeitunddatum"

      },

      "produktId": {
        "name": "produktId",
        "description": "ProduktId des Taskes",
        "type": "int",
        "meta": {
          "label": "Produktid",
          "default": "",
          "hint": "Wert zwischen 3 und 9"
        }
        ,
        "constraints": {
          "min": {
            "value": 3, "message": "Kleinster wert ist 3"
          },
          "max":
              {"value": 9}
          ,
          "mandatory":
              {"value": false}
          ,
          "readonly":
              {
                "value": false
              }
        }
        ,
        "options":
            [],
        "toString":
            {
              "fields":
                  [
                    "produktId"
                  ],
              "fmt":
                  "%1"
            }
      }
    }
  }
};
