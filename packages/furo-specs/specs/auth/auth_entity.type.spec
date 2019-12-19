{
  "name": "auth_entity",
  "type": "AuthEntity",
  "description": "AuthEntity with Auth",
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
    "data": {
      "description": "contains a auth.Auth",
      "type": "auth.Auth",
      "__proto": {
        "number": 1
      }
    },
    "links": {
      "description": "Hateoas links",
      "type": "furo.Link",
      "meta": {"repeated": true},
      "__proto": {
        "number": 2
      }
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
