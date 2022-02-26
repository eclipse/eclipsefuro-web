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
  flat: {},
  breakpoint: VizBreakpoint.breakpoint
    }


window.onmessage = m => {
  if (m.data.type === "PARENT_REFRESHED") { // STEP 3
    window._viz.visualizer = m.source;
    window._viz.url = m.data.url;
    // rebuild flat node list and register events
      messages();
    // add breakpoints
    setTimeout(()=>{
      scan(window.document.body);
      console.log(m.data)
      console.log(window._viz.flat)


      Object.keys(m.data.breakpoints).forEach(component => {
        m.data.breakpoints[component].wires.forEach(wire=>{
          window._viz.breakpoint(component, wire);
        })
      })

    },331)

  }
}

window.addEventListener("beforeunload", () => {
  if (window._viz.visualizer) { // STEP 1
    window._viz.visualizer.postMessage(
      "PARENT_REFRESHING",
      window._viz.url
    );
    console.log("PARENT_REFRESHING")
  }
});



window.viz = root => {
  const visualizer = window.open(window._viz.url);
  window._viz.visualizer = visualizer;
  // build flat node list and register events
  // eslint-disable-next-line no-use-before-define
  messages(root)
};


function scan(root) {
  const flater = nodes => {
    const l = nodes.length;
    for (let i = 0; i < l; i += 1) {
      window._viz.flat[nodes[i].nodeName] = nodes[i];
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

}

function messages(root) {

  if (root === undefined) {
    // eslint-disable-next-line no-param-reassign
    root = window.document.body;
  }


  if (root.tagName) {
    window._viz.flat[root.tagName] = root;
  }

  // build the list of all components
  scan(root);

  window.onmessage = m => {
    if (m.data.type === 'COMPONENT_REQUEST') {
      const e = window._viz.flat[m.data.component];

      if (e === undefined) {
        // this is needed if elements are lazy loaded
        scan(root);
        // todo: send notification about rescan?
      } else {
        window._viz.visualizer.postMessage(
          {
            type: 'RENDER_REQUEST',
            data: e.shadowRoot.innerHTML || e.innerHTML,
            component: e.tagName
          },
          window._viz.url
        );
        // eslint-disable-next-line no-console
        console.log('render request for ', e.tagName);
      }
    }


    if (m.data.type === 'ADD_BREAKPOINT') {
      const index = window._viz.breakpoint(m.data.component, m.data.wire);
    }

    if (m.data.type === 'REMOVE_BREAKPOINT') {
      if(window._viz.flat[m.data.component] && window._viz.flat[m.data.component].__wirebundle[m.data.wire]){
      window._viz.flat[m.data.component].__wirebundle[m.data.wire].shift();
    }
    }

    if (m.data.type === 'ANALYZER_READY') {
      let data = root.innerHTML;
      if (root.shadowRoot && root.shadowRoot.innerHTML) {
        data = root.shadowRoot.innerHTML;
      }

      window._viz.visualizer.postMessage(
        {
          type: 'RENDER_REQUEST',
          data,
          component: root.tagName
        },
        window._viz.url
      );
    }
  };
}
