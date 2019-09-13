{
  "theme": "PanelBaseTheme",
  "class_name": "ExperimentExperimentUpdatePanel",
  "component_name": "experiment-experiment-update-panel",
  "description": "Updates a Experiment, partial updates are supported",
  "source": "./specs/experiment/experiment.service.spec",
  "service_name": "ExperimentService",
  "response_type": "experiment.ExperimentEntity",
  "imports": [
    "./experiment-experiment-form",
    "./experiment-experiment-update-action"
  ],
  "form": {
    "name": "experiment-experiment-form",
    "flags": [
      "flex"
    ],
    "attrs": []
  },
  "action": {
    "name": "experiment-experiment-update-action",
    "listen_to": [
      "update"
    ],
    "flags": [],
    "attrs": []
  },
  "request_type": "experiment.Experiment"
}