{
  "theme": "FormBaseTheme",
  "class_name": "TaskTaskCreateForm",
  "component_name": "task-task-create-form",
  "description": "Task data description",
  "source": "specs/task/task.type.spec",
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
      "secondary_text": null,
      "flags": [
        "four"
      ],
      "attrs": [],
      "fields": [
        {
          "field": "description",
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