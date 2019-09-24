{
  "name": "furo.spec.field",
  "type": "furo.spec.field",
  "description": "Defines a field in the furo spec",
  "fields": {
    "description": {
      "description": "the field description",
      "type": "string",
      "__proto": {
        "number": 1
      }
    },
    "type": {
      "description": "the field type",
      "type": "string",
      "__proto": {
        "number": 2
      }
    },
    "meta": {
      "description": "meta information for the client, like label, default, repeated, options...",
      "type": "map<string,google.protobuf.Any>",
      "meta": {
        "options": ["repeated"]
      },
      "__proto": {
        "number": 3
      }
    },
    "constraints": {
      "description": "constraints for a field, like min{}, max{}, step{}",
      "type": "map<string,google.protobuf.Any>",
      "__proto": {
        "number": 4
      }
    },
    "__proto": {
      "description": "information for the proto generator, like number, type",
      "type": "map<string,google.protobuf.Any>",
      "__proto": {
        "number": 6
      }
    }
  }
}
