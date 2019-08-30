{
  "name": "experiment",
  "type": "Experiment",
  "description": "experiment spec for testing",
  "__proto": {
    "package": "experiment",
    "imports": ["google/protobuf/any.proto"],
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
        "label": "checkbox_input",
        "default": "",
        "hint": "Hint",
        "readonly": false
      },
      "constraints": {},
      "options": [],
      "__proto": {
        "number": 4
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
        "min": 3,
        "max": 15
      },
      "options": [],
      "__proto": {
        "number": 5
      }
    },
    "furo_data_textarea_input": {
      "description": "field for furo_data_textarea_input for testing",
      "type": "string",
      "meta": {
        "label": "textarea_input",
        "hint": "hint",
        "readonly": false
      },
      "constraints": {},
      "options": [],
      "__proto": {
        "number": 6
      }
    },
    "furo_data_time_input": {
      "description": "field for furo-data-time-input for testing",
      "type": "string",
      "meta": {
        "label": "time-input",
        "hint": "hint",
        "readonly": false
      },
      "constraints": {
        "min":"05:00",
        "max":"19:00",
        "step":"5"
      },
      "options": [],
      "__proto": {
        "number": 7
      }
    },
    "furo_data_range_input": {
      "description": "field for furo-data-range-input for testing",
      "type": "string",
      "meta": {
        "label": "range-input",
        "hint": "hint",
        "readonly": false
      },
      "constraints": {
        "min":null,
        "max":null,
        "step":""
      },
      "options": [],
      "__proto": {
        "number": 8
      }
    },
    "furo_data_number_input": {
      "description": "field for furo-data-number-input for testing",
      "type": "float",
      "meta": {
        "label": "number-input",
        "hint": "hint",
        "readonly": false
      },
      "constraints": {
        "min":1,
        "max":555,
        "step":"3"
      },
      "options": [],
      "__proto": {
        "number": 9
      }
    },
    "furo_data_color_input": {
      "description": "field for furo-data-color-input for testing",
      "type": "string",
      "meta": {
        "label": "color-input",
        "hint": "hint",
        "readonly": false
      },
      "constraints": {},
      "options": [],
      "__proto": {
        "number": 10
      }
    },
    "furo_data_password_input": {
      "description": "field for furo-data-password-input for testing",
      "type": "string",
      "meta": {
        "label": "password-input",
        "hint": "hint",
        "readonly": false
      },
      "constraints": {
        "min":6,
        "max":15,
        "pattern":""
      },
      "options": [],
      "__proto": {
        "number": 11
      }
    },
    "furo_data_search_input": {
      "description": "field for furo-search-input for testing",
      "type": "string",
      "meta": {
        "label": " search",
        "hint": "hint",
        "readonly": false
      },
      "constraints": {
        "min":1,
        "max":15,
        "pattern":""
      },
      "options": [],
      "__proto": {
        "number": 12
      }
    },
    "furo_data_date_input": {
      "description": "field for furo-data-date-input for testing",
      "type": "string",
      "meta": {
        "label": "date-input",
        "hint": "hint",
        "readonly": false
      },
      "constraints": {
        "min":"1800-01-01",
        "max":"2099-12-31",
        "pattern":""
      },
      "options": [],
      "__proto": {
        "number": 13
      }
    },
    "furo_data_bool_icon": {
      "description": "field for furo-data-bool-icon for testing",
      "type": "bool",
      "meta": {
        "label": "bool-icon input",
        "hint": "hint",
        "readonly": false
      },
      "constraints": {},
      "options": [],
      "__proto": {
        "number": 14
      }
    },

    "the_any_type": {
      "description": "field for testing any",
      "type": "google.protobuf.Any",
      "meta": {
        "label": "can be anything",
        "hint": "hint",
        "readonly": false
      },
      "constraints": {},
      "options": [],
      "__proto": {
        "number": 15
      }
    }
  }
}
