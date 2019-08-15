{
  "name": "tree_collection",
  "type": "TreeCollection",
  "description": "TreeCollection with repeated TreeEntity",
  "__proto": {
    "package": "tree",
    "imports": [
     "tree_entity.proto",
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
      "description": "TreeEntity repeated",
      "type": "TreeEntity",
      "meta": {
        "repeated": true
      },
      "__proto": {
        "number": 4
      }
    }
  }
}
