{
  "theme": "PanelBaseTheme",
  "class_name": "taskTaskDisplayPanel",
  "component_name": "task-task-display-panel",
  "description": "The Get method takes zero or more parameters, and returns a TaskEntity which contains a Task",
  "source": "./specs/task/task.service.spec",
  "service_name": "TaskService",
  "response_type": "task.TaskEntity",
  "imports": [
    "../displays/task-task-display"
  ],
  "display": {
    "name": "task-task-display",
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