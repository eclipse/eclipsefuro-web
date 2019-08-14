{
  "general": {
    "name": "ProjectMembers",
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
    "Unsubscribe": {
      "description": "Custom method to unsubscribe a member, complete PersonEntity is expected",
      "data": {
        "request": "PersonEntity",
        "response": "PersonCollection"
      },
      "query": {
      },
      "deeplink": {
        "rel": "list",
        "href": "/api/members/{prs}:unsubscribe",
        "method": "POST"
      }
    },
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
        "href": "/api/members",
        "method": "GET"
      }
    }
  }
}
