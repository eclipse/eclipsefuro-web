{
  "general": {
    "name": "members",
    "description": "The members of a project",
    "version": "1.0.0",
    "lifecycle": {
      "deprecated": false,
      "info": "This version is still valid"
    },
    "__proto": {
      "imports": []
    }
  },
  "services": {
    "List": {
      "data": {
        "request": null,
        "response": "people"
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
        "href": "/api/members",
        "method": "GET"
      }
    }
  }
}
