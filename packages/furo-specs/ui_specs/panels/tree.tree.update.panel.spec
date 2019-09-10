{
  "class_name": "treeTreeUpdatePanel",
  "component_name": "tree-tree-update-panel",
  "description": "Updates a Tree, partial updates are supported",
  "source": "./specs/tree/tree.service.spec",
  "service_name": "TreeService",
  "response_type": "tree.TreeEntity",
  "imports": [
    "../forms/tree-tree-form",
    "../actions/tree-tree-update-action"
  ],
  "form": {
    "name": "tree-tree-form",
    "attrs": [
      "flex"
    ]
  },
  "action": {
    "name": "tree-tree-update-action",
    "listen_to": [
      "update"
    ],
    "attrs": []
  },
  "request_type": "tree.Tree"
}