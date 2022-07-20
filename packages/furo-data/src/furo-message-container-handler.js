import { LitElement, css } from 'lit';
import { NodeEvent } from '@furo/framework/src/EventTreeNode';

/**
 * `furo-mc-handler`
 *  Handles furo.MessageContainer messages
 *
 * @summary furo.MessageContainer handler
 * @customElement furo-mc-handler
 * @appliesMixin FBP
 */
class FuroMessageContainerHandler extends LitElement {
  constructor() {
    super();
    // the Message Container Data Object
    this.messageDO = {};
  }

  /**
   * Inject a raw messageContainer response
   *
   * @param {JSON} with furo.messageContainer signature
   */
  injectRaw(messageContainer) {
    setTimeout(() => {
      // used to *reset* the metas according to the spec
      this.mcDO.broadcastEvent(
        new NodeEvent('before-new-data-inject', this.mcDO)
      );
      // this.mcDO broadcast will disable validation during setting the values
      this.mcDO.broadcastEvent(new NodeEvent('disable-validation', this.mcDO));

      this.mcDO._rawEntity = messageContainer;
      this.mcDO._value = messageContainer;
      this.mcDO._pristine = true;
      this.mcDO._isValid = true;

      /**
       * Broadcast Event
       * this.mcDO will set all fields as pristine and end enable the validation
       */
      this.mcDO.broadcastEvent(new NodeEvent('new-data-injected', this.mcDO));

      /**
       * @fires data-injected
       *
       * ✋ Internal Event from EntityNode which you can use in the targeted components!
       *
       * Fired when `ƒ-inject-raw` is completed and fresh data was injected. Only fired from EntityNode which is the root.
       *
       *
       * detail payload: **{NodeEvent}**
       */
      this.mcDO.dispatchNodeEvent(
        new NodeEvent('data-injected', this.mcDO, false)
      );

      // set empty state on all fields
      this.rootNode.__childNodes.forEach(node => {
        this.rootNode[node._name]._setState({
          state: 'None',
          description: '',
          field: '',
        });
      });

      if (messageContainer !== undefined) {
        messageContainer.details.forEach(messageSet => {
          if (messageSet.fields) {
            const messageDetails = messageSet.fields;
            messageDetails.forEach(message => {
              const path = message.field.split('.');
              if (path.length > 0) {
                // rest wieder in message reinwerfen
                // eslint-disable-next-line no-param-reassign
                message.field = path.slice(1).join('.');
                // eslint-disable-next-line no-param-reassign
                message.state = this._getStateFromMessageType(
                  messageSet['@type'].replace(/.*\//, '')
                );
                if (this.rootNode[path[0]]) {
                  this.rootNode[path[0]]._setState(message);
                } else {
                  // eslint-disable-next-line no-console
                  console.warn('Unknown field', path);
                }
              }
            });
          }
        });
      }
    }, 1);
  }

  /**
   * bindMc Bind a messagecontainer fieldnode
   * @public
   * @param fieldNode
   */
  bindMc(fieldNode) {
    this.mcDO = fieldNode;
    this.rootNode = fieldNode.__parentNode;
  }

  /**
   * Themable Styles
   * @private
   * @return {CSSResult}
   */
  static get styles() {
    // language=CSS
    return css`
      :host {
        display: none;
      }
    `;
  }

  // eslint-disable-next-line
  _getStateFromMessageType(messageType) {
    switch (messageType) {
      case 'furo.ErrorMessage':
        return 'Error';

      case 'furo.WarningMessage':
        return 'Warning';

      case 'furo.InformationMessage':
        return 'Information';

      case 'furo.SuccessMessage':
        return 'Success';

      default:
        return undefined;
    }
  }
}

window.customElements.define(
  'furo-message-container-handler',
  FuroMessageContainerHandler
);
