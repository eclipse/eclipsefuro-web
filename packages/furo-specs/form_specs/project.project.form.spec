{
  "class_name": "ProjectProjectForm",
  "component_name": "project-project-form",
  "description": "Project description",
  "source": "./specs/project/project.type.spec",
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
          "field": "start",
          "attrs": [
            "condensed",
            "double"
          ]
        },
        {
          "field": "end",
          "attrs": [
            "condensed",
            "double"
          ]
        },
        {
          "field": "description",
          "attrs": [
            "condensed",
            "double"
          ]
        },
        {
          "field": "members",
          "attrs": [
            "condensed",
            "double"
          ]
        },
        {
          "field": "cost_limit",
          "attrs": [
            "condensed",
            "double"
          ]
        }
      ]
    }
  ]
}