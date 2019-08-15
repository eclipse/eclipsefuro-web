{
  "name": "project_service",
  "description": "Project data",
  "version": "1.0.0",
  "lifecycle": {
    "deprecated": false,
    "info": "This version is still valid"
  },
  "__proto": {
    "package": "project",
    "imports": [
      "project_collection.proto",
      "project_entity.proto"
    ]
  },
  "services": {
    "List": {
      "description": "Get a collection with ProjectEntities",
      "data": {
        "request": null,
        "response": "ProjectCollection"
      },
      "query": {},
      "deeplink": {
        "rel": "list",
        "href": "/api/projects",
        "method": "GET"
      }
    },
    "Get": {
      "description": "Get a ProjectEntity",
      "data": {
        "request": null,
        "response": "ProjectEntity"
      },
      "query": {},
      "deeplink": {
        "rel": "list",
        "href": "/api/projects/{prj}",
        "method": "GET"
      }
    }
  }
}
