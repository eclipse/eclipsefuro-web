{
  "name": "experiment",
  "type": "Constraints",
  "description": "Test the Constraints",
  "__proto": {
    "package": "experiment",
    "imports": [
      "google/protobuf/any.proto",
      "google/type/date.proto",
      "google/type/money.proto"
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
      "constraints": {
        "required": {
          "is": "true",
          "message":"is required"
        }
      },
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
      "constraints": {
        "required": {
          "is": "true",
          "message":"is required"
        },
        "pattern": {
          "is": "^a.*",
          "message": "must start with a"
        },

        "max": {
          "is": "12",
          "message":"maximal 12"
        }
      },
      "__proto": {
        "number": 2
      }
    },
    "number": {
      "description": "Short experiment description",
      "type": "int32",
      "meta": {
        "label": "Valid values are 6,9,12",
        "default": "1",
        "hint": ""
      },
      "constraints": {
        "min": {
          "is": "6",
          "message":"Minimal number 6"
        },
        "max": {
          "is": "12",
          "message":"maximal 12"
        },
        "step": {
          "is": "3",
          "message":"step 3"
        }
      },
      "__proto": {
        "number": 3
      }
    },
    "text": {
      "description": "Localized String representation of a experiment",
      "type": "string",
      "meta": {
        "label": "experiment",
        "default": "",
        "hint": "",
        "readonly": false
      },
      "constraints": {
        "required": {
          "is": "true",
          "message":"is required"
        },
        "pattern": {
          "is": "^a.*",
          "message": "must start with a"
        },
        "min": {
          "is": "6",
          "message":"minimal 6"
        },
        "max": {
          "is": "12",
          "message":"maximal 12"
        }
      },
      "__proto": {
        "number": 4
      }
    },
    "date": {
      "description": "Well Known Type Date",
      "type": "google.type.Date",
      "meta": {
        "label": "Date",
        "default": "",
        "hint": "",
        "readonly": false
      },
      "constraints": {
        "required": {
          "is": "true",
          "message":"is required"
        },
        "min": {
          "is": "2020-01-01",
          "message":"min 01.01.2020"
        },
        "max": {
          "is": "9999-12-31",
          "message":"max 31.12.9999"
        },
        "step": {
          "is": "30",
          "message":"step 30 days"
        }
      },
      "__proto": {
        "number": 5
      }
    },
    "money": {
      "description": "Well Known Type Money",
      "type": "google.type.Money",
      "meta": {
        "label": "Money",
        "default": {
          "currency": "CHF"
        },
        "hint": "",
        "readonly": false
      },
      "constraints": {
        "required": {
          "is": "true",
          "message":"is required"
        },
        "min": {
          "is": "1200.50",
          "message":"min amount 1200.50"
        },
        "max": {
          "is": "100000.00",
          "message":"max amount 100000.00"
        },
        "step": {
          "is": "1000.00",
          "message":"only in steps of 1000"
        }
      },
      "__proto": {
        "number": 6
      }
    }
  }
}
