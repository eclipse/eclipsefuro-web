import {panelRegistry} from "@furo/route/lib/panelRegistry";

// import panels

import "./panels/experiment-experiment-update-panel"
import "./panels/person-person-update-panel"
import "./panels/project-project-update-panel"
import "./panels/task-task-update-panel"
import "./panels/tree-tree-update-panel"

// -- register panels

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

