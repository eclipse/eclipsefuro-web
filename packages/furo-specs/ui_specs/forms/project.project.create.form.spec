{
  "class_name": "ProjectProjectCreateForm",
  "component_name": "project-project-create-form",
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