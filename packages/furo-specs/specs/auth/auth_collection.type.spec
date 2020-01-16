{
  "name": "auth_collection",
  "type": "AuthCollection",
  "description": "AuthCollection with repeated AuthEntity",
  "__proto": {
    "package": "auth",
    "options": {},
    "imports": [
      "furo/meta.proto",
      "furo/link.proto"
    ],
    "targetfile": "auth.proto"
  },
  "fields": {
    "meta": {
      "description": "Meta for the response",
      "type": "furo.Meta",
      "__proto": {
        "number": 2
      }
    },
    "links": {
      "description": "Hateoas links",
      "type": "furo.Link",
      "meta": {
        "repeated": true
      },
      "__proto": {
        "number": 3
      }
    },
    "entities": {
      "description": "Contains a auth.AuthEntity repeated",
      "type": "auth.AuthEntity",
      "meta": {
        "repeated": true
      },
      "__proto": {
        "number": 4
      }
    }
  }
}
