{
  "name": "uint64",
  "type": "Uint64",
  "description": "Furo annotated type wrapper message for `uint64`.  The range constraints are set to Number.MAX_SAFE_INTEGER because of browser limitations",
  "__proto": {
    "package": "furo.fat",
    "targetfile": "fat.proto",
    "imports": [],
    "options": {}
  },
  "fields": {
    "value": {
      "type": "uint64",
      "description": "The JSON representation for `Uint64Value` is JSON number, range is set to 0 - Number.MAX_SAFE_INTEGER",
      "__proto": {
        "number": 1
      },
      "__ui": {
        "component": "",
        "flags": [],
        "no_init": false,
        "no_skip": false
      },
      "meta": {
        "label": "",
        "hint": "",
        "default": "",
        "readonly": false,
        "repeated": false,
        "options": {
          "list": [],
          "flags": {}
        }
      },
      "constraints": {
        "min": {
          "is": "0",
          "message": "out of range"
        },
        "max": {
          "is": "9007199254740991",
          "message": "out of range"
        }
      }
    },
    "labels": {
      "type": "string",
      "description": "Labels / flags for the value, something like unspecified, empty, confidential, absent,... Can be used for AI, UI, Business Logic,...",
      "__proto": {
        "number": 2
      },
      "__ui": {
        "component": "",
        "flags": [],
        "no_init": false,
        "no_skip": false
      },
      "meta": {
        "label": "",
        "hint": "",
        "default": "",
        "readonly": false,
        "repeated": true,
        "options": {
          "list": [],
          "flags": {}
        }
      },
      "constraints": {}
    },
    "attributes": {
      "type": "map<string,string>",
      "description": "Attributes for a value, something like confidential-msg: you are not allowed to see this value ",
      "__proto": {
        "number": 3
      },
      "__ui": {
        "component": "",
        "flags": [],
        "no_init": false,
        "no_skip": false
      },
      "meta": {
        "label": "",
        "hint": "",
        "default": "",
        "readonly": false,
        "repeated": false,
        "options": {
          "list": [],
          "flags": {}
        }
      },
      "constraints": {}
    }
  }
}
