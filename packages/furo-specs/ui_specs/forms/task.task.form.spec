{
  "theme": "FormBaseTheme",
  "class_name": "TaskTaskForm",
  "component_name": "task-task-form",
  "description": "Task data description",
  "source": "./specs/task/task.type.spec",
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
          "field": "description",
          "flags": [
            "condensed",
            "double"
          ],
          "attrs": []
        },
        {
          "field": "estimated_time",
          "flags": [
            "condensed",
            "double"
          ],
          "attrs": []
        },
        {
          "field": "owner",
          "flags": [
            "condensed",
            "double"
          ],
          "attrs": []
        },
        {
          "field": "subtasks",
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