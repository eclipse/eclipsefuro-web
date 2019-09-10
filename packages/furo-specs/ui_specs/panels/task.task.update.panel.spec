{
  "class_name": "taskTaskUpdatePanel",
  "component_name": "task-task-update-panel",
  "description": "Updates a Task, partial updates are not supported",
  "source": "./specs/task/task.service.spec",
  "service_name": "TaskService",
  "response_type": "task.TaskEntity",
  "imports": [
    "../forms/task-task-form",
    "../actions/task-task-update-action"
  ],
  "form": {
    "name": "task-task-form",
    "attrs": [
      "flex"
    ]
  },
  "action": {
    "name": "task-task-update-action",
    "listen_to": [
      "update"
    ],
    "attrs": []
  },
  "request_type": "task.Task"
}