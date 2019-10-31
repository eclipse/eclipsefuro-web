{
  "_writeprotection": false,
  "theme": "FormBaseTheme",
  "class_name": "TreeNavigationnodeForm",
  "component_name": "tree-navigationnode-form",
  "description": "Item of the navigationtree",
  "autolabel": false,
  "source": "../furo-specs/specs/tree/navigationnode.type.spec",
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
          "field": "secondary_text",
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
          "field": "icon",
          "component": "furo-data-text-input",
          "flags": [
            "condensed",
            "double"
          ],
          "attrs": []
        },
        {
          "field": "key_words",
          "component": "furo-data-text-input",
          "flags": [
            "condensed",
            "double"
          ],
          "attrs": []
        },
        {
          "field": "has_error",
          "component": "furo-data-text-input",
          "flags": [
            "condensed",
            "double"
          ],
          "attrs": []
        },
        {
          "field": "open",
          "component": "furo-data-text-input",
          "flags": [
            "condensed",
            "double"
          ],
          "attrs": []
        },
        {
          "field": "link",
          "component": "furo-data-text-input",
          "flags": [
            "condensed",
            "double"
          ],
          "attrs": []
        },
        {
          "field": "is_group_label",
          "component": "furo-data-text-input",
          "flags": [
            "condensed",
            "double"
          ],
          "attrs": []
        },
        {
          "field": "children",
          "component": "furo-data-repeat",
          "flags": [
            "condensed",
            "double"
          ],
          "attrs": [
            {
              "name": "repeated-component",
              "val": "tree-navigationnode-form"
            }
          ]
        }
      ]
    }
  ]
}