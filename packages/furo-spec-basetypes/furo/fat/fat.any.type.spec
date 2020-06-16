{
  "name": "any",
  "type": "Any",
  "description": "Furo annotated type wrapper message for `any`. \n// Any contains an arbitrary serialized protocol buffer message along with a\n// URL that describes the type of the serialized message. https://github.com/protocolbuffers/protobuf/blob/master/src/google/protobuf/any.proto",
  "__proto": {
    "package": "furo.fat",
    "targetfile": "fat.proto",
    "imports": [],
    "options": {}
  },
  "fields": {
    "value": {
      "type": "bytes",
      "description": "The JSON representation for `AnyValue` is a JSON string? The client uses type `ArrayBuffer` for the value field.",
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
