{
  "name": "person",
  "type": "Person",
  "description": "Person message type",
  "__proto": {
    "package": "person",
    "imports": []
  },
  "fields": {
    "id": {
      "description": "Identity of a person",
      "type": "string",
      "meta": {
        "label": "Person",
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
    "display_name": {
      "description": "Localized String representation of a person",
      "type": "string",
      "meta": {
        "label": "Person",
        "default": "",
        "hint": "",
        "readonly": true
      },
      "constraints": {},
      "options": [],
      "__proto": {
        "number": 2
      }
    },
    "name": {
      "description": "Name of a person",
      "type": "string",
      "meta": {
        "label": "Name",
        "default": "",
        "hint": ""
      },
      "constraints": {},
      "options": [],
      "__proto": {
        "number": 3
      }
    },
    "first_name": {
      "description": "First name of a person",
      "type": "string",
      "meta": {
        "label": "First name",
        "default": "",
        "hint": ""
      },
      "constraints": {},
      "options": [],
      "__proto": {
        "number": 4
      }
    },
    "phone_nr": {
      "description": "Internal phone number",
      "type": "string",
      "meta": {
        "label": "Phone No",
        "default": "",
        "hint": ""
      },
      "constraints": {},
      "options": [],
      "__proto": {
        "number": 5
      }
    },
    "skills": {
      "description": "List of main skills of a person",
      "type": "string",
      "meta": {
        "label": "Skills",
        "default": "",
        "hint": "",
        "repeated": true
      },
      "constraints": {},
      "options": [],
      "__proto": {
        "number": 6
      }
    }
  }
}
