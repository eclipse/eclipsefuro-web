{
  "name": "project_entity",
  "type": "ProjectEntity",
  "description": "ProjectEntity with Project",
  "__proto": {
    "package": "project",
    "imports": [
      "furo/meta.proto",
      "furo/link.proto"
    ],
    "targetfile": "project.proto"
  },
  "fields": {
    "data": {
      "description": "contains a project.Project",
      "type": "project.Project",
      "__proto": {
        "number": 1
      }
    },
    "links": {
      "description": "Hateoas links",
      "type": "furo.Link",
      "meta": {"repeated": true},
      "__proto": {
        "number": 2
      }
    },
    "meta": {
      "description": "Meta for the response",
      "type": "furo.Meta",
      "__proto": {
        "number": 3
      }
    }
  }
}
