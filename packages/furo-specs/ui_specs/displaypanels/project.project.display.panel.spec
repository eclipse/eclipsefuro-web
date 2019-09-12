{
  "theme": "PanelBaseTheme",
  "class_name": "projectProjectDisplayPanel",
  "component_name": "project-project-display-panel",
  "description": "The Get method takes zero or more parameters, and returns a ProjectEntity which contains a Project",
  "source": "./specs/project/project.service.spec",
  "service_name": "ProjectService",
  "response_type": "project.ProjectEntity",
  "imports": [
    "../displays/project-project-display"
  ],
  "display": {
    "name": "project-project-display",
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