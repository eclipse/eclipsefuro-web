import { LitElement, html, css } from 'lit';
import { FBP } from '@furo/fbp';
import 'dagre/dist/dagre.min';
import './furo-graph-renderer.js';

/**
 * `furo-show-flow`
 * Renders a flow from dom node or html source
 *
 * @customElement
 * @appliesMixin FBP
 */
class FuroShowFlow extends FBP(LitElement) {
  /**
   * Parse html content
   * @param {string} source
   */
  parseHtml(source) {
    const tpl = document.createElement('div');
    tpl.innerHTML = source;
    this.parseTemplate(tpl);
  }

  /**
   * Parse a dom node
   * @param {dom} dom node
   */
  parseTemplate(template) {
    // eslint-disable-next-line no-undef
    this.graph = new dagre.graphlib.Graph({ multigraph: false, compound: true });
    // graph settings
    this.graph.setGraph({
      rankdir: 'LR',
      align: 'UL',
      ranksep: 50,
      nodesep: 20,
      edgesep: 40,
      marginx: 40,
      marginy: 40,
    });
    this._collectedWires = { methods: [], events: [] };
    this._recursiveParse(template, '');
    this._setWireEdges();
    // eslint-disable-next-line no-undef
    dagre.layout(this.graph);

    this._FBPTriggerWire('--graph', this.graph);
  }

  _setWireEdges() {
    // extract the wire parts from all attributes
    const sendingWires = {};
    const receivingWires = {};
    this._collectedWires.events.forEach(attr => {
      const rawwires = attr.value.split(',');
      rawwires.forEach(w => {
        // eslint-disable-next-line no-useless-escape
        const match = w.trim().match(/^([^\(\^][a-z\-_]+)/gi);
        if (match !== null) {
          if (sendingWires[match[0]] === undefined) {
            sendingWires[match[0]] = [];
          }
          sendingWires[match[0]].push(attr);
        }

        // park a value
        if (w.trim().startsWith('((')) {
          this.graph.setNode(`park-${w.trim()}`, {
            width: 200,
            height: 30,
            type: 'park',
            label: w.trim(),
          });
          this.graph.setEdge(attr._graphID, `park-${w.trim()}`, {
            weight: 1,
            type: 'park',
          });
        }

        // bubbling nonbubbling a value
        if (w.trim().startsWith('^')) {
          const eventtype = w.trim().startsWith('^^') ? 'bubbling' : 'nonbubbling';

          this.graph.setNode(`${attr._graphID}-${w.trim()}`, {
            width: 200,
            height: 30,
            type: eventtype,
            label: w.trim(),
          });
          this.graph.setEdge(attr._graphID, `${attr._graphID}-${w.trim()}`, {
            weight: 1,
            type: 'event',
          });
        }

        // bubbling nonbubbling a value
        if (w.trim().startsWith('-^')) {
          this.graph.setNode(`${attr._graphID}-${w.trim()}`, {
            width: 200,
            height: 30,
            type: 'hostevent',
            label: w.trim(),
          });
          this.graph.setEdge(attr._graphID, `${attr._graphID}-${w.trim()}`, {
            weight: 1,
            type: 'event',
          });
        }
      });
    });

    this._collectedWires.methods.forEach(attr => {
      const rawwires = attr.value.split(',');
      rawwires.forEach(w => {
        // eslint-disable-next-line no-useless-escape
        const match = w.trim().match(/^([^\(\(][a-z\-_]+)/gi);
        if (match !== null) {
          if (receivingWires[match[0]] === undefined) {
            receivingWires[match[0]] = [];
          }
          receivingWires[match[0]].push(attr);
        }
      });
    });

    // setEdges for every sendingWire element with receivingWire element
    // eslint-disable-next-line guard-for-in,no-restricted-syntax
    for (const wire in sendingWires) {
      sendingWires[wire].forEach(source => {
        if (receivingWires[wire]) {
          receivingWires[wire].forEach(target => {
            this.graph.setEdge(source._graphID, target._graphID, {
              weight: 1,
              source,
              target,
              wirename: wire,
            });
          });
        } else {
          // no target element
          // add node and set edge
          this.graph.setNode(`${source._graphID}-notarget`, {
            width: 30,
            height: 30,
            type: 'notarget',
            source,
            wirename: wire,
          });
          this.graph.setEdge(source._graphID, `${source._graphID}-notarget`, {
            weight: 1,
            source,
            wirename: wire,
          });
        }
      });
    }

    // find edges without source (for things like --pageActivated)
    // eslint-disable-next-line guard-for-in,no-restricted-syntax
    for (const wire in receivingWires) {
      receivingWires[wire].forEach(source => {
        if (!sendingWires[wire]) {
          // no target element
          // add node and set edge
          this.graph.setNode(`${source._graphID}-nosource`, {
            width: 30,
            height: 30,
            type: 'nosource',
            source,
            wirename: wire,
          });
          this.graph.setParent(`${source._graphID}-nosource`, source.parentComponentID);
          this.graph.setEdge(`${source._graphID}-nosource`, source._graphID, {
            weight: 1,
            source,
            wirename: wire,
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
      let description = '';
      Array.from(node.childNodes).forEach((e, i) => {
        if (e.nodeType === 8) {
          description = e.textContent;
        }
        if (e.nodeType === 1) {
          const nodeID = `${parentNode}.${e.tagName}-${i}`;
          e._graphID = nodeID;
          e.description = description;
          // clear description for next loop
          description = '';
          this.graph.setNode(nodeID, {
            label: e.tagName,
            width: 440,
            height: 100,
            type: 'component',
            node: e,
          });

          if (parentNode !== '') {
            // set parent
            this.graph.setParent(nodeID, parentNode);
          }
          // Attributes
          Array.from(e.attributes).forEach(attr => {
            const attrNodeID = `${nodeID}-${attr.name}`;
            // eslint-disable-next-line no-param-reassign
            attr._graphID = attrNodeID;
            // eslint-disable-next-line no-param-reassign
            attr.parentComponentID = nodeID;
            this.graph.setNode(attrNodeID, {
              label: attr.name,
              width: 200,
              height: 30,
              type: 'attribute',
              attr,
              value: attr.value,
            });

            this.graph.setParent(attrNodeID, nodeID);

            // add center node
            this.graph.setNode(`${nodeID}-center`, { type: 'center' });
            this.graph.setParent(`${nodeID}-center`, nodeID);

            // collect the event wires
            if (attr.name.startsWith('@-')) {
              this._collectedWires.events.push(attr);
              // eslint-disable-next-line no-param-reassign
              attr._type = 'event';
              // einen edge setzen um @ immer rechts zu haben
              this.graph.setEdge(`${nodeID}-center`, attrNodeID, { type: 'center', weight: 15 });
            } else {
              // einen edge setzen um ƒ und alle anderen immer links zu haben
              this.graph.setEdge(attrNodeID, `${nodeID}-center`, { type: 'center', weight: 15 });
            }
            // collect the method wires
            if (attr.name.startsWith('ƒ-')) {
              this._collectedWires.methods.push(attr);
              // eslint-disable-next-line no-param-reassign
              attr._type = 'method';
            }
          });
          this._recursiveParse(e, nodeID);
        }
      });
    }
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
        }

        :host([hidden]) {
          display: none;
        }
      `
    );
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
