{
  "name": "tree_entity",
  "type": "TreeEntity",
  "description": "TreeEntity with Tree",
  "__proto": {
    "package": "tree",
    "imports": [
      "tree.proto",
      "furo/meta.proto",
      "furo/link.proto"
    ]
  },
  "fields": {
    "data": {
      "description": "contains a tree.Tree",
      "type": "tree.Tree",
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
