{
  "_writeprotection": false,
  "theme": "DisplayBaseTheme",
  "class_name": "ExperimentDefaultDisplay",
  "component_name": "experiment-default-display",
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
      "secondary_text": null,
      "flags": [
        "four"
      ],
      "attrs": [],
      "fields": [
        {
          "field": "description",
          "component": "furo-data-display",
          "flags": [
            "condensed",
            "double",
            "noborder"
          ],
          "attrs": []
        },
        {
          "field": "repstring",
          "component": "furo-data-repeat",
          "flags": [
            "condensed",
            "double",
            "noborder"
          ],
          "attrs": [
            {
              "name": "repeated-component",
              "val": "furo-data-display"
            }
          ]
        }
      ]
    }
  ]
}