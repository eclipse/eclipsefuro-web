{

  "class_name": "ProjectProjectForm",
  "component_name": "project-project-form",
  "description": "Project description",
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
          "field": "cost_limit",
          "size": "double",
          "component": "furo-data-text-input",
          "attrs": [
            "condensed",
            "double"
          ],
          "field_spec": {
            "type": "google.type.Money",
            "repeated": false
          }
        },
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
          "field": "end",
          "size": "double",
          "component": "furo-data-text-input",
          "attrs": [
            "condensed",
            "double"
          ],
          "field_spec": {
            "type": "google.type.Date",
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
          "field": "members",
          "size": "double",
          "component": "furo-data-text-input",
          "attrs": [
            "condensed",
            "double"
          ],
          "field_spec": {
            "type": "person.Person",
            "repeated": true
          }
        },
        {
          "field": "start",
          "size": "double",
          "component": "furo-data-text-input",
          "attrs": [
            "condensed",
            "double"
          ],
          "field_spec": {
            "type": "google.type.Date",
            "repeated": false
          }
        }
      ]
    }
  ]
}
