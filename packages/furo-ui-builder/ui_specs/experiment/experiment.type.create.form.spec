{
  "_writeprotection": false,
  "theme": "FormBaseTheme",
  "class_name": "ExperimentExperimentCreateForm",
  "component_name": "experiment-experiment-create-form",
  "description": "experiment spec for testing",
  "autolabel": false,
  "source": "../furo-specs/specs/experiment/experiment.type.spec",
  "imports": [
    "@furo/data-input",
    "@furo/form"
  ],
  "fieldgroups": [
    {
      "description": "",
      "component": "furo-form-layouter",
      "title": null,
      "caption": null,
      "secondary_text": null,
      "flags": [
        "four"
      ],
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
  ]
}