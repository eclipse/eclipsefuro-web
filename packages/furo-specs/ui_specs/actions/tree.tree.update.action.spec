{
  "theme": "ActionBaseTheme",
  "class_name": "treeTreeUpdateAction",
  "component_name": "tree-tree-update-action",
  "description": "service specs for the tree api",
  "source": "./ui_specs/actions/tree.tree.update.action.spec",
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
      "attrs": [
        "primary",
        "unelevated"
      ]
    },
    {
      "label": "reload",
      "rel": "self",
      "icon": null,
      "component": "furo-button",
      "onclick": "-^self-req",
      "attrs": [
        "unelevated"
      ]
    },
    {
      "component": "furo-empty-spacer"
    },
    {
      "label": "cancel",
      "rel": "reset",
      "icon": null,
      "component": "furo-button",
      "onclick": "-^reset-req",
      "attrs": [
        "unelevated"
      ]
    },
    {
      "label": "delete",
      "rel": "delete",
      "icon": "delete",
      "component": "furo-button",
      "onclick": "-^delete-req",
      "attrs": [
        "unelevated",
        "danger"
      ]
    }
  ],
  "request_type": "tree.Tree"
}