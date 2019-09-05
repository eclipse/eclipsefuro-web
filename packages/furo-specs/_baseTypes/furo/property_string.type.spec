{
  "name": "property_string",
  "type": "PropertyString",
  "description": "String type with embedded meta",
  "__proto": {
    "package": "furo",
    "imports": [
      "furo/meta.proto"
    ],
    "targetfile": "property.proto"
  },
  "fields": {
    "data": {
      "description": "data part",
      "type": "string",
      "__proto": {
        "number": 1
      }
    },
    "meta": {
      "description": "Meta for the property string",
      "type": "furo.Meta",
      "__proto": {
        "number": 2
      }
    }
  }
}
