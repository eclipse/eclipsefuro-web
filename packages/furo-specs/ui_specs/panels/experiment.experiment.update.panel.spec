{
  "class_name": "experimentExperimentUpdatePanel",
  "component_name": "experiment-experiment-update-panel",
  "description": "Updates a Experiment, partial updates are supported",
  "source": "./specs/experiment/experiment.service.spec",
  "service_name": "ExperimentService",
  "response_type": "experiment.ExperimentEntity",
  "imports": [
    "../forms/experiment-experiment-form",
    "../actions/experiment-experiment-update-action"
  ],
  "form": {
    "name": "experiment-experiment-form",
    "attrs": [
      "flex"
    ]
  },
  "action": {
    "name": "experiment-experiment-update-action",
    "listen_to": [
      "update"
    ],
    "attrs": []
  },
  "request_type": "experiment.Experiment"
}