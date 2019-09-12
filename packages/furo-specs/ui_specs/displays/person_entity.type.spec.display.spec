{
  "theme": "DisplayBaseTheme",
  "class_name": "PersonPersonEntityDisplay",
  "component_name": "person-personentity-display",
  "description": "PersonEntity with Person",
  "source": "specs/person/person_entity.type.spec",
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
          "field": "data",
          "component": "furo-data-display",
          "flags": [
            "condensed",
            "double",
            "noborder"
          ],
          "attrs": []
        },
        {
          "field": "links",
          "component": "furo-data-display",
          "flags": [
            "condensed",
            "double",
            "noborder"
          ],
          "attrs": []
        },
        {
          "field": "meta",
          "component": "furo-data-display",
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