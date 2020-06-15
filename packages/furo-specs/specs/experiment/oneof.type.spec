{
  "name": "oneof",
  "type": "Oneof",
  "description": "oneof experiment spec for testing",
  "__proto": {
    "package": "experiment",
    "imports": [
      "google/protobuf/any.proto",
      "google/type/date.proto",
      "google/type/money.proto",
      "google/protobuf/field_mask.proto",
      "furo/property.proto"
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
        "number": 2,
        "oneof": "aaa"
      }
    },
    "description": {
      "description": "Short experiment description",
      "type": "string",
      "meta": {
        "label": "Description",
        "default": "Default Description",
        "hint": ""
      },
      "constraints": {},
      "__proto": {
        "number": 3,
        "oneof": "bbb"
      }
    },
    "furo_data_checkbox_input": {
      "description": "field for furo_data_checkbox_input for testing",
      "type": "bool",
      "meta": {
        "label": "checkbox_input",
        "default": "",
        "hint": "Hint",
        "readonly": false
      },
      "constraints": {},
      "__proto": {
        "number": 4,
        "oneof": "aaa"
      }
    },
    "furo_data_text_input": {
      "description": "field for furo_data_text_input for testing",
      "type": "string",
      "meta": {
        "label": "text_input",
        "hint": "hint",
        "readonly": false
      },
      "constraints": {
        "required": {
          "is": "true",
          "message":"is required"
        },
        "min": {
          "is": 3,
          "message": "at least 3 characters"
        },
        "max": {
          "is": 15,
          "message": "15 characters maximum"
        },
        "pattern": {
          "is": "^a.*",
          "message": "must start with a"
        }
      },
      "__proto": {
        "number": 5,
        "oneof": "bbb"
      }
    },
    "furo_data_file_input": {
      "description": "field for testing file type",
      "type": "string",
      "meta": {
        "readonly": false,
        "repeated": true,
        "label": "Choose a file"
      },
      "constraints": {
        "required": {
          "is": "true",
          "message":"is required"
        }
      },
      "__proto": {
        "number": 22
      }
    },
    "update_mask": {
      "description": "Contains a field_mask which fields of the targeted resource are going to be updated",
      "type": "google.protobuf.FieldMask",
      "meta": {},
      "constraints": {},
      "__proto": {
        "number": 23,
        "oneof": "useless"
      }
    }

  }
}
