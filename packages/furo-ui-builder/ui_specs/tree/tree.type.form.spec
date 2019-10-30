{
  "_writeprotection": false,
  "theme": "FormBaseTheme",
  "class_name": "TreeTreeForm",
  "component_name": "tree-tree-form",
  "description": "Navigation tree type with recursive navigation nodes",
  "autolabel": false,
  "source": "../furo-specs/specs/tree/tree.type.spec",
  "imports": [
    "@furo/data-input",
    "@furo/form",
    "../tree/tree-navigationnode-form"
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
          "field": "id",
          "component": "furo-data-text-input",
          "flags": [
            "condensed",
            "double"
          ],
          "attrs": []
        },
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
          "field": "root",
          "component": "tree-navigationnode-form",
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