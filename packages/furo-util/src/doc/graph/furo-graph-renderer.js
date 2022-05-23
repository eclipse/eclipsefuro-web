import { LitElement, css } from 'lit';
import { FBP } from '@furo/fbp';
import { SVG } from '@svgdotjs/svg.js';
import '@svgdotjs/svg.panzoom.js/dist/svg.panzoom.esm.js';

/**
 * `furo-graph-renderer`
 * Paint a SVG from the received graph data
 *
 * @fires {node} show-tooltip-requested -  Fired when
 * @fires {node} show-tooltip-requested -  Fired on mouseover of a attr node
 * @fires {node} show-tooltip-requested -  Fired on mouseover of a attr node
 *
 * @summary paints a dagree graph as svg
 * @customElement
 * @appliesMixin FBP
 */
class FuroGraphRenderer extends FBP(LitElement) {
  /**
   * Draw the graph as svg
   * @param {dagre} graph - Dagre graph
   */
  draw(graph) {
    const sizes = graph.graph();
    const graphWidth = sizes.width;
    const graphHeight = sizes.height;

    // remove old image on redraw
    const i = this.shadowRoot.querySelector('svg');
    if (i) {
      i.remove();
    }
    const canvas = SVG()
      .addTo(this.shadowRoot)
      .panZoom({ zoomMin: 0.1, zoomMax: 10, zoomFactor: 0.115 });

    canvas.viewbox(0, 0, graphWidth, graphHeight);
    this.canvas = canvas;

    const nodes = graph.nodes();
    nodes.forEach(v => {
      const node = graph.node(v);
      // boxes for the components
      if (node.type === 'component') {
        const box = canvas
          .rect(node.width, node.height)
          .move(node.x - node.width / 2, node.y - node.height / 2)
          .fill('none');
        box.radius(5);
        box.addClass(node.type);

        // set tooltip if exist
        if (node.node.description !== '') {
          // add info
          box.addClass('withdescription');
          box.mouseover(() => {
            const elem = {
              duration: 5000,
              cr: box.node.getBoundingClientRect(),
              label: node.node.description,
            };

            const customEvent = new Event('show-tooltip-requested', {
              composed: true,
              bubbles: true,
            });
            customEvent.detail = elem;
            this.dispatchEvent(customEvent);
          });
        }
        /*
        box.click((e) => {
          console.log(node.node)
        })

         */
      }
    });

    // draw the lines
    graph.edges().forEach(e => {
      const edge = graph.edge(e);
      if (edge.type !== 'center') {
        const points = edge.points.map(p => [p.x, p.y]);
        const line = canvas.polyline(points).addClass('line');
        line.addClass(edge.type);

        // send tooltip event for nodes with values in the attr
        // debounce tooltip on lines
        let timout;
        let toRegistred = false;
        line.mouseover(() => {
          if (!toRegistred) {
            toRegistred = true;
            timout = setTimeout(() => {
              const elem = {
                duration: 5000,
                cr: {
                  top: e.clientY - 10,
                  bottom: e.clientY + 10,
                  x: e.clientX,
                  y: e.clientY,
                  left: e.clientX - 10,
                  width: 20,
                  height: 20,
                },
                label: edge.wirename,
              };

              const customEvent = new Event('show-tooltip-requested', {
                composed: true,
                bubbles: true,
              });
              customEvent.detail = elem;
              this.dispatchEvent(customEvent);
            }, 60);
          }
        });

        // clear the timeout
        line.mouseout(() => {
          clearTimeout(timout);
          toRegistred = false;
        });
      }
    });

    // component Labels over the edges
    nodes.forEach(v => {
      const node = graph.node(v);
      if (node.type === 'component') {
        const background = canvas
          .rect(10, 25)
          .move(node.x - node.width / 2, node.y - node.height / 2)
          .addClass('boxlabelbg');
        background.radius(5);
        if (node.label) {
          const text = canvas
            .text(node.label)
            .move(node.x - node.width / 2 + 25, node.y - node.height / 2 + 2);
          // width is taken from the image, so wait a moment.
          setTimeout(() => {
            background.width(text.length() + 50);
          }, 90);

          // send tooltip event for nodes with values in the attr
          text.mouseover(() => {
            const elem = {
              duration: 5000,
              cr: text.node.getBoundingClientRect(),
              label: node.label,
            };
            const customEvent = new Event('show-tooltip-requested', {
              composed: true,
              bubbles: true,
            });
            customEvent.detail = elem;
            this.dispatchEvent(customEvent);
          });
        }
      }
    });

    nodes.forEach(v => {
      const node = graph.node(v);
      if (node.type === 'attribute') {
        // add receiving circle
        // if(node.attr._type === "method"){
        //  let r = canvas.circle(12, 12).move((node.x - node.width / 2) -6, (node.y - node.height / 2)+6).addClass('line');
        // }

        let box = canvas
          .rect(node.width, node.height)
          .move(node.x - node.width / 2, node.y - node.height / 2);
        box.radius(3);
        box.addClass(node.type);
        box.addClass(node.attr._type);

        // add green bar to the left
        if (node.attr._type === 'method') {
          box = canvas
            .rect(10, node.height)
            .move(node.x - node.width / 2, node.y - node.height / 2);
          box.radius(3);
          box.addClass('methodindicator');
        }

        // add blue bar to the right
        if (node.attr._type === 'event') {
          box = canvas
            .rect(10, node.height)
            .move(node.x + node.width / 2 - 10, node.y - node.height / 2);
          box.radius(3);
          box.addClass('eventindicator');
        }

        // add classes for ^^bubbling, -^host, ^nonbubbling, set-property
        // for bool like flex
        if (!node.attr.value) {
          box.addClass('flag');
          // add black bar to the left

          const indicator = canvas
            .rect(10, node.height)
            .move(node.x - node.width / 2, node.y - node.height / 2);
          indicator.radius(3);
          indicator.addClass('flagindicator');

          // send tooltip event for nodes with values in the attr
          box.mouseover(() => {
            const elem = {
              duration: 5000,
              cr: box.node.getBoundingClientRect(),
              label: `Flag: ${node.label}`,
            };
            const customEvent = new Event('show-tooltip-requested', {
              composed: true,
              bubbles: true,
            });
            customEvent.detail = elem;
            this.dispatchEvent(customEvent);
          });
        } else {
          // send tooltip event for nodes with values in the attr
          box.mouseover(() => {
            const elem = {
              duration: 5000,
              cr: box.node.getBoundingClientRect(),
              label: `${node.label} = ${node.attr.value}`,
            };

            const customEvent = new Event('show-tooltip-requested', {
              composed: true,
              bubbles: true,
            });
            customEvent.detail = elem;
            this.dispatchEvent(customEvent);
          });
        }

        if (node.label) {
          // eslint-disable-next-line no-unused-vars
          const text = canvas
            .text(node.label)
            .move(node.x - node.width / 2 + 15, node.y - node.height / 2 + 5);
        }
      }
      if (node.type === 'notarget') {
        const circle = canvas
          .circle(node.width, node.height)
          .move(node.x - node.width / 2, node.y - node.height / 2)
          .fill('red');

        // send tooltip event
        circle.mouseover(() => {
          const elem = {
            duration: 5000,
            cr: circle.node.getBoundingClientRect(),
            label: node.wirename,
          };
          const customEvent = new Event('show-tooltip-requested', {
            composed: true,
            bubbles: true,
          });
          customEvent.detail = elem;
          this.dispatchEvent(customEvent);
        });
      }
      if (node.type === 'nosource') {
        const circle = canvas
          .circle(node.width, node.height)
          .move(node.x - node.width / 2, node.y - node.height / 2)
          .fill('orange');
        // send tooltip event
        circle.mouseover(() => {
          const elem = {
            duration: 5000,
            cr: circle.node.getBoundingClientRect(),
            label: node.wirename,
          };
          const customEvent = new Event('show-tooltip-requested', {
            composed: true,
            bubbles: true,
          });
          customEvent.detail = elem;
          this.dispatchEvent(customEvent);
        });
      }

      if (node.type === 'park') {
        const box = canvas
          .rect(node.width, node.height)
          .move(node.x - node.width / 2, node.y - node.height / 2);
        box.radius(3);
        box.addClass('park');
        if (node.label) {
          // eslint-disable-next-line no-unused-vars
          const text = canvas
            .text(node.label)
            .move(node.x - node.width / 2 + 15, node.y - node.height / 2 + 5);
        }
        // send tooltip event
        box.mouseover(() => {
          const elem = {
            duration: 5000,
            cr: box.node.getBoundingClientRect(),
            label: `park to var ${node.label}`,
          };
          const customEvent = new Event('show-tooltip-requested', {
            composed: true,
            bubbles: true,
          });
          customEvent.detail = elem;
          this.dispatchEvent(customEvent);
        });
      }
      if (node.type === 'bubbling') {
        const box = canvas
          .rect(node.width, node.height)
          .move(node.x - node.width / 2, node.y - node.height / 2);
        box.radius(3);
        box.addClass('bubbling');
        if (node.label) {
          // eslint-disable-next-line no-unused-vars
          const text = canvas
            .text(node.label)
            .move(node.x - node.width / 2 + 15, node.y - node.height / 2 + 5);
        }
        // send tooltip event
        box.mouseover(() => {
          const elem = {
            duration: 5000,
            cr: box.node.getBoundingClientRect(),
            label: `bubbling event ${node.label}`,
          };
          const customEvent = new Event('show-tooltip-requested', {
            composed: true,
            bubbles: true,
          });
          customEvent.detail = elem;
          this.dispatchEvent(customEvent);
        });
      }
      if (node.type === 'nonbubbling') {
        const box = canvas
          .rect(node.width, node.height)
          .move(node.x - node.width / 2, node.y - node.height / 2);
        box.radius(3);
        box.addClass('nonbubbling');
        if (node.label) {
          // eslint-disable-next-line no-unused-vars
          const text = canvas
            .text(node.label)
            .move(node.x - node.width / 2 + 15, node.y - node.height / 2 + 5);
        }
        // send tooltip event
        box.mouseover(() => {
          const elem = {
            duration: 5000,
            cr: box.node.getBoundingClientRect(),
            label: `event ${node.label}`,
          };
          const customEvent = new Event('show-tooltip-requested', {
            composed: true,
            bubbles: true,
          });
          customEvent.detail = elem;
          this.dispatchEvent(customEvent);
        });
      }
      if (node.type === 'hostevent') {
        const box = canvas
          .rect(node.width, node.height)
          .move(node.x - node.width / 2, node.y - node.height / 2);
        box.radius(3);
        box.addClass('hostevent');
        if (node.label) {
          // eslint-disable-next-line no-unused-vars
          const text = canvas
            .text(node.label)
            .move(node.x - node.width / 2 + 15, node.y - node.height / 2 + 5);
        }
        // send tooltip event
        box.mouseover(() => {
          const elem = { duration: 5000, cr: box.node.getBoundingClientRect(), label: node.label };
          const customEvent = new Event('show-tooltip-requested', {
            composed: true,
            bubbles: true,
          });
          customEvent.detail = elem;
          this.dispatchEvent(customEvent);
        });
      }
    });
  }

  /**
   * flow is ready lifecycle method
   * @private
   */
  _FBPReady() {
    super._FBPReady();
    // this._FBPTraceWires()
  }

  /**
   * Themable Styles
   * @private
   * @return {CSSResult}
   */
  static get styles() {
    // language=CSS
    return (
      css`
        :host {
          display: block;
          height: 100%;
          width: 100%;
          overflow: hidden;
        }

        :host([hidden]) {
          display: none;
        }

        svg {
          width: 100%;
          height: 100%;
        }

        .component {
          fill: #f6f6f6;
          stroke: #67686a;
          stroke-width: 2;
        }

        .boxlabelbg {
          fill: white;
          stroke: #67686a;
          stroke-width: 2;
        }

        .component.withdescription {
          stroke-dasharray: 20 4;
        }

        .attribute {
          fill: white;
          stroke: #ffb65b;
          stroke-width: 2;
        }

        .attribute.method {
          stroke: #4caf50;
        }

        .methodindicator {
          stroke: #4caf50;
          fill: #4caf50;
        }

        .eventindicator {
          stroke: #02a8f4;
          fill: #02a8f4;
        }

        .attribute.event {
          stroke: #02a8f4;
        }

        .attribute.flag {
          stroke: #686868;
        }

        .flagindicator {
          stroke: #686868;
          fill: #686868;
        }

        .park {
          stroke: #686868;
          fill: none;
          stroke-width: 3;
        }

        .bubbling,
        .hostevent,
        .nonbubbling {
          stroke: #fa4600;
          fill: none;
          stroke-width: 3;
        }

        .line.event {
          stroke: #fa4600;
          fill: none;
          stroke-width: 4;
        }

        .line {
          stroke: #02a8f4;
          fill: none;
          stroke-width: 4;
        }

        .line.park {
          stroke: #070707;
          fill: none;
          stroke-width: 4;
        }

        .line:hover {
          stroke: #f4c633;
        }
      `
    );
  }
}

window.customElements.define('furo-graph-renderer', FuroGraphRenderer);
