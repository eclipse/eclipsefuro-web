{
  "name": "projectfilter_entity",
  "type": "ProjectfilterEntity",
  "description": "ProjectfilterEntity with Projectfilter",
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
    "data": {
      "description": "contains a projectfilter.Projectfilter",
      "type": "projectfilter.Projectfilter",
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
