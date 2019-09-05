{
  "name": "property",
  "type": "Property",
  "description": "Type to define property values with type information",
  "__proto": {
    "package": "furo",
    "imports": [
      "furo/meta.proto",
      "google/protobuf/any.proto"
    ],
    "targetfile": "property.proto"
  },
  "fields": {
    "id": {
      "description": "Id of the property",
      "type": "string",
      "meta": {
        "label": "Id",
        "readonly": true
      },
      "constraints": {},
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
      "meta": {},
      "constraints": {},
      "__proto": {
        "number": 3
      }
    },
    "meta": {
      "description": "meta part of the property",
      "type": "furo.Meta",
      "meta": {
        "label": "",
        "hint": ""
      },
      "constraints": {},
      "__proto": {
        "number": 4
      }
    }
  }
}
