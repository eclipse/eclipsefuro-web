{
  "name": "integer_property",
  "type": "IntegerProperty",
  "description": "Integer type with embedded meta",
  "__proto": {
    "package": "furo",
    "imports": [],
    "targetfile": "property.proto"
  },
  "fields": {
    "data": {
      "description": "Integer data part",
      "type": "int32",
      "constraints": {
        "step": {
          "is": 1
        }
      },
      "__proto": {
        "number": 1
      }
    }
  }
}
