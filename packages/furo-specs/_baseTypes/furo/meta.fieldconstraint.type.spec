{
  "name": "fieldconstraint",
  "type": "FieldConstraint",
  "description": "a single fieldconstraint",
  "__proto": {
    "package": "furo",
    "options": {},
    "imports": [],
    "targetfile": "meta.proto"
  },
  "fields": {
    "is": {
      "description": "the constraint value as string, even it is a number",
      "type": "string",
      "meta": {
        "label": "is",
        "hint": "the constraint value as string, even it is a number"
      },
      "__proto": {
        "number": 1
      }
    },
    "message": {
      "description": "The message to display on constraint violation",
      "type": "string",
      "meta": {
        "label": "message"
      },
      "__proto": {
        "number": 2
      }
    }
  }
}


