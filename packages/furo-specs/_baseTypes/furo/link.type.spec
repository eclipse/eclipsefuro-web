{
  "name": "link",
  "type": "Link",
  "description": "link",
  "__proto": {
    "package": "furo",
    "imports": [],
    "targetfile": "link.proto"
  },
  "fields": {
    "rel": {
      "description": "the relationship",
      "type": "string",
      "__proto": {
        "number": 1
      }
    },
    "method": {
      "description": "method of curl",
      "type": "string",
      "__proto": {
        "number": 2
      }
    },
    "href": {
      "description": "link",
      "type": "string",
      "__proto": {
        "number": 3
      }
    },
    "type": {
      "description": "mime type",
      "type": "string",
      "__proto": {
        "number": 4
      }
    },
    "service": {
      "description": "name of the service which can handle this link",
      "type": "string",
      "__proto": {
        "number": 5
      }
    }
  }
}
