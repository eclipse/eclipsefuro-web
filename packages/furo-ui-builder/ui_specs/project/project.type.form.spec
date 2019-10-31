{
  "_writeprotection": false,
  "theme": "FormBaseTheme",
  "class_name": "ProjectProjectForm",
  "component_name": "project-project-form",
  "description": "Project description",
  "autolabel": false,
  "source": "../furo-specs/specs/project/project.type.spec",
  "imports": [
    "@furo/data-input",
    "@furo/form",
    "../person/person-person-form"
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
          "field": "description",
          "component": "furo-data-text-input",
          "flags": [
            "condensed",
            "double"
          ],
          "attrs": []
        },
        {
          "field": "members",
          "component": "furo-data-repeat",
          "flags": [
            "condensed",
            "double"
          ],
          "attrs": [
            {
              "name": "repeated-component",
              "val": "person-person-form"
            }
          ]
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