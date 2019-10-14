{
  "name": "string_option_property",
  "type": "StringOptionProperty",
  "description": "String type to use in property",
  "__proto": {
    "package": "furo",
    "imports": [
    ],
    "targetfile": "property.proto"
  },
  "fields": {
    "display_name": {
      "description": "String representation of val",
      "type": "string",
      "meta": {
        "readonly": true
      },
      "constraints": {},
      "__proto": {
        "number": 1
      }
    },
    "id": {
      "description": "The value, Id is used to make working with data-inputs easier",
      "type": "string",
      "__proto": {
        "number": 2
      }
    }
  }
}
