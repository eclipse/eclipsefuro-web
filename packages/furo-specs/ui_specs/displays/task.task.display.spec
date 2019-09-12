{
  "theme": "DisplayBaseTheme",
  "class_name": "TaskTaskDisplay",
  "component_name": "task-task-display",
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
          "component": "furo-data-display",
          "flags": [
            "condensed",
            "double"
          ],
          "attrs": []
        },
        {
          "field": "estimated_time",
          "component": "furo-data-display",
          "flags": [
            "condensed",
            "double"
          ],
          "attrs": []
        },
        {
          "field": "owner",
          "component": "furo-data-display",
          "flags": [
            "condensed",
            "double"
          ],
          "attrs": []
        },
        {
          "field": "subtasks",
          "component": "furo-data-display",
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