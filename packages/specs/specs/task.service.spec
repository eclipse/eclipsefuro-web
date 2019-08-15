{
  "name": "task_service",
  "description": "The tasks",
  "version": "1.0.0",
  "lifecycle": {
    "deprecated": false,
    "info": "This version is still valid"
  },
  "__proto": {
    "package": "task",
    "imports": []
  },
  "services": {
    "List": {
      "description": "Get a collection with TaskEntities",
      "data": {
        "request": null,
        "response": "TaskCollection"
      },
      "query": {},
      "deeplink": {
        "rel": "list",
        "href": "/api/tasks",
        "method": "GET"
      }
    }
  }
}
