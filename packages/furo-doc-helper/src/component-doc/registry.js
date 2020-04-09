import { panelRegistry } from '@furo/route/src/lib/panelRegistry.js';

// import panels

import './demo-panel.js';
import './class-panel.js';
import './component-panel.js';
import './json-panel.js';
import './markdown-panel.js';
// -- register panels

panelRegistry.registerType('demo', 'demo-panel');
panelRegistry.registerType('json', 'json-panel');
panelRegistry.registerType('markdown', 'markdown-panel');
panelRegistry.registerType('component', 'component-panel');
panelRegistry.registerType('class', 'class-panel');
