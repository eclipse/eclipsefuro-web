{
  "theme": "ActionBaseTheme",
  "class_name": "TaskTaskUpdateAction",
  "component_name": "task-task-update-action",
  "description": "service specs for the task api",
  "source": "./ui_specs/task/task.task.update.action.spec",
  "service_name": "TaskService",
  "response_type": "task.TaskEntity",
  "imports": [],
  "items": [
    {
      "label": "save",
      "rel": "update",
      "icon": null,
      "component": "furo-button",
      "onclick": "-^update-req",
      "flags": [
        "primary",
        "unelevated"
      ],
      "attrs": []
    },
    {
      "label": "reload",
      "rel": "self",
      "icon": null,
      "component": "furo-button",
      "onclick": "-^self-req",
      "flags": [
        "outline"
      ],
      "attrs": []
    },
    {
      "component": "furo-empty-spacer"
    },
    {
      "label": "cancel",
      "rel": "reset",
      "icon": null,
      "component": "furo-button",
      "onclick": "-^reset-req",
      "flags": [
        "outline"
      ],
      "attrs": []
    },
    {
      "label": "delete",
      "rel": "delete",
      "icon": "delete",
      "component": "furo-button",
      "onclick": "-^delete-req",
      "flags": [
        "unelevated",
        "danger"
      ],
      "attrs": []
    }
  ],
  "request_type": "task.Task"
}