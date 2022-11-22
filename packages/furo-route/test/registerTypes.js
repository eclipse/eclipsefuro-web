import { panelRegistry } from '../src/lib/panelRegistry.js';

panelRegistry.registerType('task.Task', {
  view: 'example-panel',
  edit: 'edit-example',
  summary: 'summary-example',
});
panelRegistry.registerType('task.Task-b', {
  view: 'example-panel-b',
  edit: 'edit-b-example',
});
