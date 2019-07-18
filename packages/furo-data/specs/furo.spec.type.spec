{
  "name": "furo.spec.type",
  "type": "furo.spec.type",
  "description": "Defines a type in the furo spec",
  "fields": {
    "name": {
      "description": "Name of the type",
      "type": "string",
      "meta": {},
      "options": {},
      "__proto": {
        "number": 1
      }
    },
    "type": {
      "description": "the type ",
      "type": "string",
      "meta": {},
      "options": {},
      "__proto": {
        "number": 2
      }
    },
    "description": {
      "description": "the type description",
      "type": "string",
      "meta": {},
      "options": {},
      "__proto": {
        "number": 3
      }
    },
    "fields": {
      "description": "fields of a type",
      "type": "map<string,furo.spec.field>",
      "repeated": true,
      "meta": {},
      "options": {},
      "__proto": {
        "number": 4
      }
    },
    "__proto": {
      "description": "information for the proto generator",
      "type": "any",
      "__proto": {
        "number": 5
      }
    }
  }
}
