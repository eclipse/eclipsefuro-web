{
  "name": "property_decimal",
  "type": "PropertyDecimal",
  "description": "Decimal type with embedded meta",
  "__proto": {
    "package": "furo",
    "imports": [
      "furo/meta.proto",
      "google/type/date.proto"
    ],
    "targetfile": "property.proto"
  },
  "fields": {
    "data": {
      "description": "Decimal data part",
      "type": "string",
      "__proto": {
        "number": 1
      }
    },
    "meta": {
      "description": "Meta for the property",
      "type": "furo.Meta",
      "__proto": {
        "number": 2
      }
    }
  }
}
