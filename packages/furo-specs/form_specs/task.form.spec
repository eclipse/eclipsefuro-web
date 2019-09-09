{

  "class_name": "TaskTaskForm",
  "component_name": "task-task-form",
  "description": "Task data description",
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
      "attrs": ["four"],
      "fields": [
      
        {
          "field": "description",
          "size": "double",
          "component": "furo-data-text-input",
          "attrs": [
            "condensed",
            "double"
          ],
          "field_spec": {
            "type": "string",
            "repeated": false
          }
        },
        {
          "field": "display_name",
          "size": "double",
          "component": "furo-data-text-input",
          "attrs": [
            "condensed",
            "double"
          ],
          "field_spec": {
            "type": "string",
            "repeated": false
          }
        },
        {
          "field": "estimated_time",
          "size": "double",
          "component": "furo-data-text-input",
          "attrs": [
            "condensed",
            "double"
          ],
          "field_spec": {
            "type": "int",
            "repeated": false
          }
        },
        {
          "field": "id",
          "size": "double",
          "component": "furo-data-text-input",
          "attrs": [
            "condensed",
            "double"
          ],
          "field_spec": {
            "type": "string",
            "repeated": false
          }
        },
        {
          "field": "owner",
          "size": "double",
          "component": "furo-data-text-input",
          "attrs": [
            "condensed",
            "double"
          ],
          "field_spec": {
            "type": "furo.Reference",
            "repeated": false
          }
        },
        {
          "field": "subtasks",
          "size": "double",
          "component": "furo-data-text-input",
          "attrs": [
            "condensed",
            "double"
          ],
          "field_spec": {
            "type": "task.Task",
            "repeated": true
          }
        }
      ]
    }
  ]
}
