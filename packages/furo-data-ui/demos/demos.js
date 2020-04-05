import './demo-furo-data-hide-content.js';
import './demo-furo-data-context-menu.js';
import './demo-furo-data-table.js';
import './demo-furo-data-table-row-selection.js';

import { Init } from '@furo/framework/src/furo.js';

import spec from '../specs/menu/menuitem.type.spec.js';

Init.addApiTypeSpec('menu.Menuitem', spec);
