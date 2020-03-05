{
  "name": "reference",
  "type": "Reference",
  "description": "reference",
  "__proto": {
    "package": "furo",
    "imports": [
      "furo/link.proto"
    ],
    "targetfile": "reference.proto"
  },
  "fields": {
    "display_name": {
      "description": "String representation of the reference",
      "type": "string",
      "meta": {
        "readonly": true
      },
      "constraints": {},
      "__proto": {
        "number": 1
      }
    },
    "id": {
      "description": "Id of the reference",
      "type": "string",
      "__proto": {
        "number": 2
      }
    },
    "link": {
      "description": "Hateoas link",
      "type": "furo.Link",
      "__proto": {
        "number": 3
      }
    }
  }
}