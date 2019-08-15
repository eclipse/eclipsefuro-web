{
  "name": "metafield",
  "type": "Metafield",
  "description": "fields of meta info",
  "__proto": {
    "package": "furo.type",
    "imports": [
      "furo/type/fieldconstraint.proto",
      "furo/type/fieldmeta.proto"
    ]
  },
  "fields": {
    "meta": {
      "description": "meta information of a field",
      "type": "furo.type.Fieldmeta",
      "__proto": {
        "number": 3
      }
    },
    "constraints": {
      "description": "constraints of a field",
      "type": "furo.type.Fieldconstraint",
      "__proto": {
        "number": 4,
        "repeated": true
      }
    }
  }
}
