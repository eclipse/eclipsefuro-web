{
  "_writeprotection": false,
  "theme": "FormBaseTheme",
  "class_name": "ExperimentRecursiveForm",
  "component_name": "experiment-recursive-form",
  "description": "recursive type for testing",
  "source": "specs/experiment/recursive.type.spec",
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
          "field": "id",
          "flags": [
            "condensed",
            "double"
          ],
          "attrs": []
        },
        {
          "field": "display_name",
          "flags": [
            "condensed",
            "double"
          ],
          "attrs": []
        },
        {
          "field": "recursion",
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