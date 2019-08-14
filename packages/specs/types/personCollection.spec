{
  "name": "PersonCollection",
  "type": "PersonCollection",
  "description": "Collection with persons inside",
  "__proto": {
    "package": "furo.demo",
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
