{
  "_writeprotection": false,
  "theme": "DisplayBaseTheme",
  "class_name": "ExperimentRecursiveDisplay",
  "component_name": "experiment-recursive-display",
  "description": "recursive type for testing",
  "autolabel": false,
  "source": "../furo-specs/specs/experiment/recursive.type.spec",
  "imports": [
    "@furo/data-input",
    "@furo/form",
    "../experiment/experiment-recursive-display"
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
          "field": "id",
          "component": "furo-data-display",
          "flags": [
            "condensed",
            "double",
            "noborder"
          ],
          "attrs": []
        },
        {
          "field": "display_name",
          "component": "furo-data-display",
          "flags": [
            "condensed",
            "double",
            "noborder"
          ],
          "attrs": []
        },
        {
          "field": "recursion",
          "component": "experiment-recursive-display",
          "flags": [
            "condensed",
            "double",
            "noborder"
          ],
          "attrs": []
        }
      ]
    }
  ]
}