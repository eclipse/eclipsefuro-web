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
        "type": "string",
        "meta": {
          "label": "TITEL"
        }
      },
      "description": {
        "description": "description",
        "type": "string",
        "meta": {
          "label": "description"
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
