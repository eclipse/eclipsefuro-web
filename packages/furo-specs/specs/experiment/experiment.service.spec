{
  "name": "ExperimentService",
  "description": "service specs for the experiment api",
  "version": "0.0.1",
  "lifecycle": {
    "deprecated": false,
    "info": "This version is still valid"
  },
  "__proto": {
    "package": "experimentservice",
    "imports": [
      "experiment/experiment.proto",
      "google/protobuf/empty.proto"
    ],
    "targetfile": "service.proto"
  },
  "services": {
    "List": {
      "description": "The List method takes zero or more parameters as input, and returns a ExperimentCollection of ExperimentEntity that match the input parameters.",
      "rpc_name": "ListExperiments",
      "data": {
        "request": null,
        "response": "experiment.ExperimentCollection"
      },
      "query": {
        "q": {
          "description": "Query term to search a experiment",
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
        "href": "/mockdata/experiments",
        "method": "GET"
      }
    },
    "Create": {
      "description": "Creates a new Experiment",
      "rpc_name": "CreateExperiment",
      "data": {
        "request": "experiment.Experiment",
        "response": "experiment.ExperimentEntity"
      },
      "query": {
      },
      "deeplink": {
        "rel": "create",
        "href": "/mockdata/experiments",
        "method": "POST"
      }
    },
    "Get": {
      "description": "The Get method takes zero or more parameters, and returns a ExperimentEntity which contains a Experiment",
      "rpc_name": "GetExperiment",
      "data": {
        "request": null,
        "response": "experiment.ExperimentEntity"
      },
      "query": {
      },
      "deeplink": {
        "rel": "self",
        "href": "/mockdata/experiments/{exp}/get.json",
        "method": "GET"
      }
    },
    "Update": {
      "description": "Updates a Experiment, partial updates are supported",
      "rpc_name": "UpdateExperiment",
      "data": {
        "request": "experiment.Experiment",
        "response": "experiment.ExperimentEntity"
      },
      "query": {},
      "deeplink": {
        "rel": "update",
        "href": "/mockdata/experiments/{exp}",
        "method": "PATCH"
      }
    },
    "Delete": {
      "description": "Delete a Experiment",
      "rpc_name": "DeleteExperiment",
      "data": {
        "request": "google.protobuf.Empty",
        "response": "google.protobuf.Empty"
      },
      "query": {},
      "deeplink": {
        "rel": "delete",
        "href": "/mockdata/experiments/{exp}",
        "method": "DELETE"
      }
    },
    "Release": {
      "description": "Releases experiment",
      "rpc_name": "ReleaseExperiment",
      "data": {
        "request": "experiment.ExperimentEntity",
        "response": "google.protobuf.Empty"
      },
      "query": {},
      "deeplink": {
        "rel": "release",
        "href": "/mockdata/experiments/1:release",
        "method": "POST"
      }
    }
  }
}
