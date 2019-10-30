{
  "_writeprotection": false,
  "theme": "WidgetBaseTheme",
  "class_name": "TreeTreeCreateWidget",
  "component_name": "tree-tree-create-widget",
  "description": "Navigation tree type with recursive navigation nodes",
  "source": "../furo-specs/specs/tree/tree.type.spec",
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
      "fields": []
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