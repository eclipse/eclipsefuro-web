{
  "_writeprotection": false,
  "theme": "WidgetBaseTheme",
  "class_name": "ExperimentExperimentCreateWidget",
  "component_name": "experiment-experiment-create-widget",
  "description": "experiment spec for testing",
  "source": "../furo-specs/specs/experiment/experiment.type.spec",
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
      "fields": [
        {
          "field": "furo_data_text_input",
          "component": "furo-data-text-input",
          "flags": [
            "condensed",
            "double"
          ],
          "attrs": []
        },
        {
          "field": "furo_data_money_input",
          "component": "furo-data-money-input",
          "flags": [
            "condensed",
            "double"
          ],
          "attrs": []
        }
      ]
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