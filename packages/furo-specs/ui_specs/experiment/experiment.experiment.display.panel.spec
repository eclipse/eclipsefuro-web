{
  "_writeprotection": false,
  "theme": "PanelBaseTheme",
  "class_name": "ExperimentExperimentDisplayPanel",
  "component_name": "experiment-experiment-display-panel",
  "description": "The Get method takes zero or more parameters, and returns a ExperimentEntity which contains a Experiment",
  "source": "./specs/experiment/experiment.service.spec",
  "service_name": "ExperimentService",
  "response_type": "experiment.ExperimentEntity",
  "imports": [
    "./experiment-experiment-display"
  ],
  "display": {
    "name": "experiment-experiment-display",
    "flags": [
      "flex"
    ],
    "attrs": []
  },
  "action": {
    "name": "task-task-update-action",
    "listen_to": [
      "update"
    ],
    "flags": [],
    "attrs": []
  },
  "request_type": null
}