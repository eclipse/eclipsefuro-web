{
  "theme": "FormBaseTheme",
  "class_name": "ExperimentExperimentCollectionForm",
  "component_name": "experiment-experimentcollection-form",
  "description": "ExperimentCollection with repeated ExperimentEntity",
  "source": "specs/experiment/experiment_collection.type.spec",
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
          "field": "meta",
          "flags": [
            "condensed",
            "double"
          ],
          "attrs": []
        },
        {
          "field": "links",
          "flags": [
            "condensed",
            "double"
          ],
          "attrs": []
        },
        {
          "field": "entities",
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