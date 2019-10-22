{
  "name": "PersonService",
  "description": "service specs for the person api",
  "version": "0.0.1",
  "lifecycle": {
    "deprecated": false,
    "info": "This version is still valid"
  },
  "__proto": {
    "package": "personservice",
    "imports": [
      "person/person.proto",
      "google/protobuf/empty.proto"
    ],
    "targetfile": "service.proto"
  },
  "services": {
    "List": {
      "description": "The List method takes zero or more parameters as input, and returns a PersonCollection of PersonEntity that match the input parameters.",
      "rpc_name": "ListPersons",
      "data": {
        "request": null,
        "response": "person.PersonCollection"
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
        "description":"Describe_the_query_params_if_you_have",
        "rel": "list",
        "href": "/mockdata/persons/list.json",
        "method": "GET"
      }
    },
    "Create": {
      "description": "Creates a new Person",
      "rpc_name": "CreatePerson",
      "data": {
        "request": "person.Person",
        "response": "person.PersonEntity"
      },
      "query": {
      },
      "deeplink": {
        "rel": "create",
        "href": "/mockdata/persons/create.json",
        "method": "GET"
      }
    },
    "Get": {
      "description": "The Get method takes zero or more parameters, and returns a PersonEntity which contains a Person",
      "rpc_name": "GetPerson",
      "data": {
        "request": null,
        "response": "person.PersonEntity"
      },
      "query": {
      },
      "deeplink": {
        "rel": "self",
        "href": "/mockdata/persons/{prs}/get.json",
        "method": "GET"
      }
    },
    "Update": {
      "description": "Updates a Person, partial updates are supported",
      "rpc_name": "UpdatePerson",
      "data": {
        "request": "person.Person",
        "response": "person.PersonEntity"
      },
      "query": {},
      "deeplink": {
        "rel": "update",
        "href": "/mockdata/persons/{prs}/update.json",
        "method": "PATCH"
      }
    },
    "Delete": {
      "description": "Delete a Person",
      "rpc_name": "DeletePerson",
      "data": {
        "request": "google.protobuf.Empty",
        "response": "google.protobuf.Empty"
      },
      "query": {},
      "deeplink": {
        "rel": "delete",
        "href": "/mockdata/persons/{prs}/delete.json",
        "method": "GET"
      }
    }
  }
}
