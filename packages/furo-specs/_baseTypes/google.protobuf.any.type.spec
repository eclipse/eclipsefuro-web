{
  "name": "any",
  "type": "Any",
  "description": "Any` contains an arbitrary serialized protocol buffer message along with a\n// URL that describes the type of the serialized message. https://github.com/protocolbuffers/protobuf/blob/master/src/google/protobuf/any.proto",
  "__proto": {
    "package": "google.protobuf",
    "options": {
      "csharp_namespace": "Google.Protobuf.WellKnownTypes",
      "go_package": "github.com/golang/protobuf/ptypes/any",
      "java_package": "com.google.protobuf",
      "java_outer_classname": "AnyProto",
      "java_multiple_files": true,
      "objc_class_prefix": "GPB"
    },
    "imports": []
  },
  "fields": {
    "type_url": {
      "type": "string",
      "__proto": {
        "number": 1
      }
    },
    "value": {
      "type": "ArrayBuffer",
      "__proto": {
        "number": 2,
        "type": "bytes"
      }
    }
  }
}
