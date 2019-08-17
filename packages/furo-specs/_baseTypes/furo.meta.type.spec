{
  "name": "meta",
  "type": "Meta",
  "description": "meta info",
  "__proto": {
    "package": "furo",
    "imports": ["metafield.proto"]
  },
  "fields": {
    "meta": {
      "description": "fields of meta info",
      "type": "keyValuePair",
      "__proto": {
        "number": 1,
        "map_from": "string",
        "map_to": "furo.Metafield"
      }
    }
  }
}
