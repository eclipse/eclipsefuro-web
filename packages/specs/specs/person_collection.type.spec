{
  "name": "person_collection",
  "type": "PersonCollection",
  "description": "PersonCollection with repeated PersonEntity",
  "__proto": {
    "package": "person",
    "imports": [
     "person_entity.proto",
     "furo/type/meta.proto",
     "furo/type/link.proto"
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
      "description": "PersonEntity repeated",
      "type": "PersonEntity",
      "meta": {
        "repeated": true
      },
      "__proto": {
        "number": 4
      }
    }
  }
}
