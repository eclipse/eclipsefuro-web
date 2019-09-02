{
  "name": "experiment",
  "type": "Default",
  "description": "Test the default value",
  "__proto": {
    "package": "experiment",
    "imports": [
      "google/protobuf/any.proto"
    ],
    "targetfile": "experiment.proto"
  },
  "fields": {
    "id": {
      "description": "Identity of a experiment",
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
      "description": "Localized String representation of a experiment",
      "type": "string",
      "meta": {
        "label": "experiment",
        "default": "",
        "hint": "",
        "readonly": true
      },
      "constraints": {},
      "__proto": {
        "number": 2
      }
    },
    "description": {
      "description": "Short experiment description",
      "type": "string",
      "meta": {
        "label": "Description",
        "default": "Ein text per default",
        "hint": ""
      },
      "constraints": {},
      "__proto": {
        "number": 3
      }
    },
    "repstring": {
      "description": "repeated string",
      "type": "string",
      "meta": {
        "repeated": true,
        "label": "Description",
        "default": "Ein text per default",
        "hint": ""
      },
      "constraints": {},
      "__proto": {
        "number": 4
      }
    }
  }
}
