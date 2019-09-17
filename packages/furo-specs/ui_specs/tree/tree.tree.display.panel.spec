{
  "_writeprotection": false,
  "theme": "PanelBaseTheme",
  "class_name": "TreeTreeDisplayPanel",
  "component_name": "tree-tree-display-panel",
  "description": "The Get method takes zero or more parameters, and returns a TreeEntity which contains a Tree",
  "source": "./specs/tree/tree.service.spec",
  "service_name": "TreeService",
  "response_type": "tree.TreeEntity",
  "imports": [
    "./tree-tree-display"
  ],
  "display": {
    "name": "tree-tree-display",
    "flags": [
      "flex"
    ],
    "attrs": []
  },
  "action": {
    "name": "task-task-update-action",
    "listen_to": [
      "update"
    ],
    "flags": [],
    "attrs": []
  },
  "request_type": null
}