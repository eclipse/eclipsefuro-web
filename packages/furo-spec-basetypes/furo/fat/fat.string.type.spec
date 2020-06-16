{
  "name": "string",
  "type": "String",
  "description": "Furo annotated type wrapper message for `string`.",
  "__proto": {
    "package": "furo.fat",
    "targetfile": "fat.proto",
    "imports": [],
    "options": {}
  },
  "fields": {
    "value": {
      "type": "string",
      "description": "The JSON representation for `StringValue` is a JSON string",
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
      "constraints": {}
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
