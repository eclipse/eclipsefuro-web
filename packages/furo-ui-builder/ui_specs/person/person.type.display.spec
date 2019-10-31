{
  "_writeprotection": false,
  "theme": "DisplayBaseTheme",
  "class_name": "PersonPersonDisplay",
  "component_name": "person-person-display",
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
            "double",
            "noborder"
          ],
          "attrs": []
        },
        {
          "field": "first_name",
          "component": "furo-data-display",
          "flags": [
            "condensed",
            "double",
            "noborder"
          ],
          "attrs": []
        },
        {
          "field": "phone_nr",
          "component": "furo-data-display",
          "flags": [
            "condensed",
            "double",
            "noborder"
          ],
          "attrs": []
        },
        {
          "field": "skills",
          "component": "furo-data-repeat",
          "flags": [
            "condensed",
            "double",
            "noborder"
          ],
          "attrs": [
            {
              "name": "repeated-component",
              "val": "furo-data-display"
            }
          ]
        }
      ]
    }
  ]
}