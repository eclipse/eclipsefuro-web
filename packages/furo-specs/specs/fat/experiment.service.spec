{
  "name": "UniversaltestService",
  "description": "service specs for the universaltest api",
  "version": "0.0.1",
  "lifecycle": {
    "deprecated": false,
    "info": "This version is still valid"
  },
  "__proto": {
    "package": "UniversaltestService",
    "imports": [
      "universaltest/universaltest.proto",
      "google/protobuf/empty.proto"
    ],
    "targetfile": "universaltestservice.proto",
    "options": {
      "go_package": "/UniversaltestService"
    }
  },
  "services": {
    "Create": {
      "description": "Creates a new universaltest",
      "rpc_name": "Createuniversaltest",
      "data": {
        "request": "universaltest.Universaltest",
        "response": "universaltest.UniversaltestEntity"
      },
      "query": {
      },
      "deeplink": {
        "rel": "create",
        "href": "/mockdata/universaltests",
        "method": "POST"
      }
    }

  }
}
