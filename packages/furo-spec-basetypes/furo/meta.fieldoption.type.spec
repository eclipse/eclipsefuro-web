{
  "name": "fieldoption",
  "type": "Fieldoption",
  "description": "Metas for a field",
  "__proto": {
    "package": "furo",
    "targetfile": "meta.proto",
    "imports": [
      "google/protobuf/any.proto"
    ],
    "options": null
  },
  "fields": {
    "list": {
      "type": "google.protobuf.Any",
      "description": "a list with options, use furo.optionitem or your own",
      "__proto": {
        "number": 1
      },
      "__ui": {
        "component": "",
        "flags": [
          "full",
          "condensed"
        ],
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
          "flags": null
        }
      },
      "constraints": null
    },
    "flags": {
      "type": "string",
      "description": "Add flags for your field. This can be something like \"searchable\". \n//The flags can be used by generators, ui components,...\n",
      "__proto": {
        "number": 2
      },
      "__ui": {
        "component": null,
        "flags": [],
        "no_init": false,
        "no_skip": false
      },
      "meta": {
        "label": "flags",
        "hint": "optional flags",
        "default": null,
        "readonly": false,
        "repeated": true,
        "options": {
          "list": [],
          "flags": null
        },
        "typespecific": null
      },
      "constraints": null
    }
  }
}