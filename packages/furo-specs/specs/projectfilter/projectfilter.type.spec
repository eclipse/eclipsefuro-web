{
  "name": "projectfilter",
  "type": "Projectfilter",
  "description": "Options for possible filter values",
  "__proto": {
    "package": "projectfilter",
    "options": {},
    "imports": [
      "google/type/date.proto",
      "google/type/money.proto",
      "furo/reference.proto"
    ],
    "targetfile": "projectfilter.proto"
  },
  "fields": {
    "description": {
      "description": "Filter preset for field description from resource projects",
      "type": "string",
      "meta": {
        "label": "Description",
        "default": "",
        "hint": ""
      },
      "constraints": {},
      "__proto": {
        "number": 1
      }
    },
    "start": {
      "description": "Start date of the project",
      "type": "google.type.Date",
      "meta": {
        "label": "Project start",
        "default": "",
        "hint": ""
      },
      "constraints": {},
      "__proto": {
        "number": 2
      }
    },
    "end": {
      "description": "Prospective end date of the project",
      "type": "google.type.Date",
      "meta": {
        "label": "Project end",
        "default": "",
        "hint": ""
      },
      "constraints": {},
      "__proto": {
        "number": 3
      }
    },
    "members": {
      "description": "List of possible project members",
      "type": "furo.Reference",
      "meta": {
        "label": "Choose person",
        "default": {
          "link": {
            "rel": "list",
            "href": "/mockdata/persons/list.json",
            "method": "Get",
            "type": "person.Person",
            "service": "PersonService"
          }
        }
      },
      "constraints": {},
      "__proto": {
        "number": 4
      }
    },
    "cost_limit": {
      "description": "Project cost limit",
      "type": "google.type.Money",
      "meta": {
        "label": "Cost limit",
        "hint":"google.type.Money",
        "options": {
          "list": [
            "CAD",
            "CNY",
            "CHF",
            "EUR"
          ]
        }
      },
      "constraints": {},
      "__proto": {
        "number": 5
      }
    }
  }
}
