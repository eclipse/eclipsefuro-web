{
  "name": "{{.name}}",
  "type": "{{.type}}",
  "description": "{{.description}}",
  "__proto": {
    "package": "{{.name}}",
    "imports": []
  },
  "fields": {
    "id": {
        "description": "Identity of {{.type}}",
        "type": "{{.proto_type}}",
        "meta": {
          "label": "Name",
          "default": "",
          "hint": ""
        },
        "constraints": {},
        "options": [],
        "__proto": {
          "number": 1
        }
    },
    "display_name": {
      "description": "Localized String representation of a {{.type}}",
      "type": "string",
      "meta": {
        "label": "{{.type}}",
        "default": "",
        "hint": "",
        "readonly": true
      },
      "constraints": {},
      "options": [],
      "__proto": {
        "number": 2
      }
    }

  }
}
