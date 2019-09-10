{
  "class_name": "ExperimentServiceUpdatePanel",
  "component_name": "experimentservice-update-panel",
  "description": "Updates a Experiment, partial updates are supported",
  "source": "./specs/experiment/experiment.service.spec",
  "imports": [
    "../forms/experiment-experiment-form",
    "../actions/experiment-experiment-update-action"
  ],
  "form": {
    "name": "experiment-experiment-form",
    "attrs": []
  },
  "action": {
    "name": "experiment-experiment-update-action",
    "listen_to": [
      "update"
    ],
    "attrs": []
  }
}