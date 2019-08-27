{
  "name": "metafield",
  "type": "Metafield",
  "description": "fields of meta info",
  "__proto": {
    "package": "furo",
    "imports": [
    ],
    "targetfile": "meta.proto"
  },
  "fields": {
    "meta": {
      "description": "meta information of a field",
      "type": "Fieldmeta",
      "__proto": {
        "number": 3
      }
    },
    "constraints": {
      "description": "constraints of a field",
      "type": "Fieldconstraint",
      "__proto": {
        "number": 4,
        "repeated": true
      }
    }
  }
}
