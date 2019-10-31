{
  "_writeprotection": false,
  "theme": "FormBaseTheme",
  "class_name": "TaskTaskForm",
  "component_name": "task-task-form",
  "description": "Task data description",
  "autolabel": false,
  "source": "../furo-specs/specs/task/task.type.spec",
  "imports": [
    "@furo/data-input",
    "@furo/form",
    "../person/person-person-reference-search",
    "../task/task-task-form"
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
          "field": "estimated_time",
          "component": "furo-data-number-input",
          "flags": [
            "condensed",
            "double"
          ],
          "attrs": []
        },
        {
          "field": "owner",
          "component": "person-person-reference-search",
          "flags": [
            "condensed",
            "double"
          ],
          "attrs": []
        },
        {
          "field": "subtasks",
          "component": "furo-data-repeat",
          "flags": [
            "condensed",
            "double"
          ],
          "attrs": [
            {
              "name": "repeated-component",
              "val": "task-task-form"
            }
          ]
        }
      ]
    }
  ]
}