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
      "tree_collection.proto",
      "protobuf/empty.proto"
    ]
  },
  "services": {
    "List": {
      "description": "The List method takes zero or more parameters as input, and returns a TreeCollection of TreeEntity that match the input parameters.",
      "data": {
        "request": null,
        "response": "tree.TreeCollection"
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
        "description":"Describe_the_query_params_if_you_have",
        "rel": "list",
        "href": "/api/trees",
        "method": "GET"
      }
    },
    "Create": {
      "description": "Creates a new Tree",
      "data": {
        "request": "tree.Tree",
        "response": "tree.TreeEntity"
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
        "request": null,
        "response": "tree.TreeEntity"
      },
      "query": {
      },
      "deeplink": {
        "rel": "self",
        "href": "/api/trees/{tre}",
        "method": "GET"
      }
    },
    "Update": {
      "description": "Updates a Tree, partial updates are supported",
      "data": {
        "request": "tree.Tree",
        "response": "tree.TreeEntity"
      },
      "query": {},
      "deeplink": {
        "rel": "update",
        "href": "/api/trees/{tre}",
        "method": "PATCH"
      }
    },
    "Delete": {
      "description": "Delete a Tree",
      "data": {
        "request": "protobuf.Empty",
        "response": "protobuf.Empty"
      },
      "query": {},
      "deeplink": {
        "rel": "delete",
        "href": "/api/trees/{tre}",
        "method": "DELETE"
      }
    }
  }
}
