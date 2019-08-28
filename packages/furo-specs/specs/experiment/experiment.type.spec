{
  "name": "experiment",
  "type": "Experiment",
  "description": "experiment spec for testing",
  "__proto": {
    "package": "experiment",
    "imports": [

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
        "hint": "Hint"
      },
      "constraints": {
        "readonly": false
      },
      "options": [],
      "__proto": {
        "number": 4
      }
    },
    "furo_data_text_input": {
      "description": "field for furo_data_text_input for testing",
      "type": "string",
      "meta": {
        "label": "Label for furo_data_text_input input",
        "hint": "hint"
      },
      "constraints": {
        "min": 3,
        "max": 15,
        "readonly": false
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
        "label": "Label for furo_data_textarea_input input",
        "hint": "hint"
      },
      "constraints": {
        "readonly": false
      },
      "options": [],
      "__proto": {
        "number": 6
      }
    },
    "furo_data_time_input": {
      "description": "field for furo-data-time-input for testing",
      "type": "string",
      "meta": {
        "label": "Label for furo-data-time-input input",
        "hint": "hint"
      },
      "constraints": {
        "readonly": false,
        "min":null,
        "max":null,
        "step":""
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
        "label": "Label for furo-data-range-input input",
        "hint": "hint"
      },
      "constraints": {
        "min":null,
        "max":null,
        "step":"",
        "readonly": false
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
        "label": "Label for furo-data-number-input input",
        "hint": "hint"
      },
      "constraints": {
        "min":1,
        "max":5,
        "step":"",
        "readonly": false
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
        "label": "Label for furo-data-color-input input",
        "hint": "hint"
      },
      "constraints": {
        "readonly": false
      },
      "options": [],
      "__proto": {
        "number": 10
      }
    },
    "furo_data_password_input": {
      "description": "field for furo-data-password-input for testing",
      "type": "string",
      "meta": {
        "label": "Label for furo-data-password-input input",
        "hint": "hint"
      },
      "constraints": {
        "min":6,
        "max":15,
        "pattern":"",
        "readonly": false
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
        "label": "Label for furo-search-input input",
        "hint": "hint"
      },
      "constraints": {
        "min":1,
        "max":15,
        "pattern":"",
        "readonly": false
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
        "label": "Label for furo-data-date-input input",
        "hint": "hint"
      },
      "constraints": {
        "min":1,
        "max":15,
        "pattern":"",
        "readonly": false
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
        "label": "Label for furo-data-bool-icon input",
        "hint": "hint"
      },
      "constraints": {
        "readonly": false
      },
      "options": [],
      "__proto": {
        "number": 14
      }
    }
  }
}
