{
  "name": "readonly",
  "type": "Readonly",
  "description": "Readonly spec for testing",
  "__proto": {
    "package": "experiment",
    "targetfile": "experiment.proto",
    "imports": [
      "furo/property.proto",
      "project/project.proto"
    ],
    "options": null
  },
  "fields": {
    "project": {
      "type": "project.Project",
      "description": "Identity of a experiment",
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
        "label": "Id",
        "hint": "",
        "default": "",
        "readonly": true,
        "repeated": false,
        "options": {
          "list": []
        }
      },
      "constraints": null
    },
    "meta": {
      "description": "Meta for the response",
      "type": "furo.Meta",
      "__proto": {
        "number": 3
      }
    }
  }
}
