import {LitElement, html, css} from 'lit-element';
import {Theme} from "@furo/framework/theme"
import {FBP} from "@furo/fbp";
import "dagre/dist/dagre.min"
import "./furo-graph-renderer"

/**
 * `furo-show-flow`
 * todo Describe your element
 *
 * @summary todo shortdescription
 * @customElement
 * @demo demo/furo-show-flow.html
 * @appliesMixin FBP
 */
class FuroShowFlow extends FBP(LitElement) {

  constructor() {
    super();

  }

  parseTemplate(template) {
    this.graph = new dagre.graphlib.Graph({multigraph: false, compound: true});
    // graph settings
    this.graph.setGraph({
      "rankdir": "LR",
      "align": "UL",
      ranksep: 50,
      nodesep: 20,
      edgesep: 40,
      marginx: 40,
      marginy: 40
    });
    this._collectedWires = {methods: [], events: []};
    this._recursiveParse(template, "");
    this._setWireEdges();
    dagre.layout(this.graph);

    this._FBPTriggerWire("--graph", this.graph);


  }

  _setWireEdges() {
    // extract the wire parts from all attributes
    let sendingWires = {};
    let receivingWires = {};
    this._collectedWires.events.forEach((attr) => {
      let rawwires = attr.value.split(",");
      rawwires.forEach((w) => {
        let match = w.trim().match(/^([^\(\^][a-z\-_]+)/gi);
        if (match !== null) {
          if (sendingWires[match[0]] === undefined) {
            sendingWires[match[0]] = []
          }
          sendingWires[match[0]].push(attr);
        }

        // park a value
        if (w.trim().startsWith("((")) {
          this.graph.setNode("park-" + w.trim(), {
            width: 200,
            height: 30,
            type: "park",
            label: w.trim()
          });
          this.graph.setEdge(attr._graphID, "park-" + w.trim(), {
            weight: 1,
            type: "park"
          });
        }


        // bubbling nonbubbling a value
        if (w.trim().startsWith("^")) {
          let eventtype = w.trim().startsWith("^^") ? "bubbling" : "nonbubbling";


          this.graph.setNode(attr._graphID + "-" + w.trim(), {
            width: 200,
            height: 30,
            type: eventtype,
            label: w.trim()
          });
          this.graph.setEdge(attr._graphID, attr._graphID + "-" + w.trim(), {
            weight: 1,
            type: "event"

          });
        }

        // bubbling nonbubbling a value
        if (w.trim().startsWith("-^")) {
          this.graph.setNode(attr._graphID + "-" + w.trim(), {
            width: 200,
            height: 30,
            type: "hostevent",
            label: w.trim()
          });
          this.graph.setEdge(attr._graphID, attr._graphID + "-" + w.trim(), {
            weight: 1,
            type: "event"
          });
        }

      })
    });

    this._collectedWires.methods.forEach((attr) => {
      let rawwires = attr.value.split(",");
      rawwires.forEach((w) => {
        let match = w.trim().match(/^([^\(\(][a-z\-_]+)/gi);
        if (match !== null) {
          if (receivingWires[match[0]] === undefined) {
            receivingWires[match[0]] = []
          }
          receivingWires[match[0]].push(attr);
        }
      })
    });


    // setEdges for every sendingWire element with receivingWire element
    for (let wire in sendingWires) {
      sendingWires[wire].forEach((source) => {
        if (receivingWires[wire]) {
          receivingWires[wire].forEach((target) => {
            this.graph.setEdge(source._graphID, target._graphID, {
              weight: 1,
              source: source,
              target: target,
              wirename: wire
            })
          })
        } else {
          // no target element
          // add node and set edge
          this.graph.setNode(source._graphID + "-notarget", {
            width: 30,
            height: 30,
            type: "notarget",
            source: source,
            wirename: wire
          });
          this.graph.setEdge(source._graphID, source._graphID + "-notarget", {
            weight: 1,
            source: source,
            wirename: wire
          })
        }
      });
    }

    // find edges without source (for things like --pageActivated)
    for (let wire in receivingWires) {
      receivingWires[wire].forEach((source) => {
        if (!sendingWires[wire]) {
          // no target element
          // add node and set edge
          this.graph.setNode(source._graphID + "-nosource", {
            width: 30,
            height: 30,
            type: "nosource",
            source: source,
            wirename: wire
          });
          this.graph.setParent(source._graphID + "-nosource", source.parentComponentID);
          this.graph.setEdge(source._graphID + "-nosource", source._graphID, {
            weight: 1,
            source: source,
            wirename: wire
          });
        }
      });
    }

  }

  _recursiveParse(node, parentNode) {
// todo switch to childNodes ignore TEXT_NODE and store COMMENT_NODE (8) to the next ELEMENT_NODE (1)
// https://developer.mozilla.org/en-US/docs/Web/API/Node/nodeType
    if (node.childNodes && node.childNodes.length > 0) {
      // start with empty
      let description = "";
      Array.from(node.childNodes).forEach((e, i) => {
        if (e.nodeType === 8) {
          description = e.textContent
        }
        if (e.nodeType === 1) {
          let nodeID = parentNode + "." + e.tagName + "-" + i;
          e._graphID = nodeID;
          e.description = description;
          // clear description for next loop
          description = "";
          this.graph.setNode(nodeID, {label: e.tagName, width: 440, height: 100, type: "component", node: e});

          if (parentNode !== "") {
            //set parent
            this.graph.setParent(nodeID, parentNode)
          }
          // Attributes
          Array.from(e.attributes).forEach((attr) => {
            let attrNodeID = nodeID + "-" + attr.name;
            attr._graphID = attrNodeID;
            attr.parentComponentID = nodeID;
            this.graph.setNode(attrNodeID, {
              label: attr.name,
              width: 200,
              height: 30,
              type: "attribute",
              attr: attr,
              value: attr.value
            });

            this.graph.setParent(attrNodeID, nodeID);

            // add center node
            this.graph.setNode(nodeID + "-center", {type: "center"});
            this.graph.setParent(nodeID + "-center", nodeID);

            // collect the event wires
            if (attr.name.startsWith("@-")) {
              this._collectedWires.events.push(attr);
              attr._type = "event";
              //einen edge setzen um @ immer rechts zu haben
              this.graph.setEdge(nodeID + "-center", attrNodeID, {type: "center", weight: 15});
            } else {
              //einen edge setzen um ƒ und alle anderen immer links zu haben
              this.graph.setEdge(attrNodeID, nodeID + "-center", {type: "center", weight: 15});
            }
            // collect the method wires
            if (attr.name.startsWith("ƒ-")) {
              this._collectedWires.methods.push(attr);
              attr._type = "method";
            }


          });
          this._recursiveParse(e, nodeID)
        }
      })
    }
  }

  /**
   * @private
   * @return {Object}
   */
  static get properties() {
    return {
      /**
       * Description
       */
      myBool: {type: Boolean}
    };
  }

  /**
   * flow is ready lifecycle method
   */
  _FBPReady() {
    super._FBPReady();
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
        }

        :host([hidden]) {
            display: none;
        }
    `
  }


  /**
   * @private
   * @returns {TemplateResult}
   */
  render() {
    // language=HTML
    return html`
      <furo-graph-renderer ƒ-draw="--graph"></furo-graph-renderer>
    `;
  }
}

window.customElements.define('furo-show-flow', FuroShowFlow);
