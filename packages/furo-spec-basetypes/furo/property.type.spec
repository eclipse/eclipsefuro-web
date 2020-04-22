{
  "name": "property",
  "type": "Property",
  "description": "Type to define property values with type information",
  "__proto": {
    "package": "furo",
    "imports": [
      "google/protobuf/any.proto"
    ],
    "targetfile": "property.proto"
  },
  "fields": {
    "id": {
      "description": "Id of the property",
      "type": "string",
      "meta": {
        "label": "Id"
      },
      "constraints": {
        "required": {
          "is": "true",
          "message":"is required"
        }
      },
      "__proto": {
        "number": 1
      }
    },
    "display_name": {
      "description": "String representation of the property",
      "type": "string",
      "meta": {
        "label": "Property",
        "readonly": true
      },
      "constraints": {},
      "__proto": {
        "number": 2
      }
    },
    "data": {
      "description": "data part of the property",
      "type": "google.protobuf.Any",
      "constraints": {},
      "__proto": {
        "number": 3
      }
    },
    "meta": {
      "description": "Meta for the response",
      "type": "furo.Meta",
      "__proto": {
        "number": 4
      }
    },
    "code": {
      "description": "property code for additional settings",
      "type": "string",
      "__proto": {
        "number": 5
      }
    },
    "flags": {
      "description": "Optional attribute flags e.g. is-overwritable",
      "type": "string",
      "meta": {
        "readonly": true,
        "repeated": true
      },
      "__proto": {
        "number": 6
      }
    },
    "is_overwritten": {
      "description": "Optional flag indicating that the property differs from the original value",
      "type": "bool",
      "meta": {},
      "constraints": {},
      "__proto": {
        "number": 7
      }
    }
  }
}
