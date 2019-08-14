{
  "name": "Meta",
  "type": "furo.meta.field",
  "mime": "application/furo.meta.field+json",
  "description": "fields of meta info",
  "fields": {
    "meta": {
      "description": "meta information of a field",
      "type": "furo.meta.field.meta",
      "__proto": {
        "number": 3
      }
    },
    "constraints": {
      "description": "constraints of a field",
      "type": "furo.meta.field.constraint",
      "__proto": {
        "number": 4,
        "repeated": true
      }
    }
  }
}
