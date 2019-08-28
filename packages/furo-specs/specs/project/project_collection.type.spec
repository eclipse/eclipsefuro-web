{
  "name": "project_collection",
  "type": "ProjectCollection",
  "description": "ProjectCollection with repeated ProjectEntity",
  "__proto": {
    "package": "project",
    "imports": [
     "furo/meta.proto",
     "furo/link.proto"
     ],
    "targetfile": "project.proto"
  },
  "fields": {
    "meta": {
      "description": "Meta for the response",
      "type": "furo.Meta",
      "__proto": {
        "number": 2
      }
    },
    "links": {
      "description": "Hateoas links",
      "type": "furo.Link",
      "meta": {
        "repeated": true
      },
      "__proto": {
        "number": 3
      }
    },
    "entities": {
      "description": "Contains a project.ProjectEntity repeated",
      "type": "project.ProjectEntity",
      "meta": {
        "repeated": true
      },
      "__proto": {
        "number": 4
      }
    }
  }
}
