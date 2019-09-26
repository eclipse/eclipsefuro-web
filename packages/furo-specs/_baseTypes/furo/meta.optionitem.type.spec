{
  "name": "optionitem",
  "type": "Optionitem",
  "description": "Items for fieldoption.list",
  "__proto": {
    "package": "furo",
    "options": {},
    "imports": [],
    "targetfile": "meta.proto"
  },
  "fields": {
    "id": {
      "description": "Id",
      "type": "string",
      "meta": {
        "label": "Id"
      },
      "__proto": {
        "number": 1
      }
    },
    "display_name": {
      "description": "String representation",
      "type": "string",
      "meta": {
        "label": "Display name"
      },
      "__proto": {
        "number": 2
      }
    } ,
    "selected": {
      "description": "is the item selected",
      "meta": {
        "label": "Selected"
      },
      "type": "bool",
      "__proto": {
        "number": 3
      }
    }
  }
}


