{
  "theme": "DisplayBaseTheme",
  "class_name": "PersonPersonDisplay",
  "component_name": "person-person-display",
  "description": "Person message type",
  "source": "./specs/person/person.type.spec",
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
          "field": "name",
          "component": "furo-data-display",
          "flags": [
            "condensed",
            "double"
          ],
          "attrs": []
        },
        {
          "field": "first_name",
          "component": "furo-data-display",
          "flags": [
            "condensed",
            "double"
          ],
          "attrs": []
        },
        {
          "field": "phone_nr",
          "component": "furo-data-display",
          "flags": [
            "condensed",
            "double"
          ],
          "attrs": []
        },
        {
          "field": "skills",
          "component": "furo-data-display",
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