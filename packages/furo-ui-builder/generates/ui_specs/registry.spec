{
  "imports": [
    "./authservice/auth-auth-update-panel.js",
    "./experimentservice/experiment-experiment-update-panel.js",
    "./personservice/person-person-update-panel.js",
    "./projectservice/project-project-update-panel.js",
    "./taskservice/task-task-update-panel.js",
    "./treeservice/tree-tree-update-panel.js"
  ],
  "panels": {
    "auth.AuthEntity": {
      "edit": "auth-auth-update-panel"
    },
    "experiment.ExperimentEntity": {
      "edit": "experiment-experiment-update-panel"
    },
    "person.PersonEntity": {
      "edit": "person-person-update-panel"
    },
    "project.ProjectEntity": {
      "edit": "project-project-update-panel"
    },
    "task.TaskEntity": {
      "edit": "task-task-update-panel"
    },
    "tree.TreeEntity": {
      "edit": "tree-tree-update-panel"
    }
  }
}