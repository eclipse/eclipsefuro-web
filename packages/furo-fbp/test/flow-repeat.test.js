import { fixture, html } from '@open-wc/testing';
import 'axe-core/axe.min.js';

import '../src/flow-repeat.js';
import '../src/testhelper/test-bind.js'; // for testing with wires and hooks

describe('flow-repeat', () => {
  let repeat;
  let data;

  beforeEach(async () => {
    data = [
      { a: 2, arr: [1, 2, 3] },
      { a: 1, arr: [12, 2, 3] },
      { a: 3, arr: [41, 2, 3] },
      {
        a: 23,
        arr: [71, 2, 3],
      },
      { a: 14, arr: [1, 42, 3] },
      { a: 35, arr: [13, 2, 3] },
    ];

    const testbind = await fixture(html`
      <ul>
        <flow-repeat ƒ-inject-items="--data" internal-wire="--inject">
          <template>
            <li>other node</li>
            <li>
              <b>neu</b>
              <rep-item ƒ-raw="--inject" ƒ.-innerHTML="--itemSelected" @-click="--xx"></rep-item>
              <rep-item ƒ-index="--inject(*.index)" ƒ-yy="--xx"></rep-item>

              <template is="flow-repeat" ƒ-inject-items="--inject(*.item.arr)">
                <div ƒ-.inner-text="--item"></div>
              </template>
            </li>
          </template>
        </flow-repeat>
      </ul>
    `);
    await testbind.updateComplete;

    [repeat] = testbind.children;
  });

  it('should be a flow-repeat', done => {
    // keep this test on top, so you can recognize a wrong asignment
    assert.equal(repeat.nodeName.toLowerCase(), 'flow-repeat');
    done();
  });

  it('should render the template x times', done => {
    repeat.addEventListener('items-in-dom', e => {
      expect(e.detail).to.equal(6);
      done();
    });
    repeat.injectItems(data);
  });

  it('should only accept arrays in injectItems', () => {
    repeat.injectItems('I am a String');
    expect(repeat._insertedItems.length).to.equal(0);
  });

  it('select with index should trigger wires for select/deselect', done => {
    repeat.addEventListener('items-in-dom', () => {
      repeat._insertedItems[1].virtualElement._FBPAddWireHook('--itemSelected', () => {
        expect(repeat._insertedItems[1].virtualElement.nodeName).to.equal('EMPTY-FBP-NODE');
      });
      repeat._insertedItems[1].virtualElement._FBPAddWireHook('--itemDeSelected', () => {
        done();
      });

      repeat.select(1);
      expect(repeat.selectedIndex).to.equal(1);
      repeat.selectNextIndex();
      expect(repeat.selectedIndex).to.equal(2);
      repeat.selectNextIndex();
      expect(repeat.selectedIndex).to.equal(3);
      repeat.selectNextIndex();
      expect(repeat.selectedIndex).to.equal(4);
      repeat.selectNextIndex();
      expect(repeat.selectedIndex).to.equal(5);
      repeat.selectNextIndex();
      expect(repeat.selectedIndex).to.equal(0);
    });

    repeat.injectItems(data);
  });

  it('should be possible to navigate trough the items', done => {
    repeat.addEventListener('items-in-dom', () => {
      repeat.select(1);
      expect(repeat.selectedIndex).to.equal(1);
      repeat.selectNextIndex();
      expect(repeat.selectedIndex).to.equal(2);
      repeat.selectPreviousIndex();
      expect(repeat.selectedIndex).to.equal(1);
      repeat.selectPreviousIndex();
      expect(repeat.selectedIndex).to.equal(0);
      repeat.selectPreviousIndex();
      expect(repeat.selectedIndex).to.equal(5);

      done();
    });

    repeat.injectItems(data);
  });

  it('should trigger selected element/all elements with data', done => {
    repeat.addEventListener('items-in-dom', () => {
      repeat._insertedItems[0].virtualElement._FBPAddWireHook('--trigger', w => {
        expect(w).to.equal('First');
      });
      repeat._insertedItems[5].virtualElement._FBPAddWireHook('--trigger', w => {
        expect(w).to.equal('Last');
        done();
      });
      repeat._insertedItems[1].virtualElement._FBPAddWireHook('--trigger', w => {
        expect(w).to.equal('Payload');
      });
      repeat._insertedItems[1].virtualElement._FBPAddWireHook('--triggerIndex', w => {
        expect(w).to.equal('Payload');
      });

      repeat.select(1);
      repeat.triggerSelected('Payload');
      repeat.triggerFirst('First');
      repeat.triggerLast('Last');
    });
    repeat.injectItems(data);
  });

  it('should trigger all elements with data', done => {
    repeat.addEventListener('items-in-dom', () => {
      repeat._insertedItems[0].virtualElement._FBPAddWireHook('--trigger', w => {
        expect(w).to.equal('Payload');
      });

      repeat._insertedItems[1].virtualElement._FBPAddWireHook('--trigger', w => {
        expect(w).to.equal('Payload');
      });

      repeat._insertedItems[5].virtualElement._FBPAddWireHook('--trigger', w => {
        expect(w).to.equal('Payload');
        done();
      });

      repeat.select(1);
      repeat.triggerAll('Payload');
    });
    repeat.injectItems(data);
  });

  it('should clear the list', done => {
    repeat.addEventListener('items-in-dom', e => {
      expect(e.detail).to.equal(6);
      repeat.clear();
      expect(repeat._insertedItems.length).to.equal(0);
      done();
    });
    repeat.injectItems(data);
  });
});
