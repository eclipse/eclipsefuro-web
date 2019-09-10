{
  "class_name": "PersonPersonForm",
  "component_name": "person-person-form",
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
      "attrs": [
        "four"
      ],
      "fields": [
        {
          "field": "name",
          "attrs": [
            "condensed",
            "double"
          ]
        },
        {
          "field": "first_name",
          "attrs": [
            "condensed",
            "double"
          ]
        },
        {
          "field": "phone_nr",
          "attrs": [
            "condensed",
            "double"
          ]
        },
        {
          "field": "skills",
          "attrs": [
            "condensed",
            "double"
          ]
        }
      ]
    }
  ]
}