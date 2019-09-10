{
  "class_name": "projectProjectUpdatePanel",
  "component_name": "project-project-update-panel",
  "description": "Updates a Project, partial updates are supported",
  "source": "./specs/project/project.service.spec",
  "service_name": "ProjectService",
  "response_type": "project.ProjectEntity",
  "imports": [
    "../forms/project-project-form",
    "../actions/project-project-update-action"
  ],
  "form": {
    "name": "project-project-form",
    "attrs": [
      "flex"
    ]
  },
  "action": {
    "name": "project-project-update-action",
    "listen_to": [
      "update"
    ],
    "attrs": []
  },
  "request_type": "project.Project"
}