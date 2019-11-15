import {panelRegistry} from "@furo/route/lib/panelRegistry";

// import panels

import "./experiment/experiment-experiment-display-panel"
import "./experiment/experiment-experiment-update-panel"
import "./person/person-person-display-panel"
import "./person/person-person-update-panel"
import "./project/project-project-display-panel"
import "./project/project-project-update-panel"
import "./projectfilter/projectfilter-projectfilter-display-panel"
import "./task/task-task-display-panel"
import "./task/task-task-update-panel"
import "./tree/tree-tree-display-panel"
import "./tree/tree-tree-update-panel"

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

panelRegistry.registerType("projectfilter.ProjectfilterEntity", {
     "display" : "projectfilter-projectfilter-display-panel" ,"edit" : "projectfilter-projectfilter-display-panel"
 });

panelRegistry.registerType("task.TaskEntity", {
     "display" : "task-task-display-panel" ,"edit" : "task-task-update-panel"
 });

panelRegistry.registerType("tree.TreeEntity", {
     "display" : "tree-tree-display-panel" ,"edit" : "tree-tree-update-panel"
 });

