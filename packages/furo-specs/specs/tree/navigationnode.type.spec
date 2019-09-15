{
  "name": "navigationnode",
  "type": "Navigationnode",
  "description": "Item of the navigationtree",
  "__proto": {
    "package": "tree",
    "imports": ["furo/link.proto"],
    "targetfile": "tree.proto"
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
    "secondary_text": {
      "description": "Secondary text of the node",
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
    "panel": {
      "description": "Which panel (i.e. view, edit, display) opens the node type (which is defined in property link)",
      "type": "string",
      "meta": {
        "readonly": true,
        "tree-search-index": false
      },
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
      "description": "node is open or not",
      "type": "bool",
      "__proto": {
        "number": 9
      }
    },
    "link": {
      "description": "Deeplink information of this node",
      "type": "furo.Link",
      "__proto": {
        "number": 10
      }
    },
    "is_group_label": {
      "description": "This node is a group label",
      "type": "bool",
      "meta": {
        "default": false
      },
      "__proto": {
        "number": 11
      }
    },
    "children": {
      "description": "Children of this node",
      "type": "tree.Navigationnode",
      "meta": {
        "repeated": true
      },
      "__proto": {
        "number": 12
      }
    }

  }
}
