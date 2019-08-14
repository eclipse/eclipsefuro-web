{
  "name": "Project",
  "type": "project",
  "description": "Project description",
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
      "type": "google.type.date",
      "meta": {
        "label": "Project start",
        "default": "",
        "hint": ""
      },
      "constraints": {},
      "options": [],
      "__proto": {
        "number": 2,
        "type": "google.type.date"
      }
    },
    "end": {
      "description": "Prospective end date of the project",
      "type": "google.type.date",
      "meta": {
        "label": "Project end",
        "default": "",
        "hint": ""
      },
      "constraints": {},
      "options": [],
      "__proto": {
        "number": 3,
        "type": "google.type.date"
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
      "type": "member",
      "meta": {
        "label": "Project members",
        "default": "",
        "hint": "",
        "repeated": true
      },
      "constraints": {},
      "options": [],
      "__proto": {
        "number": 5,
        "type": "member"
      }
    }
  }
}