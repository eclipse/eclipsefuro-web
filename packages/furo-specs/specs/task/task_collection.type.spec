{
  "name": "task_collection",
  "type": "TaskCollection",
  "description": "TaskCollection with repeated TaskEntity",
  "__proto": {
    "package": "task",
    "options": {},
    "imports": [
     "furo/meta.proto",
     "furo/link.proto"
     ],
    "targetfile": "task.proto"
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
      "description": "Contains a task.TaskEntity repeated",
      "type": "task.TaskEntity",
      "meta": {
        "repeated": true
      },
      "__proto": {
        "number": 4
      }
    }
  }
}
