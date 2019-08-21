{
  "name": "tree",
  "type": "Tree",
  "description": "Singletonresource of the navigationtree",
  "__proto": {
    "package": "tree",
    "imports": ["navigationnode.proto"]
  },
  "fields": {
    "id": {
      "description": "Id of the node",
      "type": "string",
      "__proto": {
        "number": 1
      }
    },
    "display_name": {
      "description": "String representation of the node",
      "type": "string",
      "meta": {
        "readonly": true,
        "tree-search-index": true
      },
      "__proto": {
        "number": 2
      }
    },
    "subtitle": {
      "description": "subtitle of the node",
      "type": "string",
      "meta": {
        "tree-search-index": true
      },
      "__proto": {
        "number": 3
      }
    },
    "description": {
      "description": "description of the node",
      "meta": {
        "tree-search-index": true
      },
      "type": "string",
      "__proto": {
        "number": 4
      }
    },
    "panel": {
      "description": "Indicator which panel type is loaded",
      "type": "string",
      "meta": {
        "readonly": true,
        "tree-search-index": false
      },
      "__proto": {
        "number": 5
      }
    },
    "icon": {
      "description": "icon of the node",
      "type": "string",
      "__proto": {
        "number": 6
      }
    },
    "key_words": {
      "description": "key words of the node",
      "meta": {
        "tree-search-index": true
      },
      "type": "string",
      "__proto": {
        "number": 7
      }
    },
    "has_error": {
      "description": "if node has error",
      "type": "bool",
      "__proto": {
        "number": 8
      }
    },
    "open": {
      "description": "node open or not",
      "type": "bool",
      "__proto": {
        "number": 9
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
