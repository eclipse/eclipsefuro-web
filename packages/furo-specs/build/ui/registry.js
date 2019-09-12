import {panelRegistry} from "@furo/route/lib/panelRegistry";

// import panels

import "./panels/experiment-experiment-display-panel"
import "./panels/experiment-experiment-update-panel"
import "./panels/person-person-display-panel"
import "./panels/person-person-update-panel"
import "./panels/project-project-display-panel"
import "./panels/project-project-update-panel"
import "./panels/task-task-display-panel"
import "./panels/task-task-update-panel"
import "./panels/tree-tree-display-panel"
import "./panels/tree-tree-update-panel"
import "./displaypanels/experiment-experiment-display-panel"
import "./displaypanels/person-person-display-panel"
import "./displaypanels/project-project-display-panel"
import "./displaypanels/task-task-display-panel"
import "./displaypanels/tree-tree-display-panel"

// -- register panels

panelRegistry.registerType("experiment.ExperimentEntity", {
     "display" : "experiment-experiment-display-panel" ,"edit" : "experiment-experiment-update-panel"
 });

panelRegistry.registerType("person.PersonEntity", {
     "display" : "person-person-display-panel" ,"edit" : "person-person-update-panel"
 });

panelRegistry.registerType("project.ProjectEntity", {
     "display" : "project-project-display-panel" ,"edit" : "project-project-update-panel"
 });

panelRegistry.registerType("task.TaskEntity", {
     "display" : "task-task-display-panel" ,"edit" : "task-task-update-panel"
 });

panelRegistry.registerType("tree.TreeEntity", {
     "display" : "tree-tree-display-panel" ,"edit" : "tree-tree-update-panel"
 });

