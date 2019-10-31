{
  "_writeprotection": false,
  "theme": "FormBaseTheme",
  "class_name": "ExperimentRecursiveForm",
  "component_name": "experiment-recursive-form",
  "description": "recursive type for testing",
  "autolabel": false,
  "source": "../furo-specs/specs/experiment/recursive.type.spec",
  "imports": [
    "@furo/data-input",
    "@furo/form",
    "../experiment/experiment-recursive-form"
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
          "field": "id",
          "component": "furo-data-text-input",
          "flags": [
            "condensed",
            "double"
          ],
          "attrs": []
        },
        {
          "field": "display_name",
          "component": "furo-data-text-input",
          "flags": [
            "condensed",
            "double"
          ],
          "attrs": []
        },
        {
          "field": "recursion",
          "component": "experiment-recursive-form",
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