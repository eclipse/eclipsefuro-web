{
  "name": "project",
  "type": "Project",
  "description": "Project description",
  "__proto": {
    "package": "project",
    "imports": [
      "google/type/money.proto",
      "google/type/date.proto",
      "person/person.proto"
    ],
    "targetfile": "project.proto"
  },
  "fields": {
    "id": {
      "description": "Identity of a project",
      "type": "string",
      "meta": {
        "label": "Id",
        "default": "",
        "hint": "",
        "readonly": true
      },
      "constraints": {},
      "__proto": {
        "number": 1
      }
    },
    "display_name": {
      "description": "Localized String representation of a project",
      "type": "string",
      "meta": {
        "label": "Project",
        "default": "",
        "hint": "",
        "readonly": true
      },
      "constraints": {},
      "__proto": {
        "number": 2
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
        "number": 3
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
        "number": 4
      }
    },
    "description": {
      "description": "Short project description",
      "type": "string",
      "meta": {
        "label": "Description",
        "default": "",
        "hint": ""
      },
      "constraints": {},
      "__proto": {
        "number": 5
      }
    },
    "members": {
      "description": "List of project members",
      "type": "person.Person",
      "meta": {
        "label": "Project members",
        "default": "",
        "hint": "",
        "repeated": true
      },
      "constraints": {},
      "__proto": {
        "number": 6
      }
    },
    "cost_limit": {
      "description": "Project cost limit",
      "type": "google.type.Money",
      "meta": {
        "label": "Cost limit",
        "default": "",
        "hint": ""
      },
      "constraints": {

        "required": {
          "is": "true",
          "message":"is required"
        },
        "max": {
          "is": 25000,
          "message":"max 25000"
        }
      },
      "__proto": {
        "number": 7
      }
    }
  }
}
