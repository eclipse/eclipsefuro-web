{
  "class_name": "PersonPersonForm",
  "component_name": "person-person-form",
  "description": "Form Description",
  "imports": [
    "@furo/data-input",
    "@furo/form"
  ],
  "fieldgroups": [
    {
      "description": "",
      "title": "Fieldgroup title",
      "secondary_text": "Secondary fieldgroup text",
      "component": "furo-form-layouter",
      "attrs": [
        "four"
      ],
      "fields": [
        {
          "field": "name",
          "size": "double",
          "component": "furo-data-text-input",
          "attrs": [
            "condensed",
            "double"
          ],
          "field_spec": {}
        },
        {
          "field": "first_name",
          "size": "double",
          "component": "furo-data-text-input",
          "attrs": [
            "condensed",
            "double"
          ],
          "field_spec": {}
        }
      ]
    },
    {
      "description": "",
      "title": null,
      "secondary_text": null,
      "component": "furo-form-layouter",
      "attrs": [
        "four"
      ],
      "fields": [
        {
          "field": "phone_nr",
          "size": "double",
          "component": "furo-data-text-input",
          "attrs": [
            "condensed",
            "double"
          ],
          "field_spec": {}
        },
        {
          "field": "skills",
          "size": "double",
          "component": "furo-data-text-input-repeated",
          "attrs": [
            "condensed",
            "double"
          ],
          "field_spec": {}
        }
      ]
    }
  ]
}