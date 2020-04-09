// eslint-disable-next-line import/no-extraneous-dependencies
import { panelRegistry } from '@furo/route/src/lib/panelRegistry';

panelRegistry.registerType('task.Task', {
  view: 'example-panel',
  edit: 'edit-example',
  summary: 'summary-example',
});
panelRegistry.registerType('task.Task-b', { view: 'example-panel-b', edit: 'edit-b-example' });
