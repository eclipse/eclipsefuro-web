{
  "_writeprotection": false,
  "theme": "ActionBaseTheme",
  "class_name": "TreeTreeUpdateAction",
  "component_name": "tree-tree-update-action",
  "description": "service specs for the tree api",
  "source": "./ui_specs/tree/tree.tree.update.action.spec",
  "service_name": "TreeService",
  "response_type": "tree.TreeEntity",
  "imports": [],
  "items": [
    {
      "label": "save",
      "rel": "update",
      "icon": null,
      "component": "furo-button",
      "onclick": "-^update-req",
      "flags": [
        "primary",
        "unelevated"
      ],
      "attrs": []
    },
    {
      "label": "reload",
      "rel": "self",
      "icon": null,
      "component": "furo-button",
      "onclick": "-^self-req",
      "flags": [
        "outline"
      ],
      "attrs": []
    },
    {
      "component": "furo-empty-spacer"
    },
    {
      "label": "cancel",
      "rel": "",
      "icon": null,
      "component": "furo-button",
      "onclick": "-^reset-req",
      "flags": [
        "outline"
      ],
      "attrs": []
    },
    {
      "label": "delete",
      "rel": "delete",
      "icon": "delete",
      "component": "furo-button",
      "onclick": "-^delete-req",
      "flags": [
        "unelevated",
        "danger"
      ],
      "attrs": []
    }
  ],
  "request_type": "tree.Tree"
}