window.Env = {
  api: {"headers": [['Accept-Language', 'de-ch']]},
  services: {

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
            "href": "/demo/api/v1/tasks/list.json"
          },
          "options": {
            "filter": {
              "enabled": true,
              "fields": [
                "taskNummer",
                "zustand"
              ]
            },
            "sort": {
              "enabled": true,
              "fields": [
                "taskNummer",
                "zustand"
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
            "href": "/demo/api/v1/tasks/{vtr}.json"
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
            "href": "/demo/api/v1/tasks/{vtr}.json"
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

  },
  specs: {
    "vnd.acme.zeitunddatum": {
      "name": "vnd.acme.zeitunddatum",
      "type": "vnd.acme.zeitunddatum",
      "description": "Task komposit",
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
        }
      }
    },
    "vnd.com.acme.task": {
      "name": "Task",
      "type": "vnd.com.acme.task",
      "mime": "application/vnd.com.acme.task+json",
      "description": "Task komposit",

      "fields": {
        "taskId": {
          "description": "ulid des Taskes",
          "type": "int",
          "meta": {
            "label": "Tasks ID",
            "default": 4,
            "hint": ""
          },
          "constraints": {
            "min": {"value": 3, "message": "max 129"},
            "max": {"value": 129},
            "mandatory": {"value": false},
            "readonly": {"value": false}
          }
        },

        "title": {
          "description": "Nummer des Taskes",
          "type": "string",
          "meta": {
            "label": "TITEL",
            "default": "Tit",
            "hint": "dsfdfs"
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
            "hint": ""
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
            "initialValue":["aaaa","bbbbb","ccc"]
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
  }
}
;
window.OTHERENV = window.Env;
