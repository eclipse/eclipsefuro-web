{

  "class_name": "TreeTreeForm",
  "component_name": "tree-tree-form",
  "description": "Navigation tree type with recursive navigation nodes",
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
          "field": "root",
          "size": "double",
          "component": "furo-data-text-input",
          "attrs": [
            "condensed",
            "double"
          ],
          "field_spec": {
            "type": "tree.Navigationnode",
            "repeated": false
          }
        }
      ]
    }
  ]
}
