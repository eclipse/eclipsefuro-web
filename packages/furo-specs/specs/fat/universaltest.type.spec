{
  "name": "universaltest",
  "type": "Universaltest",
  "description": "oneof experiment spec for testing",
  "__proto": {
    "package": "fat",
    "imports": [
      "google/protobuf/any.proto",
      "google/type/date.proto",
      "google/type/money.proto",
      "google/protobuf/field_mask.proto",
      "furo/property.proto"
    ],
    "targetfile": "universaltest.proto"
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
    "skalar_string": {
      "description": "Localized String representation of a experiment",
      "type": "string",
      "meta": {
        "label": "skalar string",
        "default": "",
        "hint": "",
        "readonly": true
      },
      "constraints": {},
      "__proto": {
        "number": 2,
        "oneof": null
      }
    },
    "wrapper_string": {
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
        "number": 2,
        "oneof": null
      }
    },
    "fat_string": {
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
        "number": 2,
        "oneof": null
      }
    }
  }
}
