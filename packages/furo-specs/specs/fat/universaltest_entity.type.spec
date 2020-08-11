{
  "name": "universaltest_entity",
  "type": "UniversaltestEntity",
  "description": "UniversaltestEntity with Universaltest type in data",
  "__proto": {
    "package": "universaltest",
    "options": {},
    "imports": [
      "furo/meta.proto",
      "furo/link.proto"
    ],
    "targetfile": "universaltest.proto"
  },
  "fields": {
    "data": {
      "description": "contains a universaltest.Universaltest",
      "type": "universaltest.Universaltest",
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
