{
  "name": "experiment_collection",
  "type": "ExperimentCollection",
  "description": "ExperimentCollection with repeated ExperimentEntity",
  "__proto": {
    "package": "experiment",
    "options": {},
    "imports": [
     "furo/meta.proto",
     "furo/link.proto"
     ],
    "targetfile": "experiment.proto"
  },
  "fields": {
    "meta": {
      "description": "Meta for the response",
      "type": "furo.Meta",
      "__proto": {
        "number": 2
      }
    },
    "links": {
      "description": "Hateoas links",
      "type": "furo.Link",
      "meta": {
        "repeated": true
      },
      "__proto": {
        "number": 3
      }
    },
    "entities": {
      "description": "Contains a experiment.ExperimentEntity repeated",
      "type": "experiment.ExperimentEntity",
      "meta": {
        "repeated": true
      },
      "__proto": {
        "number": 4
      }
    }
  }
}
