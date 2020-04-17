{
  "name": "menuitem",
  "type": "Menuitem",
  "description": "Item of a contextual menu",
  "__proto": {
    "package": "menu",
    "options": {
      "java_outer_classname": "MenuApi",
      "java_package": "com.acme.menu"
    },
    "imports": [
      "google/protobuf/any.proto"
    ],
    "targetfile": "menu.proto"
  },
  "fields": {
    "icon": {
      "description": "Leading icon of the menu",
      "type": "string",
      "__proto": {
        "number": 1
      }
    },
    "display_name": {
      "description": "String representation of the menu item. Menu item text",
      "type": "string",
      "meta": {
        "readonly": true
      },
      "__proto": {
        "number": 2
      }
    },
    "disabled": {
      "description": "Display actions as disabled when they can only be used sometimes, under certain conditions. They should be displayed as disabled rather than removing them.",
      "type": "bool",
      "meta": {
        "default": false
      },
      "__proto": {
        "number": 3
      }
    },
    "command": {
      "description": "Keyboard command hint",
      "type": "string",
      "meta": {},
      "__proto": {
        "number": 4
      }
    },
    "action": {
      "description": "String representation of the menu item action",
      "type": "string",
      "meta": {},
      "__proto": {
        "number": 5
      }
    },
    "leading_divider": {
      "description": "Item has a leading divider line",
      "type": "bool",
      "meta": {
        "default": false
      },
      "__proto": {
        "number": 6
      }
    },
    "children": {
      "description": "Children of this item",
      "type": "menu.Menuitem",
      "meta": {
        "repeated": true
      },
      "__proto": {
        "number": 7
      }
    },
    "flags": {
      "description": "Attribute flags e.g. important, negative, positive",
      "type": "string",
      "meta": {
        "readonly": true,
        "repeated": true
      },
      "__proto": {
        "number": 8
      }
    },
    "payload": {
      "description": "Optional payload",
      "type": "google.protobuf.Any",
      "meta": {
        "readonly": true,
        "repeated": true
      },
      "__proto": {
        "number": 9
      }
    }
  }
}
