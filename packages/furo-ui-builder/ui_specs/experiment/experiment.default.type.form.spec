{
  "_writeprotection": false,
  "theme": "FormBaseTheme",
  "class_name": "ExperimentDefaultForm",
  "component_name": "experiment-default-form",
  "description": "Test the default value",
  "autolabel": false,
  "source": "../furo-specs/specs/experiment/experiment.default.type.spec",
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
          "field": "description",
          "component": "furo-data-text-input",
          "flags": [
            "condensed",
            "double"
          ],
          "attrs": []
        },
        {
          "field": "repstring",
          "component": "furo-data-repeat",
          "flags": [
            "condensed",
            "double"
          ],
          "attrs": [
            {
              "name": "repeated-component",
              "val": "furo-data-text-input"
            }
          ]
        }
      ]
    }
  ]
}