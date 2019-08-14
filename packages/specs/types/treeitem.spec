{
  "name": "Treeitem",
  "type": "Treeitem",
  "description": "Item of the navigationtree",
  "__proto": {
    "package": "furo.demo",
    "imports": ["furo/type/link.proto"]
  },
  "fields": {
    "display_name": {
      "description": "String representation of the node",
      "type": "string",
      "meta": {
        "readonly": true,
        "tree-searcb-index": true
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
        "tree-searcb-index": true
      },
      "__proto": {
        "number": 3
      }
    },
    "description": {
      "description": "description of the node",
      "meta": {
        "tree-searcb-index": true
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
        "tree-searcb-index": true
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
      "type": "furo.type.Link",
      "__proto": {
        "number": 9
      }
    },
    "children": {
      "description": "Children of this node",
      "type": "Treeitem",
      "meta": {
        "repeated": true
      },
      "__proto": {
        "number": 10
      }
    }

  }
}
