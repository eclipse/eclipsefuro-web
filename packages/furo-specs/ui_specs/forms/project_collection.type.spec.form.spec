{
  "theme": "FormBaseTheme",
  "class_name": "ProjectProjectCollectionForm",
  "component_name": "project-projectcollection-form",
  "description": "ProjectCollection with repeated ProjectEntity",
  "source": "specs/project/project_collection.type.spec",
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