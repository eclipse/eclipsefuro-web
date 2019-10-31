{
  "_writeprotection": false,
  "theme": "FormBaseTheme",
  "class_name": "PersonPersonForm",
  "component_name": "person-person-form",
  "description": "Person message type",
  "autolabel": false,
  "source": "../furo-specs/specs/person/person.type.spec",
  "imports": [
    "@furo/data-input",
    "@furo/form"
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
          "field": "name",
          "component": "furo-data-text-input",
          "flags": [
            "condensed",
            "double"
          ],
          "attrs": []
        },
        {
          "field": "first_name",
          "component": "furo-data-text-input",
          "flags": [
            "condensed",
            "double"
          ],
          "attrs": []
        },
        {
          "field": "phone_nr",
          "component": "furo-data-text-input",
          "flags": [
            "condensed",
            "double"
          ],
          "attrs": []
        },
        {
          "field": "skills",
          "component": "furo-data-repeat",
          "flags": [
            "condensed",
            "double"
          ],
          "attrs": [
            {
              "name": "repeated-component",
              "val": "furo-data-text-input"
            }
          ]
        }
      ]
    }
  ]
}