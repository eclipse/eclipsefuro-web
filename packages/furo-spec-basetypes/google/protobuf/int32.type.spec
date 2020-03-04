{
  "name": "int32value",
  "type": "Int32Value",
  "description": "Wrapper message for `int32`.  https://github.com/protocolbuffers/protobuf/blob/master/src/google/protobuf/wrappers.proto",
  "__proto": {
    "package": "google.protobuf",
    "options": {
    },
    "imports": [],
    "targetfile": "wrappers.proto"
  },
  "fields": {
    "value": {
      "description": "The JSON representation for `Int32Value` is JSON number",
      "type": "int32",
      "__proto": {
        "number": 1
      },
      "constraints": {
        "min": {
          "is": "−2147483648",
          "message": "out of range"
        },
        "max": {
          "is": "2147483647",
          "message": "out of range"
        }
      }
    }
  }
}
