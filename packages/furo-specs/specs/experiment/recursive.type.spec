{
  "name": "recursive",
  "type": "Recursive",
  "description": "recursive type for testing",
  "__proto": {
    "package": "experiment",
    "imports": [
      "google/protobuf/any.proto",
      "google/type/date.proto"
    ],
    "targetfile": "experiment.proto"
  },
  "fields": {
    "id": {
      "description": "Identity",
      "type": "string",
      "meta": {
        "label": "Id",
        "default": "",
        "hint": "",
        "readonly": false
      },
      "constraints": {},
      "__proto": {
        "number": 1
      }
    },
    "display_name": {
      "description": "Localized String representation",
      "type": "string",
      "meta": {
        "label": "experiment",
        "default": "",
        "hint": "",
        "readonly": false
      },
      "constraints": {},
      "__proto": {
        "number": 2
      }
    },
    "recursion": {
      "description": "The recursion",
      "type": "experiment.Recursive",
      "meta": {
        "label": "Recursio"
      },
      "constraints": {},
      "__proto": {
        "number": 3
      }
    }
  }
}
