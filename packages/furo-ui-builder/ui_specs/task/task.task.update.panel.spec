{
  "_writeprotection": false,
  "theme": "PanelBaseTheme",
  "class_name": "TaskTaskUpdatePanel",
  "component_name": "task-task-update-panel",
  "description": "Updates a Task, partial updates are not supported",
  "source": "./../furo-specs/specs/task/task.service.spec",
  "service_name": "TaskService",
  "response_type": "task.TaskEntity",
  "imports": [
    "./task-task-form",
    "./task-task-update-action"
  ],
  "form": {
    "name": "task-task-form",
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
  "request_type": "task.Task"
}