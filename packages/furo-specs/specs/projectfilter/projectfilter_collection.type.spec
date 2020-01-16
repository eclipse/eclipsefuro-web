{
  "name": "projectfilter_collection",
  "type": "ProjectfilterCollection",
  "description": "ProjectfilterCollection with repeated ProjectfilterEntity",
  "__proto": {
    "package": "projectfilter",
    "options": {},
    "imports": [
      "furo/meta.proto",
      "furo/link.proto"
    ],
    "targetfile": "projectfilter.proto"
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
      "description": "Contains a projectfilter.ProjectfilterEntity repeated",
      "type": "projectfilter.ProjectfilterEntity",
      "meta": {
        "repeated": true
      },
      "__proto": {
        "number": 4
      }
    }
  }
}
