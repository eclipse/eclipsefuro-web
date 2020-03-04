{
  "name": "optionitem",
  "type": "Optionitem",
  "description": "Items for fieldoption.list",
  "__proto": {
    "package": "furo",
    "targetfile": "meta.proto",
    "imports": [],
    "options": null
  },
  "fields": {
    "id": {
      "type": "string",
      "description": "Id",
      "__proto": {
        "number": 1
      },
      "__ui": {
        "component": "",
        "flags": [],
        "no_init": false,
        "no_skip": true
      },
      "meta": {
        "label": "Id",
        "hint": "",
        "default": "",
        "readonly": false,
        "repeated": false,
        "options": {
          "list": []
        }
      },
      "constraints": null
    },
    "display_name": {
      "type": "string",
      "description": "String representation",
      "__proto": {
        "number": 2
      },
      "__ui": {
        "component": "",
        "flags": [],
        "no_init": false,
        "no_skip": true
      },
      "meta": {
        "label": "Display name",
        "hint": "",
        "default": "",
        "readonly": false,
        "repeated": false,
        "options": {
          "list": []
        }
      },
      "constraints": null
    },
    "selected": {
      "type": "bool",
      "description": "is the item selected",
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
        "label": "Selected",
        "hint": "",
        "default": "",
        "readonly": false,
        "repeated": false,
        "options": {
          "list": []
        }
      },
      "constraints": null
    }
  }
}
