{
  "name": "int32",
  "type": "Int32",
  "description": "Furo annotated type wrapper message for `int32`.  https://github.com/protocolbuffers/protobuf/blob/master/src/google/protobuf/wrappers.proto",
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
    "flags": {
      "type": "string",
      "description": "Flags for the value, something like unspecified, empty, confidential, absent,...",
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
      "description": "Attributes for a value, something like confidential-msg:you are not allowed to see this value ",
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
