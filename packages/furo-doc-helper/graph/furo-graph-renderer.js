import {LitElement, html, css} from 'lit-element';
import {Theme} from "@furo/framework/theme"
import {FBP} from "@furo/fbp";
import {SVG} from "@svgdotjs/svg.js";
import '@svgdotjs/svg.panzoom.js'

/**
 * `furo-graph-renderer`
 * todo Describe your element
 *
 * @summary todo shortdescription
 * @customElement
 * @demo demo/furo-graph-renderer.html
 * @appliesMixin FBP
 */
class FuroGraphRenderer extends FBP(LitElement) {

  constructor() {
    super();
  }

  draw(graph) {

    var sizes = graph.graph();
    var graphWidth = sizes.width;
    var graphHeight = sizes.height;

    //https://github.com/svgdotjs/svg.panzoom.js


    var canvas = SVG().addTo(this.shadowRoot).panZoom({zoomMin: 0.1, zoomMax: 3, zoomFactor:0.02});

    canvas.viewbox(0,0,graphWidth,graphHeight);
    this.canvas = canvas;

    let nodes = graph.nodes();
    nodes.forEach((v) => {
      let node = graph.node(v);
      if (node.type === "component") {

        let box = canvas.rect(node.width, node.height).move((node.x - node.width / 2), (node.y - node.height / 2)).fill('none');

        box.addClass(node.type);
        if (node.label) {
          let text = canvas.text(node.label).move((node.x - node.width / 2) + 4, (node.y - node.height / 2));
        }
      }
    });
    graph.edges().forEach((e) => {
      let edge = graph.edge(e);
      if (edge.type != "center") {
        let points = edge.points.map((p) => {
          return [p.x, p.y]
        });
        canvas.polyline(points).addClass("line");
      }
    });

    nodes.forEach((v) => {
      let node = graph.node(v);
      if (node.type === "attribute") {

        let box = canvas.rect(node.width, node.height).move((node.x - node.width / 2), (node.y - node.height / 2)).fill('none');

        box.addClass(node.type);
        box.addClass(node.attr._type);

        if (node.label) {
          //canvas.group("label")
          let text = canvas.text(node.label).move((node.x - node.width / 2) + 4, (node.y - node.height / 2));

        }
      }
    });

  }

  /**
   * flow is ready lifecycle method
   */
  __fbpReady() {
    super.__fbpReady();
    //this._FBPTraceWires()
  }

  /**
   * Themable Styles
   * @private
   * @return {CSSResult}
   */
  static get styles() {
    // language=CSS
    return Theme.getThemeForComponent(this.name) || css`
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
            fill: #f5f6f6;
            stroke: #67686a;
            stroke-width: 2;
        }

        .attribute {
            fill: white;
            stroke: #ffc247;
            stroke-width: 1;
        }

        .attribute.method {
            stroke: green;
        }

        .attribute.event {
            stroke: blue;
        }
        .line{
            stroke:brown;
            fill: none;
            stroke-width: 3;
        }
    `
  }


}

window.customElements.define('furo-graph-renderer', FuroGraphRenderer);
