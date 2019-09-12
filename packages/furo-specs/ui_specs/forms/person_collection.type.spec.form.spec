{
  "theme": "FormBaseTheme",
  "class_name": "PersonPersonCollectionForm",
  "component_name": "person-personcollection-form",
  "description": "PersonCollection with repeated PersonEntity",
  "source": "specs/person/person_collection.type.spec",
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