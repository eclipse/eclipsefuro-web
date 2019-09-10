{
  "class_name": "TreeServiceUpdatePanel",
  "component_name": "treeservice-update-panel",
  "description": "Updates a Tree, partial updates are supported",
  "source": "./specs/tree/tree.service.spec",
  "imports": [
    "../forms/tree-tree-form",
    "../actions/tree-tree-update-action"
  ],
  "form": {
    "name": "tree-tree-form",
    "attrs": []
  },
  "action": {
    "name": "tree-tree-update-action",
    "listen_to": [
      "update"
    ],
    "attrs": []
  }
}