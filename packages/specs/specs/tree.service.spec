{
  "name": "tree_service",
  "description": "service specs for the tree api",
  "version": "0.0.1",
  "lifecycle": {
    "deprecated": false,
    "info": "This version is still valid"
  },
  "__proto": {
    "package": "tree",
    "imports": [
      "tree.proto",
      "tree_entity.proto",
      "tree_collection.proto"
    ]
  },
  "services": {
    "List": {
      "description": "The List method takes zero or more parameters as input, and returns a TreeCollection of TreeEntity that match the input parameters.",
      "data": {
        "request": null,
        "response": "TreeCollection"
      },
      "query": {
        "q": {
          "description": "Query term to search a tree",
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
        "href": "/api/trees",
        "method": "GET"
      }
    },
    "Create": {
      "description": "Creates a new Tree",
      "data": {
        "request": "Tree",
        "response": "TreeEntity"
      },
      "query": {
      },
      "deeplink": {
        "rel": "create",
        "href": "/api/trees",
        "method": "POST"
      }
    },
    "Get": {
      "description": "The Get method takes zero or more parameters, and returns a TreeEntity which contains a Tree",
      "data": {
        "request": "google.protobuf.Empty",
        "response": "TreeEntity"
      },
      "query": {
      },
      "deeplink": {
        "rel": "self",
        "href": "/api/trees/{var}",
        "method": "GET"
      }
    },
    "Update": {
      "description": "Updates a Tree, partial updates are supported",
      "data": {
        "request": "Tree",
        "response": "TreeEntity"
      },
      "query": {},
      "deeplink": {
        "rel": "update",
        "href": "/api/trees/{var}",
        "method": "PATCH"
      }
    },
    "Delete": {
      "description": "Delete a Tree",
      "data": {
        "request": "google.protobuf.Empty",
        "response": "google.protobuf.Empty"
      },
      "query": {},
      "deeplink": {
        "rel": "delete",
        "href": "/api/trees/{var}",
        "method": "DELETE"
      }
    }
  }
}
