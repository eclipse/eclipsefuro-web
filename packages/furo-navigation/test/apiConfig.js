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
      "link":{
        "description":"self Link",
        "type":"vnd.furo.link",
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
  },
  "vnd.furo.link":{
    "name": "Link",
    "type": "vnd.furo.link",
    "mime": "application/vnd.furo.link+json",
    "description": "link",
    "fields": {
      "rel": {
        "description": "the relationship",
        "type": "string",
        "__proto": {
          "number": 1
        }
      },
      "method": {
        "description": "method of curl",
        "type": "string",
        "__proto": {
          "number": 2
        }
      },
      "href": {
        "description": "link",
        "type": "string",
        "__proto": {
          "number": 3
        }
      },
      "type": {
        "description": "mime type",
        "type": "string",
        "__proto": {
          "number": 4
        }
      }
    }
  }

};
