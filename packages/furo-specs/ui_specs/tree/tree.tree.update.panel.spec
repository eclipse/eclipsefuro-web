{
  "theme": "PanelBaseTheme",
  "class_name": "TreeTreeUpdatePanel",
  "component_name": "tree-tree-update-panel",
  "description": "Updates a Tree, partial updates are supported",
  "source": "./specs/tree/tree.service.spec",
  "service_name": "TreeService",
  "response_type": "tree.TreeEntity",
  "imports": [
    "./tree-tree-form",
    "./tree-tree-update-action"
  ],
  "form": {
    "name": "tree-tree-form",
    "flags": [
      "flex"
    ],
    "attrs": []
  },
  "action": {
    "name": "tree-tree-update-action",
    "listen_to": [
      "update"
    ],
    "flags": [],
    "attrs": []
  },
  "request_type": "tree.Tree"
}