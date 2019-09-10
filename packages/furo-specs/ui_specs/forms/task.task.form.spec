{
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
      "description": "Hauptgruppe",
      "component": "furo-form-layouter",
      "title": "Title",
      "secondary_text": "secondary",
      "attrs": [
        "four"
      ],
      "fields": [
        {
          "field": "description",
          "attrs": [
            "condensed",
            "double"
          ]
        },
        {
          "component": "furo-empty-spacer",
          "attrs": [
            "spacing-xl"
          ]
        },
        {
          "field": "estimated_time",
          "attrs": [
            "condensed",
            "double"
          ]
        },
        {
          "field": "owner",
          "attrs": [
            "condensed",
            "double"
          ]
        },
        {
          "field": "subtasks",
          "attrs": [
            "condensed",
            "double"
          ]
        }
      ]
    }
  ]
}
