{
  "class_name": "PersonServiceUpdatePanel",
  "component_name": "personservice-update-panel",
  "description": "Updates a Person, partial updates are supported",
  "source": "./specs/person/person.service.spec",
  "imports": [
    "../forms/person-person-form",
    "../actions/person-person-update-action"
  ],
  "form": {
    "name": "person-person-form",
    "attrs": []
  },
  "action": {
    "name": "person-person-update-action",
    "listen_to": [
      "update"
    ],
    "attrs": []
  }
}