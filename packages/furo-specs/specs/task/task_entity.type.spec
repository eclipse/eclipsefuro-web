{
  "name": "task_entity",
  "type": "TaskEntity",
  "description": "TaskEntity with Task",
  "__proto": {
    "package": "task",
    "options": {},
    "imports": [
      "furo/meta.proto",
      "furo/link.proto",
      "notification/notification.proto"
    ],
    "targetfile": "task.proto"
  },
  "fields": {
    "data": {
      "description": "contains a task.Task",
      "type": "task.Task",
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
    },
    "notifications": {
      "type": "notification.Notification",
      "description": "notification for the data",
      "__proto": {
        "number": 4
      }
    }
  }
}
