{
  "name": "project_collection",
  "type": "ProjectCollection",
  "description": "ProjectCollection with repeated ProjectEntity",
  "__proto": {
    "package": "project",
    "imports": [
     "project.proto",
     "furo/type/meta.proto",
     "furo/type/link.proto"
     ]
  },
  "fields": {
    "meta": {
      "description": "Meta for the response",
      "type": "furo.type.Meta",
      "__proto": {
        "number": 2
      }
    },
    "links": {
      "description": "Hateoas links",
      "type": "furo.type.Link",
      "meta": {
        "repeated": true
      },
      "__proto": {
        "number": 3
      }
    },
    "entities": {
      "description": "ProjectEntity repeated",
      "type": "ProjectEntity",
      "meta": {
        "repeated": true
      },
      "__proto": {
        "number": 4
      }
    }
  }
}
