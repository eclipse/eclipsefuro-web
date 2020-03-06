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
          "description": "Query term to search a {{.name}}",
          "type": "string",
          "meta": {
            "label": "Search",
            "hint": ""
          },
          "__proto": {
            "type": "string"
          }
        },
        "fields": {
          "description": "Partial representation (comma separated list of field names), ?fields=",
          "type": "string",
          "meta": {
            "label": "Fields",
            "hint": "Comma separated list of field names"
          },
          "__proto": {
            "type": "string"
          }
        },
        "order_by": {
          "description": "Specifies the result ordering for List requests. The default sorting order is ascending, ?order_by=foo desc,bar",
          "type": "string",
          "meta": {
            "label": "Sorting Order",
            "hint": "The default sorting order is ascending"
          },
          "__proto": {
            "type": "string"
          }
        },
        "filter": {
          "description": "The response message will be filtered by the fields before being sent back to the client, filter=[['id','eq','1']]",
          "type": "string",
          "meta": {
            "label": "Filter",
            "hint": ""
          },
          "__proto": {
            "type": "string"
          }
        },
        "page_size": {
          "description": "Use this field to specify the maximum number of results to be returned by the server. \n    //The server may further constrain the maximum number of results returned in a single page. \n    //If the page_size is 0, the server will decide the number of results to be returned. page_size=15",
          "type": "string",
          "meta": {
            "label": "Page Size",
            "hint": "If the page_size is 0, the server will decide the number of results to be returned."
          },
          "__proto": {
            "type": "string"
          }
        },
        "view": {
          "description": "allows the client to specify which view of the resource it wants to receive in the response. view=BASIC",
          "type": "string",
          "meta": {
            "label": "View",
            "hint": "Should be a enum type. MUST be named view"
          },
          "__proto": {
            "type": "string"
          }
        }
      },
      "deeplink": {
        "description": "Describe_the_query_params_if_you_have",
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
      "query": {},
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
