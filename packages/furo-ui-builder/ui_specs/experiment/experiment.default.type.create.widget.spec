{
  "_writeprotection": false,
  "theme": "WidgetBaseTheme",
  "class_name": "ExperimentDefaultCreateWidget",
  "component_name": "experiment-default-create-widget",
  "description": "Test the default value",
  "source": "../furo-specs/specs/experiment/experiment.default.type.spec",
  "imports": [
    "@furo/data-input",
    "@furo/layout",
    "@furo/form"
  ],
  "widget": {
    "description": "",
    "component": "furo-card",
    "title": null,
    "secondary_text": null,
    "flags": [],
    "attrs": []
  },
  "fieldgroups": [
    {
      "description": "",
      "component": "furo-form-layouter",
      "title": null,
      "secondary_text": null,
      "flags": [],
      "attrs": [],
      "fields": []
    }
  ],
  "action_items": [
    {
      "label": "create",
      "rel": "create",
      "icon": null,
      "component": "furo-button",
      "onclick": "-^create-req",
      "flags": [
        "primary"
      ],
      "attrs": []
    }
  ]
}