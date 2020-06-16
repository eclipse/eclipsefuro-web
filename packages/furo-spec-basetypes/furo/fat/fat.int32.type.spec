{
  "name": "int32",
  "type": "Int32",
  "description": "Furo annotated type wrapper message for `int32`.",
  "__proto": {
    "package": "furo.fat",
    "targetfile": "fat.proto",
    "imports": [],
    "options": {}
  },
  "fields": {
    "value": {
      "type": "int32",
      "description": "The JSON representation for `Int32Value` is JSON number",
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
          "is": "−2147483648",
          "message": "out of range"
        },
        "max": {
          "is": "2147483647",
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
