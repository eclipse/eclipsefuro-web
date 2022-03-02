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

import { FbpBreakpoints } from './FbpBreakpoints.js';

window._viz = {
  url: 'https://viz.furo.pro/',
};

const bp = JSON.parse(sessionStorage.getItem('__fbp_breakpoints'));
FbpBreakpoints.SetBreakpoints(bp || []);

window.onmessage = m => {
  if (m.data.type === 'PARENT_REFRESHED') {
    // STEP 3
    window._viz.visualizer = m.source;
    window._viz.url = m.data.url;
    // eslint-disable-next-line no-use-before-define
    messages();
    window._viz.visualizer.postMessage('PARENT_RECONNECTED', window._viz.url);
    // eslint-disable-next-line no-console
    console.log('VIZ Reconnected');
  }
};

window.addEventListener('beforeunload', () => {
  if (window._viz.visualizer) {
    // STEP 1
    window._viz.visualizer.postMessage('PARENT_REFRESHING', window._viz.url);
    // eslint-disable-next-line no-console
    console.log('PARENT_REFRESHING');
  }
});

window.viz = root => {
  const visualizer = window.open(window._viz.url);
  window._viz.visualizer = visualizer;
  // build flat node list and register events
  // eslint-disable-next-line no-use-before-define
  messages(root);
};

function messages(root) {
  if (root === undefined) {
    // eslint-disable-next-line no-param-reassign
    root = window.document.body;
  }

  window.onmessage = m => {
    if (m.data.type === 'COMPONENT_REQUEST') {
      const node = FbpBreakpoints.GetElementByPath(m.data.path);

      window._viz.visualizer.postMessage(
        {
          type: 'RENDER_REQUEST',
          data: node.shadowRoot.innerHTML || node.innerHTML,
          component: node.tagName,
          path: FbpBreakpoints.getDomPath(node),
        },
        window._viz.url
      );
      // eslint-disable-next-line no-console
      console.log('render request for ', node.tagName);
    }
    if (m.data.type === 'PARENT_COMPONENT_REQUEST') {
      const stack = m.data.path.split(' > ');
      // todo rewind until next shadow host
      while (
        !stack[stack.length - 1].endsWith('::shadow') &&
        stack.length > 1
      ) {
        stack.pop();
      }

      // remove shadow from last element
      stack[stack.length - 1] = stack[stack.length - 1].replace('::shadow', '');
      const path = stack.join(' > ');

      const node = FbpBreakpoints.GetElementByPath(path);
      let data = '';
      if (node.shadowRoot) {
        data = node.shadowRoot.innerHTML;
      } else {
        data = node.innerHTML;
      }
      window._viz.visualizer.postMessage(
        {
          type: 'RENDER_REQUEST',
          data,
          component: node.tagName,
          path: FbpBreakpoints.getDomPath(node),
        },
        window._viz.url
      );
      // eslint-disable-next-line no-console
      console.log('render request for ', FbpBreakpoints.GetElementByPath(path));
    }

    if (m.data.type === 'BREAKPOINTS') {
      FbpBreakpoints.SetBreakpoints(m.data.breakpoints);
      sessionStorage.setItem(
        '__fbp_breakpoints',
        JSON.stringify(m.data.breakpoints)
      );
    }

    if (m.data.type === 'ANALYZER_READY') {
      let data = root.innerHTML;
      if (root.shadowRoot && root.shadowRoot.innerHTML) {
        data = root.shadowRoot.innerHTML;
      }

      window._viz.visualizer.postMessage(
        {
          type: 'BREAKPOINTS',
          breakpoints: FbpBreakpoints.Breakpoints(),
        },
        window._viz.url
      );

      window._viz.visualizer.postMessage(
        {
          type: 'RENDER_REQUEST',
          data,
          component: root.tagName,
          path: FbpBreakpoints.getDomPath(root),
        },
        window._viz.url
      );
    }
  };
}
