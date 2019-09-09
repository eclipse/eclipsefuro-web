{

  "class_name": "PersonPersonForm",
  "component_name": "person-person-form",
  "description": "Person message type",
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
          "field": "first_name",
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
          "field": "name",
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
          "field": "phone_nr",
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
          "field": "skills",
          "size": "double",
          "component": "furo-data-text-input",
          "attrs": [
            "condensed",
            "double"
          ],
          "field_spec": {
            "type": "string",
            "repeated": true
          }
        }
      ]
    }
  ]
}
