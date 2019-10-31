{
  "_writeprotection": false,
  "theme": "FormBaseTheme",
  "class_name": "ProjectProjectCreateForm",
  "component_name": "project-project-create-form",
  "description": "Project description",
  "autolabel": false,
  "source": "../furo-specs/specs/project/project.type.spec",
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