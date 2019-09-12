{
  "theme": "FormBaseTheme",
  "class_name": "TaskTaskCollectionForm",
  "component_name": "task-taskcollection-form",
  "description": "TaskCollection with repeated TaskEntity",
  "source": "specs/task/task_collection.type.spec",
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
          "field": "meta",
          "flags": [
            "condensed",
            "double"
          ],
          "attrs": []
        },
        {
          "field": "links",
          "flags": [
            "condensed",
            "double"
          ],
          "attrs": []
        },
        {
          "field": "entities",
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