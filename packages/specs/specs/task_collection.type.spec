{
  "name": "task_collection",
  "type": "TaskCollection",
  "description": "TaskCollection with repeated TaskEntity",
  "__proto": {
    "package": "task",
    "imports": [
     "task_entity.proto",
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
      "description": "TaskEntity repeated",
      "type": "TaskEntity",
      "meta": {
        "repeated": true
      },
      "__proto": {
        "number": 4
      }
    }
  }
}
