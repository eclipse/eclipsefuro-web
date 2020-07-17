{
  "name": "universaltest",
  "type": "Universaltest",
  "description": "oneof experiment spec for testing",
  "__proto": {
    "package": "universaltest",
    "imports": [
      "google/protobuf/wrappers.proto",
      "furo/fat/fat.proto"
    ],
    "targetfile": "universaltest.proto"
  },
  "fields": {
    "id": {
      "description": "Identity of a universaltes type",
      "type": "string",
      "meta": {
        "label": "Id",
        "default": "",
        "hint": "",
        "readonly": false
      },
      "constraints": {},
      "__proto": {
        "number": 1
      }
    },
    "scalar_string": {
      "description": "field of a scalar string for the Universaltest",
      "type": "string",
      "meta": {
        "label": "skalar string",
        "default": "",
        "hint": "",
        "readonly": false
      },
      "constraints": {},
      "__proto": {
        "number": 2,
        "oneof": null
      }
    },
    "wrapper_string": {
      "description": "field of a wrapper string for the Universaltest",
      "type": "google.protobuf.StringValue",
      "meta": {
        "label": "wrapper string",
        "default": "",
        "hint": "",
        "readonly": false
      },
      "constraints": {},
      "__proto": {
        "number": 3,
        "oneof": null
      }
    },
    "fat_string": {
      "description": "field of a fat string for the Universaltest",
      "type": "furo.fat.String",
      "meta": {
        "label": "fat string",
        "default": "",
        "hint": "",
        "readonly": false
      },
      "constraints": {},
      "__proto": {
        "number": 4,
        "oneof": null
      }
    },
    "scalar_int32": {
      "description": "field of a scalar int32 for the Universaltest",
      "type": "int32",
      "meta": {
        "label": "skalar int",
        "default": "",
        "hint": "",
        "readonly": false
      },
      "constraints": {},
      "__proto": {
        "number": 5,
        "oneof": null
      }
    },
    "wrapper_int32": {
      "description": "field of a wrapper int32 for the Universaltest",
      "type": "google.protobuf.Int32Value",
      "meta": {
        "label": "skalar int",
        "default": "",
        "hint": "",
        "readonly": false
      },
      "constraints": {},
      "__proto": {
        "number": 6,
        "oneof": null
      }
    },
    "fat_int32": {
      "description": "field of a fat int32 for the Universaltest",
      "type": "furo.fat.Int32",
      "meta": {
        "label": "fat int32",
        "default": "",
        "hint": "",
        "readonly": false
      },
      "constraints": {},
      "__proto": {
        "number": 7,
        "oneof": null
      }
    },
    "fat_string_list": {
      "description": "field of a fat string for the Universaltest",
      "type": "furo.fat.String",
      "meta": {
        "label": "fat string with options",
        "default": "",
        "hint": "hint message",
        "readonly": false,
        "options": {
          "list": [
            {
              "id": "unknown",
              "display_name": "person.type.sex.unknown.label",
              "selected": false,
              "@type": "type.googleapis.com/furo.Optionitem"
            },
            {
              "id": "female",
              "display_name": "person.type.sex.female.label",
              "selected": true,
              "@type": "type.googleapis.com/furo.Optionitem"
            },
            {
              "id": "male",
              "display_name": "person.type.sex.male.label",
              "selected": false,
              "@type": "type.googleapis.com/furo.Optionitem"
            }
          ]
        }
      },
      "constraints": {
        "value.required": {
          "is": "true",
          "message": "is required"
        },
        "value.min": {
          "is": 3,
          "message": "at least 3 characters"
        },
        "value.max": {
          "is": 15,
          "message": "15 characters maximum"
        },
        "value.pattern": {
          "is": "^a.*",
          "message": "must start with a"
        }
      },
      "__proto": {
        "number": 8,
        "oneof": null
      }
    }
  }
}
