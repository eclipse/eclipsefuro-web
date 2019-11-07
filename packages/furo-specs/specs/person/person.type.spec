{
  "name": "person",
  "type": "Person",
  "description": "Person message type",
  "__proto": {
    "package": "person",
    "imports": [
      "google/protobuf/field_mask.proto"
    ],
    "targetfile": "person.proto"
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
      "constraints": {
        "required": {
          "is": "true",
          "message": "you must enter a name"
        }
      },
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
      "__proto": {
        "number": 4
      },
      "__ui": {
        "component": "furo-data-text-input"
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
      "__proto": {
        "number": 6
      }
    },
    "update_mask": {
      "description": "Contains a field_mask which fields of the targeted resource are going to be updated",
      "type": "google.protobuf.FieldMask",
      "meta": {},
      "constraints": {},
      "__proto": {
        "number": 7
      }
    }
  }
}
