{
  "name": "property_date",
  "type": "PropertyDate",
  "description": "Date type with embedded meta",
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
      "description": "Date data part",
      "type": "google.type.Date",
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
