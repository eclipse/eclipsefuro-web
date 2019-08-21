{
  "name": "{{.name}}",
  "type": "{{.type}}",
  "description": "{{.description}}",
  "__proto": {
    "package": "{{.name}}",
    "options": {},
    "imports": []
  },
  "fields": {
    "id": {
        "description": "Identity of {{.type}}",
        "type": "{{.identity_type}}",
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
