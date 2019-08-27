{
  "name": "person_collection",
  "type": "PersonCollection",
  "description": "PersonCollection with repeated PersonEntity",
  "__proto": {
    "package": "person",
    "imports": [
     "furo/meta.proto",
     "furo/link.proto"
     ],
    "targetfile": "person.proto"
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
      "description": "Contains a person.PersonEntity repeated",
      "type": "person.PersonEntity",
      "meta": {
        "repeated": true
      },
      "__proto": {
        "number": 4
      }
    }
  }
}
