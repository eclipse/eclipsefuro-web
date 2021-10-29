import { assert } from '@esm-bundle/chai';

import '../src/furo-catalog.js';
import '@furo/fbp/src/testhelper/test-bind'; // for testing with wires and hooks
import { panelRegistry } from '../src/lib/panelRegistry.js';

describe('panelRegistry.test', () => {
  it('should deliver false on unknown registry', () => {
    assert.equal(panelRegistry.getPanelName(), false);
    assert.equal(panelRegistry.getPanelName('something'), false);
    assert.equal(panelRegistry.getPanelName('something', 'unknown'), false);
  });
});
