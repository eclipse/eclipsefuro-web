import './demo-furo-data-hide-content.js';
import './demo-furo-data-context-menu.js';
import './demo-furo-data-table.js';
import './demo-furo-data-table-row-selection.js';
import './demo-furo-data-chart.js';
import './demo-furo-data-chart-mini.js';
import './demo-furo-data-chart-mixed.js';
import './demo-furo-data-chart-stacked.js';
import './demo-furo-data-chart-timeline.js';

import { Init } from '@furo/framework/src/furo.js';

import spec from '../specs/menu/menuitem.type.spec.js';

Init.addApiTypeSpec('menu.Menuitem', spec);
