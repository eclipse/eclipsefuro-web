import {panelRegistry} from "@furo/route/lib/panelRegistry";

// import panels

import "./panels/experiment-experiment-update-panel"
import "./panels/person-person-update-panel"
import "./panels/project-project-update-panel"
import "./panels/task-task-update-panel"
import "./panels/tree-tree-update-panel"

// -- register panels

panelRegistry.registerType("experiment.Experiment", {
     "edit" : "experiment-experiment-update-panel" ,"view" : "experiment-experiment-update-panel"
 });

panelRegistry.registerType("person.Person", {
     "edit" : "person-person-update-panel" ,"view" : "person-person-update-panel"
 });

panelRegistry.registerType("project.Project", {
     "edit" : "project-project-update-panel" ,"view" : "project-project-update-panel"
 });

panelRegistry.registerType("task.Task", {
     "edit" : "task-task-update-panel" ,"view" : "task-task-update-panel"
 });

panelRegistry.registerType("tree.Tree", {
     "edit" : "tree-tree-update-panel" ,"view" : "tree-tree-update-panel"
 });

