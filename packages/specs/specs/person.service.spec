{
  "name": "person_service",
  "description": "person service",
  "version": "1.0.0",
  "lifecycle": {
    "deprecated": false,
    "info": "This version is still valid"
  },
  "__proto": {
    "package": "person",
    "imports": [
      "person.proto",
      "person_entity.proto",
      "person_collection.proto",
      "furo/type/link.proto",
      "furo/type/meta.proto"
    ]
  },
  "services": {
    "List": {
      "description": "Get a collection with PersonEntities",
      "data": {
        "request": null,
        "response": "PersonCollection"
      },
      "query": {
        "q": {
          "description": "Query term to search a member",
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
        "href": "/api/persons",
        "method": "GET"
      }
    },
    "Create": {
      "description": "Creates a person",
      "data": {
        "request": "Person",
        "response": "PersonEntity"
      },
      "query": {
      },
      "deeplink": {
        "rel": "create",
        "href": "/api/persons",
        "method": "POST"
      }
    },
    "Get": {
      "description": "Get a PersonEntity",
      "data": {
        "request": null,
        "response": "PersonEntity"
      },
      "query": {
      },
      "deeplink": {
        "rel": "self",
        "href": "/api/persons/{prs}",
        "method": "GET"
      }
    },
    "Update": {
      "description": "Delete a Person",
      "data": {
        "request": null,
        "response": "PersonEntity"
      },
      "query": {
      },
      "deeplink": {
        "rel": "update",
        "href": "/api/persons/{prs}",
        "method": "PATCH"
      }
    },
    "Delete": {
      "description": "Delete a Person",
      "data": {
        "request": null,
        "response": null
      },
      "query": {
      },
      "deeplink": {
        "rel": "delete",
        "href": "/api/persons/{prs}",
        "method": "DELETE"
      }
    }
  }
}
