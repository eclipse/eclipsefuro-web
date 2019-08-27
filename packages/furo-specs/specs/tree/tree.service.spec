{
  "name": "TreeService",
  "description": "service specs for the tree api",
  "version": "0.0.1",
  "lifecycle": {
    "deprecated": false,
    "info": "This version is still valid"
  },
  "__proto": {
    "package": "treeservice",
    "imports": [
      "tree/tree.proto",
      "google/protobuf/empty.proto"
    ],
    "targetfile": "service.proto"
  },
  "services": {
    "List": {
      "description": "The List method takes zero or more parameters as input, and returns a TreeCollection of TreeEntity that match the input parameters.",
      "rpc_name": "ListTrees",
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
        "href": "/mockdata/trees",
        "method": "GET"
      }
    },
    "Create": {
      "description": "Creates a new Tree",
      "rpc_name": "CreateTree",
      "data": {
        "request": "tree.Tree",
        "response": "tree.TreeEntity"
      },
      "query": {
      },
      "deeplink": {
        "rel": "create",
        "href": "/mockdata/trees",
        "method": "POST"
      }
    },
    "Get": {
      "description": "The Get method takes zero or more parameters, and returns a TreeEntity which contains a Tree",
      "rpc_name": "GetTree",
      "data": {
        "request": null,
        "response": "tree.TreeEntity"
      },
      "query": {
      },
      "deeplink": {
        "rel": "self",
        "href": "/mockdata/trees/{tre}/get.json",
        "method": "GET"
      }
    },
    "Update": {
      "description": "Updates a Tree, partial updates are supported",
      "rpc_name": "UpdateTree",
      "data": {
        "request": "tree.Tree",
        "response": "tree.TreeEntity"
      },
      "query": {},
      "deeplink": {
        "rel": "update",
        "href": "/mockdata/trees/{tre}",
        "method": "PATCH"
      }
    },
    "Delete": {
      "description": "Delete a Tree",
      "rpc_name": "DeleteTree",
      "data": {
        "request": "google.protobuf.Empty",
        "response": "google.protobuf.Empty"
      },
      "query": {},
      "deeplink": {
        "rel": "delete",
        "href": "/mockdata/trees/{tre}",
        "method": "DELETE"
      }
    }
  }
}
