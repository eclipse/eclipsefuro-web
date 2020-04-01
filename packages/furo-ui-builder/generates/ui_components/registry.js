import {panelRegistry} from "@furo/route/src/lib/panelRegistry.js";

// import panels

import "./authservice/auth-auth-update-panel.js"
import "./experimentservice/experiment-experiment-update-panel.js"
import "./personservice/person-person-update-panel.js"
import "./projectservice/project-project-update-panel.js"
import "./taskservice/task-task-update-panel.js"
import "./treeservice/tree-tree-update-panel.js"

// -- register panels

panelRegistry.registerType("auth.AuthEntity", {
     "edit" : "auth-auth-update-panel"
 });

panelRegistry.registerType("experiment.ExperimentEntity", {
     "edit" : "experiment-experiment-update-panel"
 });

panelRegistry.registerType("person.PersonEntity", {
     "edit" : "person-person-update-panel"
 });

panelRegistry.registerType("project.ProjectEntity", {
     "edit" : "project-project-update-panel"
 });

panelRegistry.registerType("task.TaskEntity", {
     "edit" : "task-task-update-panel"
 });

panelRegistry.registerType("tree.TreeEntity", {
     "edit" : "tree-tree-update-panel"
 });

