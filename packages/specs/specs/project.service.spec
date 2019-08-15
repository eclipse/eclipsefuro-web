{
  "name": "project_service",
  "description": "service specs for the project api",
  "version": "0.0.1",
  "lifecycle": {
    "deprecated": false,
    "info": "This version is still valid"
  },
  "__proto": {
    "package": "project",
    "imports": [
      "project.proto",
      "project_entity.proto",
      "project_collection.proto"
    ]
  },
  "services": {
    "List": {
      "description": "The List method takes zero or more parameters as input, and returns a ProjectCollection of ProjectEntity that match the input parameters.",
      "data": {
        "request": null,
        "response": "ProjectCollection"
      },
      "query": {
        "q": {
          "description": "Query term to search a project",
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
        "href": "/api/projects",
        "method": "GET"
      }
    },
    "Create": {
      "description": "Creates a new Project",
      "data": {
        "request": "Project",
        "response": "ProjectEntity"
      },
      "query": {
      },
      "deeplink": {
        "rel": "create",
        "href": "/api/projects",
        "method": "POST"
      }
    },
    "Get": {
      "description": "The Get method takes zero or more parameters, and returns a ProjectEntity which contains a Project",
      "data": {
        "request": "google.protobuf.Empty",
        "response": "ProjectEntity"
      },
      "query": {
      },
      "deeplink": {
        "rel": "self",
        "href": "/api/projects/{REPLACE_THIS_WITH_YOUR_QUERY_PARAM}",
        "method": "GET"
      }
    },
    "Update": {
      "description": "Updates a Project, partial updates are supported",
      "data": {
        "request": "Project",
        "response": "ProjectEntity"
      },
      "query": {},
      "deeplink": {
        "rel": "update",
        "href": "/api/projects/{REPLACE_THIS_WITH_YOUR_QUERY_PARAM}",
        "method": "PATCH"
      }
    },
    "Delete": {
      "description": "Delete a Project",
      "data": {
        "request": "google.protobuf.Empty",
        "response": "google.protobuf.Empty"
      },
      "query": {},
      "deeplink": {
        "rel": "delete",
        "href": "/api/projects/{REPLACE_THIS_WITH_YOUR_QUERY_PARAM}",
        "method": "DELETE"
      }
    }
  }
}
