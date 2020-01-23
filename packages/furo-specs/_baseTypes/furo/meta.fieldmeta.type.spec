{
  "name": "fieldmeta",
  "type": "FieldMeta",
  "description": "Metas for a field",
  "__proto": {
    "package": "furo",
    "options": {},
    "imports": ["google/protobuf/any.proto"],
    "targetfile": "meta.proto"
  },
  "fields": {
    "label": {
      "description": "The label",
      "type": "string",
      "meta": {
        "label": "Label",
        "hint": "Also used for input-fields"
      },
      "__proto": {
        "number": 1
      }
    },
    "hint": {
      "description": "A hint",
      "type": "string",
      "meta": {
        "label": "Hint",
        "hint": "Also used for input-fields"
      },
      "__proto": {
        "number": 2
      }
    },
    "default": {
      "description": "The default value as JSON string",
      "type": "string",
      "meta": {
        "label": "Default value"
      },
      "__proto": {
        "number": 3
      }
    },
    "readonly": {
      "description": "readonly",
      "type": "bool",
      "meta": {
        "label": "readonly"
      },
      "__proto": {
        "number": 4
      }
    },
    "repeated": {
      "description": "repeated",
      "type": "bool",
      "meta": {
        "label": "repeated"
      },
      "__proto": {
        "number": 5
      }
    },
    "options": {
      "description": "Fieldoptions",
      "type": "furo.Fieldoption",
      "meta": {
        "label": "options"
      },
      "__proto": {
        "number": 6
      }
    },
    "typespecific": {
      "description": "Put in type specific metas for your fields here",
      "type": "google.protobuf.Any",
      "meta": {
        "label": "typespecific meta"
      },
      "__proto": {
        "number": 7
      },
      "__ui":{
        "no_init": true
      }
    }
  }
}


