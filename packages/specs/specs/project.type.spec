{
  "name": "project",
  "type": "Project",
  "description": "Project description",
  "__proto": {
    "package": "project",
    "imports": [
      "google/money.proto",
      "google/date.proto",
      "person/person.proto"
    ]
  },
  "fields": {
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
      "options": [],
      "__proto": {
        "number": 1
      }
    },
    "start": {
      "description": "Start date of the project",
      "type": "google.Date",
      "meta": {
        "label": "Project start",
        "default": "",
        "hint": ""
      },
      "constraints": {},
      "options": [],
      "__proto": {
        "number": 2
      }
    },
    "end": {
      "description": "Prospective end date of the project",
      "type": "google.Date",
      "meta": {
        "label": "Project end",
        "default": "",
        "hint": ""
      },
      "constraints": {},
      "options": [],
      "__proto": {
        "number": 3
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
      "options": [],
      "__proto": {
        "number": 4
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
      "options": [],
      "__proto": {
        "number": 5
      }
    },
    "cost_limit": {
      "description": "Project cost limit",
      "type": "google.Money",
      "meta": {
        "label": "Cost limit",
        "default": "",
        "hint": "",
        "required": true
      },
      "constraints": {
        "max": 25000
      },
      "options": [],
      "__proto": {
        "number": 6
      }
    }
  }
}
