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
      "type": "number",
      "constraints": {
        "step": {
          "value": 1
        }
      },
      "__proto": {
        "number": 1,
        "type": "int32"
      }
    }
  }
}
