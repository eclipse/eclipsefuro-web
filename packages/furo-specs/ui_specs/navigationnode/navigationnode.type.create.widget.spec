{
  "_writeprotection": false,
  "theme": "WidgetBaseTheme",
  "class_name": "TreeNavigationnodeCreateWidget",
  "component_name": "tree-navigationnode-create-widget",
  "description": "Item of the navigationtree",
  "source": "specs/tree/navigationnode.type.spec",
  "imports": [
    "@furo/data-input",
    "@furo/layout",
    "@furo/form"
  ],
  "widget": {
    "description": "",
    "component": "furo-card",
    "title": "Mein Persontype create Widget",
    "secondary_text": "fully generated",
    "flags": ["amazing"],
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