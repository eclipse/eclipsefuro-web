{
  "class_name": "ProjectServiceUpdatePanel",
  "component_name": "projectservice-update-panel",
  "description": "Updates a Project, partial updates are supported",
  "source": "./specs/project/project.service.spec",
  "imports": [
    "../forms/project-project-form",
    "../actions/project-project-update-action"
  ],
  "form": {
    "name": "project-project-form",
    "attrs": []
  },
  "action": {
    "name": "project-project-update-action",
    "listen_to": [
      "update"
    ],
    "attrs": []
  }
}