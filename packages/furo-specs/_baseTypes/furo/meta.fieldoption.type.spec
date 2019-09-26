{
  "name": "fieldoption",
  "type": "Fieldoption",
  "description": "Metas for a field",
  "__proto": {
    "package": "furo",
    "options": {},
    "imports": ["google/protobuf/any.proto"],
    "targetfile": "meta.proto"
  },
  "fields": {
    "list": {
      "description": "a list with options, use furo.optionitem or your own",
      "type": "google.protobuf.Any",
      "meta": {
        "repeated": true
      },
      "__proto": {
        "number": 1
      }
    }
  }
}


