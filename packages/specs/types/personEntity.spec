{
  "name": "PersonEntity",
  "type": "PersonEntity",
  "description": "Person with hateoas",
  "__proto": {
    "package": "furo.demo",
    "imports": [
      "person.proto",
      "furo/type/meta.proto",
      "furo/type/link.proto"
    ]
  },
  "fields": {
    "data": {
      "description": "person entity",
      "type": "Person",
      "__proto": {
        "number": 1
      }
    },
    "links": {
      "description": "Hateoas links",
      "type": "furo.type.Link",
      "meta": {"repeated": true},
      "__proto": {
        "number": 2
      }
    },
    "meta": {
      "description": "Meta for the response",
      "type": "furo.type.Meta",
      "__proto": {
        "number": 3
      }
    }
  }
}
