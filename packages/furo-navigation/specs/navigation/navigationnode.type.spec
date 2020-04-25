{
  "name": "navigationnode",
  "type": "Navigationnode",
  "description": "This is an example signature of a navigation node, which can be used for the components of @furo/navigation ",
  "__proto": {
    "package": "navigation",
    "imports": ["furo/link.proto"],
    "targetfile": "navigation.proto"
  },
  "fields": {
    "id": {
      "description": "Id of the node, this field value must be unique",
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
      "description": "Secondary text of the node [optional]",
      "type": "string",
      "meta": {
        "tree-search-index": true
      },
      "__proto": {
        "number": 3
      }
    },
    "icon": {
      "description": "icon of a node. When used in furo-tree it will be displayed as leading icon [optional]",
      "type": "string",
      "__proto": {
        "number": 5
      }
    },
    "panel": {
      "description": "Which panel (i.e. view, edit, display) opens the node type (which is defined in property link). The value of this field must correspond to your registry.",
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
      "type": "navigation.Navigationnode",
      "meta": {
        "repeated": true
      },
      "__proto": {
        "number": 12
      }
    },
    "flags": {
      "description": "Attribute flags e.g. important, negative, positive. Can be used for custom annotations for styling, logic,...",
      "type": "string",
      "meta": {
        "readonly": true,
        "repeated": true
      },
      "__proto": {
        "number": 13
      }
    },
    "payload": {
      "description": "Optional payload",
      "type": "google.protobuf.Any",
      "meta": {
        "readonly": true
      },
      "__proto": {
        "number": 14
      }
    }

  }
}
