{
  "name": "experiment",
  "type": "Experiment",
  "description": "experiment spec for testing",
  "__proto": {
    "package": "experiment",
    "imports": [
      "furo/reference.proto"
    ]
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
      "options": [],
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
      "options": [],
      "__proto": {
        "number": 2
      }
    },
    "description": {
      "description": "Short experiment description",
      "type": "string",
      "meta": {
        "label": "Description",
        "default": "",
        "hint": ""
      },
      "constraints": {},
      "options": [],
      "__proto": {
        "number": 3
      }
    },
    "furo_data_checkbox_input": {
      "description": "field for furo_data_checkbox_input for testing",
      "type": "bool",
      "meta": {
        "label": "Label for furo_data_checkbox_input",
        "default": "",
        "hint": "Hint",
        "readonly": false
      },
      "constraints": {},
      "options": [],
      "__proto": {
        "number": 4,
        "type": "int32"
      }
    },
    "furo_data_text_input": {
      "description": "field for furo_data_text_input for testing",
      "type": "string",
      "meta": {
        "label": "Label for furo_data_text_input input",
        "hint": "hint",
        "min": 3,
        "max": 15,
        "readonly": false
      },
      "constraints": {},
      "options": [],
      "__proto": {
        "number": 5
      }
    },
    "furo_data_textarea_input": {
      "description": "field for furo_data_textarea_input for testing",
      "type": "string",
      "meta": {
        "label": "Label for furo_data_textarea_input input",
        "hint": "hint",
        "readonly": false
      },
      "constraints": {},
      "options": [],
      "__proto": {
        "number": 6
      }
    },
    "furo-data-time-input": {
      "description": "field for furo-data-time-input for testing",
      "type": "google.type.Date",
      "meta": {
        "label": "Label for furo-data-time-input input",
        "hint": "hint",
        "readonly": false,
        "min":null,
        "max":null,
        "step":""
      },
      "constraints": {},
      "options": [],
      "__proto": {
        "number": 7
      }
    },
    "furo-data-range-input": {
      "description": "field for furo-data-range-input for testing",
      "type": "string",
      "meta": {
        "label": "Label for furo-data-range-input input",
        "hint": "hint",
        "readonly": false,
        "min":null,
        "max":null,
        "step":""
      },
      "constraints": {},
      "options": [],
      "__proto": {
        "number": 8
      }
    },
    "furo-data-number-input": {
      "description": "field for furo-data-number-input for testing",
      "type": "float",
      "meta": {
        "label": "Label for furo-data-number-input input",
        "hint": "hint",
        "readonly": false,
        "min":null,
        "max":null,
        "step":""
      },
      "constraints": {},
      "options": [],
      "__proto": {
        "number": 9
      }
    }
  }
}
