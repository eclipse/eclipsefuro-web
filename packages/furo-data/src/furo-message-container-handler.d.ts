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
export class FuroMessageContainerHandler extends LitElement {
    /**
     * Themable Styles
     * @private
     * @return {CSSResult}
     */
    private static get styles();
    /**
     * the Message Container Data Object
     * @private
     */
    private messageDO;
    /**
     * This will set the corresponding value-states on the sibling nodes of the bounded `furo.MessageContainer` field.
     *
     * @param messageContainer {JSON} with `furo.MessageContainer` signature
     */
    injectRaw(messageContainer: JSON): void;
    _updateCountersAndFireEvents(): void;
    _applyValueState(): void;
    _clearValueStates(): void;
    /**
     * bindMc Bind a `furo.MessageContainer` fieldnode.
     *
     * The updates from the injected raw messagecontainer are applied to the siblings of the bounded node.
     *
     * @public
     * @param fieldNode {FieldNode} Messagecontainer fieldnode
     */
    public bindMessageContainer(fieldNode: FieldNode): void;
    mcDO: FieldNode;
    /**
     * bindMc Bind a `furo.MessageContainer` fieldnode.
     *
     * The updates from the injected raw messagecontainer are applied to the siblings of the bounded node.
     *
     * @public
     * @param fieldNode {FieldNode} Messagecontainer fieldnode
     */
    public bindRootNode(fieldNode: FieldNode): void;
    rootNode: FieldNode;
    /**
     *
     * @param messageType
     * @returns {string|undefined}
     * @private
     */
    private _getStateFromMessageType;
}
import { LitElement } from 'lit';
