{
  "_writeprotection": false,
  "theme": "FormBaseTheme",
  "class_name": "ProjectfilterProjectfilterForm",
  "component_name": "projectfilter-projectfilter-form",
  "description": "Options for possible filter values",
  "autolabel": false,
  "source": "../furo-specs/specs/projectfilter/projectfilter.type.spec",
  "imports": [
    "@furo/data-input",
    "@furo/form",
    "../person/person-person-reference-search"
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
          "field": "description",
          "component": "furo-data-text-input",
          "flags": [
            "condensed",
            "double"
          ],
          "attrs": []
        },
        {
          "field": "start",
          "component": "furo-data-date-input",
          "flags": [
            "condensed",
            "double"
          ],
          "attrs": []
        },
        {
          "field": "end",
          "component": "furo-data-date-input",
          "flags": [
            "condensed",
            "double"
          ],
          "attrs": []
        },
        {
          "field": "members",
          "component": "person-person-reference-search",
          "flags": [
            "condensed",
            "double"
          ],
          "attrs": []
        },
        {
          "field": "cost_limit",
          "component": "furo-data-money-input",
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