{
  "name": "treeitem",
  "type": "Treeitem",
  "description": "Item of the navigationtree",
  "__proto": {
    "package": "tree",
    "imports": ["furo/link.proto"]
  },
  "fields": {
    "display_name": {
      "description": "String representation of the node",
      "type": "string",
      "meta": {
        "readonly": true,
        "tree-search-index": true
      },
      "__proto": {
        "number": 1
      }
    },
    "id": {
      "description": "Id of the node",
      "type": "string",
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
    "icon": {
      "description": "icon of the node",
      "type": "string",
      "__proto": {
        "number": 5
      }
    },
    "key_words": {
      "description": "key words of the node",
      "meta": {
        "tree-search-index": true
      },
      "type": "string",
      "__proto": {
        "number": 6
      }
    },
    "has_error": {
      "description": "if node has error",
      "type": "bool",
      "__proto": {
        "number": 7
      }
    },
    "open": {
      "description": "node open or not",
      "type": "bool",
      "__proto": {
        "number": 8
      }
    },
    "link": {
      "description": "Deeplink information of this node",
      "type": "furo.Link",
      "__proto": {
        "number": 9
      }
    },
    "children": {
      "description": "Children of this node",
      "type": "tree.Treeitem",
      "meta": {
        "repeated": true
      },
      "__proto": {
        "number": 10
      }
    }

  }
}
