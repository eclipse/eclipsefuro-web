{
  "name": "task_entity",
  "type": "TaskEntity",
  "description": "TaskEntity with Task",
  "__proto": {
    "package": "task",
    "imports": [
      "task.proto",
      "furo/type/meta.proto",
      "furo/type/link.proto"
    ]
  },
  "fields": {
    "data": {
      "description": "Task data description",
      "type": "Task",
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
