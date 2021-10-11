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
 *
 * @param root DomNode The root node to start the rendering.
 */
window.viz = root => {
  if (root === undefined) {
    // eslint-disable-next-line no-param-reassign
    root = window.document.body;
  }

  const visualizer = window.open('https://viz.furo.pro/');
  // build the list of all components
  const flat = {};

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
          },
          'https://viz.furo.pro/',
        );
        // eslint-disable-next-line no-console
        console.dir({
          type: 'render-request',
          data: e.shadowRoot.innerHTML || e.innerHTML,
        });
      }
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
        },
        'https://viz.furo.pro/',
      );
    }
  };
};
