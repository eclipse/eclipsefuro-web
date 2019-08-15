{
  "name": "PersonCollection",
  "type": "PersonCollection",
  "description": "PersonCollection with repeated PersonEntity inside",
  "__proto": {
    "package": "person",
    "imports": [
      "furo/type/meta.proto",
      "furo/type/link.proto",
      "person.proto"
    ]
  },
  "fields": {
    "meta": {
      "description": "Meta for the response",
      "type": "furo.type.Meta",
      "__proto": {
        "number": 2
      }
    },
    "links": {
      "description": "Hateoas links",
      "type": "furo.type.Link",
      "meta": {
        "repeated": true
      },
      "__proto": {
        "number": 3
      }
    },
    "entities": {
      "description": "person entities",
      "type": "Person",
      "meta": {
        "repeated": true
      },
      "__proto": {
        "number": 4
      }
    }
  }
}
