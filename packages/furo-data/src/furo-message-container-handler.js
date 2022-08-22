import { LitElement, css } from 'lit';
import { NodeEvent } from '@furo/framework/src/EventTreeNode';

/**
 * `furo-message-container-handler`
 *  will update the 'value states' of all fields of your data object from the injected `furo.MessageContainer` message.
 *
 *
 *
 * @fires {void} success - Fired when success field was set on the received `furo.MessageContainer`.
 * @fires {void} no-success - Fired when the success field on the `furo.MessageContainer` was not set or is set to false.
 * @fires {[]furo.ConfirmationMessage} has-confirmation - Fired when the message container contains any confirmation field, with list with all `furo.ConfirmationMessage`.
 * @fires {[]furo.MCFieldViolation} has-errors - Fired when the message container contains any error field, with list with all error fields.
 * @fires {[]furo.MCFieldViolation} has-success - Fired when the message container contains any success field, with list with all success fields.
 * @fires {[]furo.MCFieldViolation} has-warnings - Fired when the message container contains any warning field, with list with all warning fields.
 * @fires {[]furo.MCFieldViolation} has-infos - Fired when the message container contains any info field, with list with all info fields.
 *
 * @summary furo.MessageContainer handler
 * @customElement furo-mc-handler
 * @appliesMixin FBP
 */
class FuroMessageContainerHandler extends LitElement {
  constructor() {
    super();
    /**
     * the Message Container Data Object
     * @private
     */
    this.messageDO = {};
  }

  /**
   * This will set the corresponding value-states on the sibling nodes of the bounded `furo.MessageContainer` field.
   *
   * @param messageContainer {JSON} with `furo.MessageContainer` signature
   */
  injectRaw(messageContainer) {
    setTimeout(() => {
      // used to *reset* the metas according to the spec
      this.mcDO.broadcastEvent(
        new NodeEvent('before-new-data-inject', this.mcDO)
      );
      // this.mcDO broadcast will disable validation during setting the values
      this.mcDO.broadcastEvent(new NodeEvent('disable-validation', this.mcDO));

      this.mcDO._value = messageContainer;
      this.mcDO._pristine = true;
      this.mcDO._isValid = true;

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

      if (!(this.mcDO._value !== undefined && this.mcDO._value.details)) {
        // no details
        this.mcDO.details._value = [];
      }

      /**
       * Broadcast Event
       * this.mcDO will set all fields as pristine and end enable the validation
       *
       * This event is used in the furo-ui5-message-container-display component
       */
      this.mcDO.broadcastEvent(new NodeEvent('new-data-injected', this.mcDO));

      if (messageContainer.success) {
        /**
         * @event success
         * Fired when success field was set on the received messagecontainer.
         */
        const customEvent = new Event('success', {
          composed: true,
          bubbles: true,
        });
        this.dispatchEvent(customEvent);
      } else {
        /**
         * @event no-success
         * Fired when success field on the messagecontainer was not set or is set to false
         */
        const customEvent = new Event('no-success', {
          composed: true,
          bubbles: true,
        });
        this.dispatchEvent(customEvent);
      }

      // count items of each type
      const errs = [];
      const warn = [];
      const success = [];
      const info = [];
      const confirm = [];

      this.mcDO.details.repeats.forEach(item => {
        const type = item['@type']._value.replace(/.*\//, '');
        switch (type) {
          case 'furo.ErrorMessage':
            errs.push(...item.fields.repeats);
            break;

          case 'furo.WarningMessage':
            warn.push(...item.fields.repeats);
            break;

          case 'furo.SuccessMessage':
            success.push(...item.fields.repeats);
            break;

          case 'furo.InformationMessage':
            info.push(...item.fields.repeats);
            break;

          case 'furo.ConfirmationMessage':
            confirm.push(item);
            break;
          default:
        }
      });

      if (confirm.length > 0) {
        /**
         * @event has-confirmation
         * Fired when the message container contains any confirmation field
         * detail payload: list with all confirmation fields
         */
        const customEvent = new Event('has-confirmation', {
          composed: true,
          bubbles: true,
        });
        customEvent.detail = confirm;
        this.dispatchEvent(customEvent);
      }

      if (errs.length > 0) {
        /**
         * @event has-errors
         * Fired when the message container contains any error field
         * detail payload: list with all error fields
         */
        const customEvent = new Event('has-errors', {
          composed: true,
          bubbles: true,
        });
        customEvent.detail = errs;
        this.dispatchEvent(customEvent);
      }
      if (warn.length > 0) {
        /**
         * @event has-warnings
         * Fired when the message container contains any error field
         * detail payload: list with all warning fields
         */
        const customEvent = new Event('has-warnings', {
          composed: true,
          bubbles: true,
        });
        customEvent.detail = warn;
        this.dispatchEvent(customEvent);
      }

      if (success.length > 0) {
        /**
         * @event has-success
         * Fired when the message container contains any error field
         * detail payload: list with all success fields
         */
        const customEvent = new Event('has-success', {
          composed: true,
          bubbles: true,
        });
        customEvent.detail = success;
        this.dispatchEvent(customEvent);
      }

      if (info.length > 0) {
        /**
         * @event has-infos
         * Fired when the message container contains any error field
         * detail payload: list with all info fields
         */
        const customEvent = new Event('has-infos', {
          composed: true,
          bubbles: true,
        });
        customEvent.detail = info;
        this.dispatchEvent(customEvent);
      }
    }, 1);
  }

  _applyValueState() {
    this.mcDO._value.details.forEach(messageSet => {
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
            if (this.rootNode && this.rootNode[path[0]]) {
              this.rootNode[path[0]]._setState(message);
            } else {
              // eslint-disable-next-line no-console
              console.warn('Unknown target field', path);
            }
          }
        });
      }

      if (messageSet.field_violations) {
        const messageDetails = messageSet.field_violations;
        messageDetails.forEach(message => {
          const path = message.field.split('.');
          if (path.length > 0) {
            // rest wieder in message reinwerfen
            // eslint-disable-next-line no-param-reassign
            message.field = path.slice(1).join('.');
            // eslint-disable-next-line no-param-reassign
            message.state = 'Error';

            if (this.rootNode && this.rootNode[path[0]]) {
              this.rootNode[path[0]]._setState(message);
            } else {
              // eslint-disable-next-line no-console
              console.warn('Unknown target field', path);
            }
          }
        });
      }
    });
  }

  _clearValueStates() {
    if (this.rootNode) {
      // set empty state on all fields
      this.rootNode.__childNodes.forEach(node => {
        this.rootNode[node._name]._setState({
          state: 'None',
          description: '',
          field: '',
        });
      });
    }
  }

  /**
   * bindMc Bind a `furo.MessageContainer` fieldnode.
   *
   * The updates from the injected raw messagecontainer are applied to the siblings of the bounded node.
   *
   * @public
   * @param fieldNode {FieldNode} Messagecontainer fieldnode
   */
  bindMessageContainer(fieldNode) {
    this.mcDO = fieldNode;

    this.mcDO.addEventListener('new-data-injected', () => {
      this._clearValueStates();
      this._applyValueState();
    });
  }

  /**
   * bindMc Bind a `furo.MessageContainer` fieldnode.
   *
   * The updates from the injected raw messagecontainer are applied to the siblings of the bounded node.
   *
   * @public
   * @param fieldNode {FieldNode} Messagecontainer fieldnode
   */
  bindRootNode(fieldNode) {
    this.rootNode = fieldNode;
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

  /**
   *
   * @param messageType
   * @returns {string|undefined}
   * @private
   */
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
