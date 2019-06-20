export const Types = {
  "vnd.com.acme.tree": {
    "name": "Tree",
    "type": "vnd.com.acme.tree",
    "mime": "application/vnd.com.acme.tree+json",
    "description": "Tree komposit",

    "fields": {
      "id": {
        "description": "id",
        "type": "int"
      },

      "display_name": {
        "description": "Label",
        "type": "string"
      },
      "description": {
        "description": "description",
        "type": "string"
      },
      "open": {
        "description": "open close",
        "type": "bool",
        "meta": {
          "default": false,
        }
      },
      "children": {
        "descripion":"Child nodes",
        "type": "vnd.com.acme.tree",
        "meta": {
          "repeated": true
        }
      }
    }
  }
};
