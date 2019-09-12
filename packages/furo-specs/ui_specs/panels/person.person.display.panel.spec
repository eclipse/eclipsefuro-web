{
  "theme": "PanelBaseTheme",
  "class_name": "personPersonDisplayPanel",
  "component_name": "person-person-display-panel",
  "description": "The Get method takes zero or more parameters, and returns a PersonEntity which contains a Person",
  "source": "./specs/person/person.service.spec",
  "service_name": "PersonService",
  "response_type": "person.PersonEntity",
  "imports": [
    "../displays/person-person-display"
  ],
  "display": {
    "name": "person-person-display",
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