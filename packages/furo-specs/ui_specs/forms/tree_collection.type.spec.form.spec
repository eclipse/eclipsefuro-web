{
  "theme": "FormBaseTheme",
  "class_name": "TreeTreeCollectionForm",
  "component_name": "tree-treecollection-form",
  "description": "TreeCollection with repeated TreeEntity",
  "source": "specs/tree/tree_collection.type.spec",
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