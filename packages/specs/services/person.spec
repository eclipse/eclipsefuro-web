{
  "general": {
    "name": "persons",
    "description": "person service",
    "version": "1.0.0",
    "lifecycle": {
      "deprecated": false,
      "info": "This version is still valid"
    },
    "__proto": {
      "package": "furo.demo",
      "imports": ["person.proto"]
    }
  },
  "services": {
    "List": {
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
