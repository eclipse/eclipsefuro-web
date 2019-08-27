{
  "name": "tree_collection",
  "type": "TreeCollection",
  "description": "TreeCollection with repeated TreeEntity",
  "__proto": {
    "package": "tree",
    "imports": [
     "furo/meta.proto",
     "furo/link.proto"
     ],
    "targetfile": "tree.proto"
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
      "description": "Contains a tree.TreeEntity repeated",
      "type": "tree.TreeEntity",
      "meta": {
        "repeated": true
      },
      "__proto": {
        "number": 4
      }
    }
  }
}
