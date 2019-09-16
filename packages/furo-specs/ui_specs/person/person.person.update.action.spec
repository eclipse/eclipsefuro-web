{
  "_writeprotection": false,
  "theme": "ActionBaseTheme",
  "class_name": "PersonPersonUpdateAction",
  "component_name": "person-person-update-action",
  "description": "service specs for the person api",
  "source": "./ui_specs/person/person.person.update.action.spec",
  "service_name": "PersonService",
  "response_type": "person.PersonEntity",
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
  "request_type": "person.Person"
}