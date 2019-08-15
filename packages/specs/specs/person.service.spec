{
  "name": "person_service",
  "description": "service specs for the person api",
  "version": "0.0.1",
  "lifecycle": {
    "deprecated": false,
    "info": "This version is still valid"
  },
  "__proto": {
    "package": "person",
    "imports": [
      "person.proto",
      "person_entity.proto",
      "person_collection.proto"
    ]
  },
  "services": {
    "List": {
      "description": "The List method takes zero or more parameters as input, and returns a PersonCollection of PersonEntity that match the input parameters.",
      "data": {
        "request": null,
        "response": "PersonCollection"
      },
      "query": {
        "q": {
          "description": "Query term to search a person",
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
      "description": "Creates a new Person",
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
      "description": "The Get method takes zero or more parameters, and returns a PersonEntity which contains a Person",
      "data": {
        "request": "google.protobuf.Empty",
        "response": "PersonEntity"
      },
      "query": {
      },
      "deeplink": {
        "rel": "self",
        "href": "/api/persons/{REPLACE_THIS_WITH_YOUR_QUERY_PARAM}",
        "method": "GET"
      }
    },
    "Update": {
      "description": "Updates a Person, partial updates are supported",
      "data": {
        "request": "Person",
        "response": "PersonEntity"
      },
      "query": {},
      "deeplink": {
        "rel": "update",
        "href": "/api/persons/{REPLACE_THIS_WITH_YOUR_QUERY_PARAM}",
        "method": "PATCH"
      }
    },
    "Delete": {
      "description": "Delete a Person",
      "data": {
        "request": "google.protobuf.Empty",
        "response": "google.protobuf.Empty"
      },
      "query": {},
      "deeplink": {
        "rel": "delete",
        "href": "/api/persons/{REPLACE_THIS_WITH_YOUR_QUERY_PARAM}",
        "method": "DELETE"
      }
    }
  }
}
