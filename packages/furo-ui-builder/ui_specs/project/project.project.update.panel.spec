{
  "_writeprotection": false,
  "theme": "PanelBaseTheme",
  "class_name": "ProjectProjectUpdatePanel",
  "component_name": "project-project-update-panel",
  "description": "Updates a Project, partial updates are supported",
  "source": "./../furo-specs/specs/project/project.service.spec",
  "service_name": "ProjectService",
  "response_type": "project.ProjectEntity",
  "imports": [
    "./project-project-form",
    "./project-project-update-action"
  ],
  "form": {
    "name": "project-project-form",
    "flags": [
      "flex"
    ],
    "attrs": []
  },
  "action": {
    "name": "project-project-update-action",
    "listen_to": [
      "update"
    ],
    "flags": [],
    "attrs": []
  },
  "request_type": "project.Project"
}