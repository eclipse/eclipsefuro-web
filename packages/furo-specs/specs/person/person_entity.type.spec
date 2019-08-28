{
  "name": "person_entity",
  "type": "PersonEntity",
  "description": "PersonEntity with Person",
  "__proto": {
    "package": "person",
    "imports": [
      "furo/meta.proto",
      "furo/link.proto"
    ],
    "targetfile": "person.proto"
  },
  "fields": {
    "data": {
      "description": "contains a person.Person",
      "type": "person.Person",
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
