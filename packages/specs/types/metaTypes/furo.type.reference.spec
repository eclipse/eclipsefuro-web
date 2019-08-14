{
  "name": "Reference",
  "type": "furo.type.Reference",
  "description": "reference",
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
    "rel": {
      "description": "the relationship",
      "type": "string",
      "__proto": {
        "number": 3
      }
    },
    "method": {
      "description": "method of curl GET, POST, PUT, PATCH, DELETE",
      "type": "string",
      "__proto": {
        "number": 4
      }
    },
    "href": {
      "description": "link",
      "type": "string",
      "__proto": {
        "number": 5
      }
    },
    "type": {
      "description": "mime type",
      "type": "string",
      "__proto": {
        "number": 6
      }
    }
  }
}
