{
  "name": "integer_property",
  "type": "IntegerProperty",
  "description": "Integer type with embedded meta",
  "__proto": {
    "package": "furo",
    "imports": [
      "furo/meta.proto"
    ],
    "targetfile": "property.proto"
  },
  "fields": {
    "data": {
      "description": "Integer data part",
      "type": "number",
      "__proto": {
        "number": 1,
        "type": "int32"
      }
    }
  }
}
