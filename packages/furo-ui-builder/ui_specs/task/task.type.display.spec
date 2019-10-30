{
  "_writeprotection": false,
  "theme": "DisplayBaseTheme",
  "class_name": "TaskTaskDisplay",
  "component_name": "task-task-display",
  "description": "Task data description",
  "autolabel": false,
  "source": "../furo-specs/specs/task/task.type.spec",
  "imports": [
    "@furo/data-input",
    "@furo/form",
    "../task/task-task-display"
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
            "double",
            "noborder"
          ],
          "attrs": []
        },
        {
          "field": "estimated_time",
          "component": "furo-data-display",
          "flags": [
            "condensed",
            "double",
            "noborder"
          ],
          "attrs": []
        },
        {
          "field": "owner",
          "component": "furo-data-display",
          "flags": [
            "condensed",
            "double",
            "noborder"
          ],
          "attrs": []
        },
        {
          "field": "subtasks",
          "component": "furo-data-repeat",
          "flags": [
            "condensed",
            "double",
            "noborder"
          ],
          "attrs": [
            {
              "name": "repeated-component",
              "val": "task-task-display"
            }
          ]
        }
      ]
    }
  ]
}