/**
 * Connect to viz.furo.pro to visualize your running application.
 *
 * ### Usage
 * ```js
 *
 * viz() // starts the rendering at document.body
 *
 * viz($0) // starts the rendering at the selected element (chrome)
 *
 * ```
 *
 * Set `window._viz.url` to change the viz instance. Default goes to  'https://viz.furo.pro/'
 *
 * @param root DomNode The root node to start the rendering.
 */

import { VizBreakpoint } from './vizBreakpoint.js';

window._viz = {
  url: 'https://viz.furo.pro/',
  breakpoint: VizBreakpoint.breakpoint,
};

window.viz = root => {
  if (root === undefined) {
    // eslint-disable-next-line no-param-reassign
    root = window.document.body;
  }

  const visualizer = window.open(window._viz.url);
  window._viz.visualizer = visualizer;
  // build the list of all components
  const flat = {};
  window._viz.flat = flat;

  if (root.tagName) {
    flat[root.tagName] = root;
  }

  const flater = nodes => {
    const l = nodes.length;
    for (let i = 0; i < l; i += 1) {
      flat[nodes[i].nodeName] = nodes[i];
      if (nodes[i].nodeName.includes('-') && nodes[i].shadowRoot) {
        flater(nodes[i].shadowRoot.querySelectorAll('*'));
      }
    }
  };

  if (root.shadowRoot) {
    flater(root.shadowRoot.querySelectorAll('*'));
  } else {
    flater(root.querySelectorAll('*'));
  }

  window.onmessage = m => {
    if (m.data.type === 'component-request') {
      const e = flat[m.data.component];
      if (e !== undefined) {
        visualizer.postMessage(
          {
            type: 'render-request',
            data: e.shadowRoot.innerHTML || e.innerHTML,
            component: e.tagName,
          },
          window._viz.url
        );
        // eslint-disable-next-line no-console
        console.log('render request for ', e.tagName);
      }
    }

    if (m.data.type === 'add-breakpoint') {
      window._viz.breakpoint(m.data.component, m.data.wire);
    }

    if (m.data.type === 'remove-breakpoint') {
      window._viz.flat[m.data.component].__wirebundle[m.data.wire].shift();
    }

    if (m.data.type === 'analyzer-ready') {
      let data = root.innerHTML;
      if (root.shadowRoot && root.shadowRoot.innerHTML) {
        data = root.shadowRoot.innerHTML;
      }

      visualizer.postMessage(
        {
          type: 'render-request',
          data,
          component: root.tagName,
        },
        window._viz.url
      );
    }
  };
};
