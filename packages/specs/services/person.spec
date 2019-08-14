{
  "general": {
    "name": "Person",
    "description": "person service",
    "version": "1.0.0",
    "lifecycle": {
      "deprecated": false,
      "info": "This version is still valid"
    },
    "__proto": {
      "package": "furo.demo",
      "imports": [
        "person.proto",
        "furo/types/link.proto",
        "furo/types/meta.proto"
      ]
    }
  },
  "services": {
    "List": {
      "description": "Get a collection with PersonEntities",
      "data": {
        "request": null,
        "response": "PersonCollection"
      },
      "query": {
        "q":{
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
    }
  }
}
