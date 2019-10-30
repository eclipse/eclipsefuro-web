{
  "_writeprotection": false,
  "theme": "WidgetBaseTheme",
  "class_name": "TaskTaskCreateWidget",
  "component_name": "task-task-create-widget",
  "description": "Task data description",
  "source": "../furo-specs/specs/task/task.type.spec",
  "imports": [
    "@furo/data-input",
    "@furo/layout",
    "@furo/form"
  ],
  "widget": {
    "description": "",
    "component": "furo-card",
    "title": null,
    "secondary_text": null,
    "flags": [],
    "attrs": []
  },
  "fieldgroups": [
    {
      "description": "",
      "component": "furo-form-layouter",
      "title": null,
      "secondary_text": null,
      "flags": [],
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
        }
      ]
    }
  ],
  "action_items": [
    {
      "label": "create",
      "rel": "create",
      "icon": null,
      "component": "furo-button",
      "onclick": "-^create-req",
      "flags": [
        "primary"
      ],
      "attrs": []
    }
  ]
}