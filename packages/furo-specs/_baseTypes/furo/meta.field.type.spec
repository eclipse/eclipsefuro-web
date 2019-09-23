{
  "name": "metafield",
  "type": "MetaField",
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
      "type": "map<string,string>",
      "__proto": {
        "number": 1,
        "map_from": "string",
        "map_to": "string"
      }
    },
    "constraints": {
      "description": "constraints for a field",
      "type": "map<string,furo.FieldConstraint>",
      "__proto": {
        "number": 2,
        "map_from": "string",
        "map_to": "furo.FieldConstraint"
      }
    }
  }
}
