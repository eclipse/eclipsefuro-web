{
  "name": "tree",
  "type": "Tree",
  "description": "Navigation tree type with recursive navigation nodes",
  "__proto": {
    "package": "tree",
    "imports": [],
    "targetfile": "tree.proto"
  },
  "fields": {
    "id": {
      "description": "Id of the tree",
      "type": "string",
      "__proto": {
        "number": 1
      }
    },
    "display_name": {
      "description": "String representation of the tree",
      "type": "string",
      "meta": {
        "readonly": true,
        "tree-search-index": true
      },
      "__proto": {
        "number": 2
      }
    },
    "description": {
      "description": "description of the tree",
      "meta": {
        "tree-search-index": true
      },
      "type": "string",
      "__proto": {
        "number": 3
      }
    },
    "root": {
      "description": "Rootnode of the tree",
      "type": "tree.Navigationnode",
      "meta": {},
      "__proto": {
        "number": 10
      }
    }

  }
}
