{
  "name": "TaskService",
  "description": "service specs for the task api",
  "version": "0.0.1",
  "lifecycle": {
    "deprecated": false,
    "info": "This version is still valid"
  },
  "__proto": {
    "package": "taskservice",
    "imports": [
      "task/task.proto",
      "google/protobuf/empty.proto"
    ],
    "targetfile": "service.proto"
  },
  "services": {
    "List": {
      "description": "The List method takes zero or more parameters as input, and returns a TaskCollection of TaskEntity that match the input parameters.",
      "rpc_name": "ListTasks",
      "data": {
        "request": null,
        "response": "task.TaskCollection"
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
        "description":"Describe_the_query_params_if_you_have",
        "rel": "list",
        "href": "/mockdata/tasks/list.json",
        "method": "GET"
      }
    },
    "Create": {
      "description": "Creates a new Task",
      "rpc_name": "CreateTask",
      "data": {
        "request": "task.Task",
        "response": "task.TaskEntity"
      },
      "query": {
      },
      "deeplink": {
        "rel": "create",
        "href": "/mockdata/tasks/create.json",
        "method": "GET"
      }
    },
    "Get": {
      "description": "The Get method takes zero or more parameters, and returns a TaskEntity which contains a Task",
      "rpc_name": "GetTask",
      "data": {
        "request": null,
        "response": "task.TaskEntity"
      },
      "query": {
      },
      "deeplink": {
        "rel": "self",
        "href": "/mockdata/tasks/{tsk}/get.json",
        "method": "GET"
      }
    },
    "Update": {
      "description": "Updates a Task, partial updates are not supported",
      "rpc_name": "UpdateTask",
      "data": {
        "request": "task.Task",
        "response": "task.TaskEntity"
      },
      "query": {},
      "deeplink": {
        "rel": "update",
        "href": "/mockdata/tasks/{tsk}/update.json",
        "method": "GET"
      }
    },
    "Delete": {
      "description": "Delete a Task",
      "rpc_name": "DeleteTask",
      "data": {
        "request": "google.protobuf.Empty",
        "response": "google.protobuf.Empty"
      },
      "query": {},
      "deeplink": {
        "rel": "delete",
        "href": "/mockdata/tasks/{tsk}/delete.json",
        "method": "GET"
      }
    }
  }
}
