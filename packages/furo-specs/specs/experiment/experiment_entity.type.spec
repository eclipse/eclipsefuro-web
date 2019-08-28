{
  "name": "experiment_entity",
  "type": "ExperimentEntity",
  "description": "ExperimentEntity with Experiment",
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
    "data": {
      "description": "contains a experiment.Experiment",
      "type": "experiment.Experiment",
      "__proto": {
        "number": 1
      }
    },
    "links": {
      "description": "Hateoas links",
      "type": "furo.Link",
      "meta": {"repeated": true},
      "__proto": {
        "number": 2
      }
    },
    "meta": {
      "description": "Meta for the response",
      "type": "furo.Meta",
      "__proto": {
        "number": 3
      }
    }
  }
}
