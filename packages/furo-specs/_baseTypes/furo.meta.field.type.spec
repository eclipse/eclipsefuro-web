{
  "name": "metafield",
  "type": "Metafield",
  "description": "fields of meta info",
  "__proto": {
    "package": "furo",
    "imports": [
      "fieldconstraint.proto",
      "fieldmeta.proto"
    ]
  },
  "fields": {
    "meta": {
      "description": "meta information of a field",
      "type": "furo.Fieldmeta",
      "__proto": {
        "number": 3
      }
    },
    "constraints": {
      "description": "constraints of a field",
      "type": "furo.Fieldconstraint",
      "__proto": {
        "number": 4,
        "repeated": true
      }
    }
  }
}
