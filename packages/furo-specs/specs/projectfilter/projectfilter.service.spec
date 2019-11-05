{
  "name": "ProjectfilterService",
  "description": "service specs for the projectfilter api",
  "version": "0.0.1",
  "lifecycle": {
    "deprecated": false,
    "info": "This version is still valid"
  },
  "__proto": {
    "package": "projectfilterservice",
    "imports": [
      "projectfilter/projectfilter.proto",
      "google/protobuf/empty.proto"
    ],
    "targetfile": "projectfilterservice.proto"
  },
  "services": {
    "Get": {
      "description": "The Get method takes zero or more parameters, and returns a ProjectfilterEntity which contains a Projectfilter",
      "rpc_name": "GetProjectfilter",
      "data": {
        "request": null,
        "response": "projectfilter.ProjectfilterEntity"
      },
      "query": {
      },
      "deeplink": {
        "rel": "self",
        "href": "/mockdata/projects/filter/get.json",
        "method": "GET"
      }
    }
  }
}
