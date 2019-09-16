{
  "_writeprotection": false,
  "theme": "PanelBaseTheme",
  "class_name": "PersonPersonUpdatePanel",
  "component_name": "person-person-update-panel",
  "description": "Updates a Person, partial updates are supported",
  "source": "./specs/person/person.service.spec",
  "service_name": "PersonService",
  "response_type": "person.PersonEntity",
  "imports": [
    "./person-person-form",
    "./person-person-update-action"
  ],
  "form": {
    "name": "person-person-form",
    "flags": [
      "flex"
    ],
    "attrs": []
  },
  "action": {
    "name": "person-person-update-action",
    "listen_to": [
      "update"
    ],
    "flags": [],
    "attrs": []
  },
  "request_type": "person.Person"
}