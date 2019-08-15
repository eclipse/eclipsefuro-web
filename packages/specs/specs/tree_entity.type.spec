{
  "name": "tree_entity",
  "type": "TreeEntity",
  "description": "TreeEntity with Tree",
  "__proto": {
    "package": "tree",
    "imports": [
      "tree.proto",
      "furo/type/meta.proto",
      "furo/type/link.proto"
    ]
  },
  "fields": {
    "data": {
      "description": "Singletonresource of the navigationtree",
      "type": "Tree",
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
