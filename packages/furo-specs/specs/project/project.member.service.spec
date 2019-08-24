{
  "name": "ProjectMembersService",
  "description": "The members of a project",
  "version": "1.0.0",
  "lifecycle": {
    "deprecated": false,
    "info": "This version is still valid"
  },
  "__proto": {
    "package": "projectmember",
    "imports": [
      "person/person_entity.proto",
      "person/person_collection.proto",
      "furo/meta.proto",
      "furo/link.proto",
      "google/protobuf/empty.proto"
    ]
  },
  "services": {
    "Unsubscribe": {
      "description": "Custom method to unsubscribe a member, complete PersonEntity is expected",
      "data": {
        "request": "person.PersonEntity",
        "response": "person.PersonCollection"
      },
      "query": {
      },
      "deeplink": {
        "description": "{prs} stands for person",
        "rel": "list",
        "href": "/api/projects/{prj}/members/{prs}:unsubscribe",
        "method": "POST"
      }
    },
    "List": {
      "description": "Get a collection with PersonEntities",
      "data": {
        "request": null,
        "response": "person.PersonCollection"
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
        "href": "/api/members",
        "method": "GET"
      }
    }
  }
}
