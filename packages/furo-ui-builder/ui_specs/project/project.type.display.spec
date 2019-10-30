{
  "_writeprotection": false,
  "theme": "DisplayBaseTheme",
  "class_name": "ProjectProjectDisplay",
  "component_name": "project-project-display",
  "description": "Project description",
  "autolabel": false,
  "source": "../furo-specs/specs/project/project.type.spec",
  "imports": [
    "@furo/data-input",
    "@furo/form",
    "../person/person-person-display"
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
          "field": "start",
          "component": "furo-data-display",
          "flags": [
            "condensed",
            "double",
            "noborder"
          ],
          "attrs": []
        },
        {
          "field": "end",
          "component": "furo-data-display",
          "flags": [
            "condensed",
            "double",
            "noborder"
          ],
          "attrs": []
        },
        {
          "field": "description",
          "component": "furo-data-display",
          "flags": [
            "condensed",
            "double",
            "noborder"
          ],
          "attrs": []
        },
        {
          "field": "members",
          "component": "furo-data-repeat",
          "flags": [
            "condensed",
            "double",
            "noborder"
          ],
          "attrs": [
            {
              "name": "repeated-component",
              "val": "person-person-display"
            }
          ]
        },
        {
          "field": "cost_limit",
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