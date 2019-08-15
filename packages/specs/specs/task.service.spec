{
  "name": "task_service",
  "description": "service specs for the task api",
  "version": "0.0.1",
  "lifecycle": {
    "deprecated": false,
    "info": "This version is still valid"
  },
  "__proto": {
    "package": "task",
    "imports": [
      "task.proto",
      "task_entity.proto",
      "task_collection.proto"
    ]
  },
  "services": {
    "List": {
      "description": "The List method takes zero or more parameters as input, and returns a TaskCollection of TaskEntity that match the input parameters.",
      "data": {
        "request": null,
        "response": "TaskCollection"
      },
      "query": {
        "q": {
          "description": "Query term to search a task",
          "type": "string",
          "meta": {
            "label": "Search",
            "hint": ""
          },
          "__proto": {
            "type": "string"
          }
        }
      },
      "deeplink": {
        "rel": "list",
        "href": "/api/tasks",
        "method": "GET"
      }
    },
    "Create": {
      "description": "Creates a new Task",
      "data": {
        "request": "Task",
        "response": "TaskEntity"
      },
      "query": {
      },
      "deeplink": {
        "rel": "create",
        "href": "/api/tasks",
        "method": "POST"
      }
    },
    "Get": {
      "description": "The Get method takes zero or more parameters, and returns a TaskEntity which contains a Task",
      "data": {
        "request": "google.protobuf.Empty",
        "response": "TaskEntity"
      },
      "query": {
      },
      "deeplink": {
        "rel": "self",
        "href": "/api/tasks/{REPLACE_THIS_WITH_YOUR_QUERY_PARAM}",
        "method": "GET"
      }
    },
    "Update": {
      "description": "Updates a Task, partial updates are supported",
      "data": {
        "request": "Task",
        "response": "TaskEntity"
      },
      "query": {},
      "deeplink": {
        "rel": "update",
        "href": "/api/tasks/{REPLACE_THIS_WITH_YOUR_QUERY_PARAM}",
        "method": "PATCH"
      }
    },
    "Delete": {
      "description": "Delete a Task",
      "data": {
        "request": "google.protobuf.Empty",
        "response": "google.protobuf.Empty"
      },
      "query": {},
      "deeplink": {
        "rel": "delete",
        "href": "/api/tasks/{REPLACE_THIS_WITH_YOUR_QUERY_PARAM}",
        "method": "DELETE"
      }
    }
  }
}
