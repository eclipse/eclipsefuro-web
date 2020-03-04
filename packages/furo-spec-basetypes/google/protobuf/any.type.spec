{
  "name": "any",
  "type": "Any",
  "description": "Any contains an arbitrary serialized protocol buffer message along with a\n// URL that describes the type of the serialized message. client uses type `ArrayBuffer` for the value field .  https://github.com/protocolbuffers/protobuf/blob/master/src/google/protobuf/any.proto",
  "__proto": {
    "package": "google.protobuf",
    "options": {
    },
    "imports": [],
    "targetfile": "any.proto"
  },
  "fields": {
    "type_url": {
      "type": "string",
      "__proto": {
        "number": 1
      }
    },
    "value": {
      "type": "bytes",
      "__proto": {
        "number": 2
      }
    }
  }
}
