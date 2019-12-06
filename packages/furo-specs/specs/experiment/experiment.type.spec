{
  "name": "experiment",
  "type": "Experiment",
  "description": "experiment spec for testing",
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
        "number": 5
      }
    },
    "furo_data_textarea_input": {
      "description": "field for furo_data_textarea_input for testing",
      "type": "string",
      "meta": {
        "label": "textarea_input",
        "hint": "hint",
        "readonly": false,
        "rows": 3,
        "cols": 100
      },
      "constraints": {},
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
        "min": {
          "is": "05:00",
          "message": "From 05:00"
        },
        "max": {
          "is": "19:00",
          "message": "to 19:00"
        },
        "step": {
          "is": "5",
          "message": "step 5"
        }
      },
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
        "min": {
          "is": 20,
          "message": "From 20"
        },
        "max": {
          "is": 50,
          "message": "to 50"
        },
        "step": {
          "is": "2.5",
          "message": "step 2.5"
        }
      },
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
        "min": {
          "is": 1,
          "message": "from 1"
        },
        "max": {
          "is": 555,
          "message": "to 555"
        },
        "step": {
          "is": "3",
          "message": "step 3"
        }
      },
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
        "min": {
          "is": 6,
          "message": "min 6"
        },
        "max": {
          "is": 15,
          "message": "max 15"
        }
      },
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
        "min": {
          "is": 1,
          "message": "min 1"
        },
        "max": {
          "is": 15,
          "message": "max 15"
        },
        "pattern": {
          "is": "a.*",
          "message": "must start with a"
        }
      },
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
        "min": {
          "is": "1800-01-01",
          "message": "The earliest date to accept is 1800-01-01"
        },
        "max": {
          "is": "2099-12-31",
          "message": "The latest date to accept is 2099-12-31"
        },
        "step": {
          "is": "5",
          "message": "step 5"
        }
      },
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
      "__proto": {
        "number": 15
      }
    },
    "type_with_options": {
      "description": "field for testing static options",
      "type": "string",
      "meta": {
        "label": "String options",
        "hint": "Choose one",
        "options": {
          "list": [
            {
              "id": "option_1",
              "display_name": "option_1",
              "selected": true,
              "@type": "type.googleapis.com/furo.Optionitem"
            },
            {
              "id": "option_2",
              "display_name": "option_2",
              "selected": true,
              "@type": "type.googleapis.com/furo.Optionitem"
            },
            {
              "id": "option_3",
              "display_name": "option_3",
              "selected": true,
              "@type": "type.googleapis.com/furo.Optionitem"
            }
          ]
        }
      },
      "constraints": {},
      "__proto": {
        "number": 16
      }
    },
    "type_property": {
      "description": "field for testing property",
      "type": "furo.Property",
      "meta": {
        "label": "Additional fields",
        "repeated": true
      },
      "constraints": {},
      "__proto": {
        "number": 17
      }
    },
    "furo_data_date_input_google": {
      "description": "field for furo-data-date-input for testing",
      "type": "google.type.Date",
      "meta": {
        "label": "gogole-date-input",
        "hint": "hint",
        "readonly": false
      },
      "constraints": {
        "min": {
          "is": "1800-01-01",
          "message": "The earliest date to accept is 1800-01-01"
        },
        "max": {
          "is": "2099-12-31",
          "message": "The latest date to accept is 2099-12-31"
        },
        "step": {
          "is": "2",
          "message": "step 2"
        }
      },
      "__proto": {
        "number": 18
      }
    },
    "single_type_property": {
      "description": "field for testing property",
      "type": "furo.Property",
      "meta": {
        "label": "Additional fields"
      },
      "constraints": {},
      "__proto": {
        "number": 19
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
        "number": 20
      }
    },
    "furo_data_money_input": {
      "description": "field for testing money type",
      "type": "google.type.Money",
      "meta": {
        "readonly":false,
        "label": "Amount",
        "hint":"google.type.Money",
        "options": {
          "list": [
              "CAD",
              "CNY",
              "CHF",
              "EUR"
          ]
        }

      },
      "constraints": {
        "required": {
          "is": "true",
          "message":"is required"
        },
        "min": {
          "is": 0,
          "message": "amount can not be negative"
        },
        "max":{
          "is": 999999,
          "message": "amount maximal 999999"
        },
        "step":{
          "is": 0.01,
          "message": "step 0.01"
        }
      },
      "__proto": {
        "number": 21
      }
    },
    "update_mask": {
      "description": "Contains a field_mask which fields of the targeted resource are going to be updated",
      "type": "google.protobuf.FieldMask",
      "meta": {},
      "constraints": {},
      "__proto": {
        "number": 22
      }
    }

  }
}
