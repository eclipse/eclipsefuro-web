{
  "name": "field_mask",
  "type": "FieldMask",
  "description": "A field mask in update operations specifies which fields of the targeted resource are going to be updated. https://github.com/protocolbuffers/protobuf/blob/master/src/google/protobuf/field_mask.proto",
  "__proto": {
    "package": "google.protobuf.types.known",
    "options": {
    },
    "imports": [],
    "targetfile": "field_mask.proto"
  },
  "fields": {
    "paths": {
      "description": "The implementation of any API method which has a FieldMask type field in the request should verify the included field paths, and return an `INVALID_ARGUMENT` error if any path is duplicated or unmappable.",
      "type": "string",
      "meta": {
        "repeated": true
      },
      "__proto": {
        "number": 1
      }
    }
  }
}
