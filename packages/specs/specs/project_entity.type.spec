{
  "name": "project_entity",
  "type": "ProjectEntity",
  "description": "ProjectEntity with Project",
  "__proto": {
    "package": "project",
    "imports": [
      "project.proto",
      "furo/type/meta.proto",
      "furo/type/link.proto"
    ]
  },
  "fields": {
    "data": {
      "description": "Project description",
      "type": "Project",
      "__proto": {
        "number": 1
      }
    },
    "links": {
      "description": "Hateoas links",
      "type": "furo.type.Link",
      "meta": {"repeated": true},
      "__proto": {
        "number": 2
      }
    },
    "meta": {
      "description": "Meta for the response",
      "type": "furo.type.Meta",
      "__proto": {
        "number": 3
      }
    }
  }
}
