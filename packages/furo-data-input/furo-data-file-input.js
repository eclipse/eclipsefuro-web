import {LitElement, html, css} from 'lit-element';
import {Theme} from "@furo/framework/theme"
import {FBP} from "@furo/fbp";
import "@furo/input/furo-file-dialog.js";

import {CheckMetaAndOverrides} from "./lib/CheckMetaAndOverrides";
import {Helper} from "./lib/helper";

/**
 * `furo-data-file-input`
 * Binds a entityObject field to a furo-file-input field
 *
 * Tags: input
 * @summary Bind a entityObject.field to a text input
 * @customElement
 * @demo demo-furo-data-file-input Data binding
 * @mixes FBP
 */
class FuroDataFileInput extends FBP(LitElement) {

    /**
     * @event value-changed
     * This event is representative for the attribute files on the native element input type=file
     * Fired when value has changed from inside the component
     * detail payload: {Array} A FileList listing the chosen files
     *
     * Comes from underlying component furo-file-input. **bubbles**
     */

    /**
     * @event files-selected
     * Fired when value has changed from inside the input field.
     *
     * detail payload: {Array} Base64 String
     *
     * Comes from underlying component furo-file-input. **bubbles**
     */

    /**
     * @event input
     * The input event fires when the value of an <input>, <select>, or <textarea> element has been changed.
     * The input event is fired every time the value of the element changes.
     *
     * Comes from underlying component input. **bubbles**
     */

    /**
     * Fetch local file
     * @private
     */
    _fetchLocalFile(file) {
        return new Promise((resolve, reject) => {
            // Create a new FileReader instance
            const reader = new FileReader;

            reader.addEventListener('load', () => {
                resolve(reader.result);
            });
            reader.addEventListener('progress', (e) => {
                if (e.lengthComputable) {
                    /**
                     * @event progress
                     * is triggered while reading a Blob content.
                     * detail payload: {Array} all selected files base64 encoded
                     */
                    const customEvent = new Event('progress', {composed: true, bubbles: true});
                    customEvent.detail = e;
                    this.dispatchEvent(customEvent);
                    // e.g. progress percentage: Math.round((e.loaded / e.total) * 100);
                }
            });
            reader.readAsDataURL(file);

        });

    }

    /**
     * flow is ready lifecycle method
     */
    _FBPReady() {
        super._FBPReady();
        //this._FBPTraceWires();
        this._FBPAddWireHook("--valueChanged", (e) => {

            /**
             * get local files and encode to Base64
             */
            const promises = [];
            const FILES = e.files;

            this.files = FILES;

            /**
             * @event files-selected
             * This event is representative for the attribute files on the native element input type=file
             * Fired when value has changed from inside the component
             * detail payload: {Array} A FileList listing the chosen files
             */
            const customEvent = new Event('files-selected', {composed: true, bubbles: true});
            customEvent.detail = FILES;
            this.dispatchEvent(customEvent);

            /**
             * File encoding for the convenience event `value-changed
             */
            for (let i = 0; i < FILES.length; i++) {
                promises.push(this._fetchLocalFile(FILES[i]));
            }

            /**
             * All files are encoded
             */
            Promise.all(promises)
                .then(values => {
                    if (this.field) {
                        this.field._value = values;
                    }
                    /**
                     * @event value-changed
                     * Fired when value has changed from inside the component
                     * detail payload: {Array} all selected files base64 encoded
                     */
                    const customEvent = new Event('value-changed', {composed: true, bubbles: true});
                    customEvent.detail = values;
                    this.dispatchEvent(customEvent);
                });

        });
        // check initial overrides
        CheckMetaAndOverrides.UpdateMetaAndConstraints(this);
    }

    /**
     * Updater for the accept attr, the prop alone with accept="${this.accept}" wont work,
     * because it set "undefined" (as a Sting!)
     *
     * @param value
     */
    set accept(value) {
        Helper.UpdateInputAttribute(this, "accept", value);
    }

    set multiple(value) {
        Helper.UpdateInputAttribute(this, "multiple", value);
    }

    set capture(value) {
        Helper.UpdateInputAttribute(this, "capture", value);
    }

    static get properties() {
        return {
            /**
             * Hint for expected file type in file upload controls
             * https://developer.mozilla.org/en-US/docs/Web/HTML/Element/input/file#Unique_file_type_specifiers
             * e.g. .doc,.docx,application/msword,application/vnd.openxmlformats-officedocument.wordprocessingml.document
             */
            accept: {
                type: String, attribute: true
            },
            /**
             * Whether to allow multiple values
             */
            multiple: {
                type: Boolean, attribute: true, reflect: true
            },
            /**
             * What source to use for capturing image or video data
             * The capture attribute value is a string that specifies which camera to use for capture of
             * image or video data, if the accept attribute indicates that the input should be of one of those types.
             * A value of user indicates that the user-facing camera and/or microphone should be used. A value of environment
             * specifies that the outward-facing camera and/or microphone should be used. If this attribute is missing,
             * the user agent is free to decide on its own what to do. If the requested facing mode isn't available,
             * the user agent may fall back to its preferred default mode.
             */
            capture: {
                type: String, attribute: true, reflect: true
            },
        }
    }

    /**
     * Bind a entity field to the text-input. You can use the entity even when no data was received.
     * When you use `@-object-ready` from a `furo-data-object` which emits a EntityNode, just bind the field with `--entity(*.fields.fieldname)`
     * @param {Object|FieldNode} fieldNode a Field object
     */
    bindData(fieldNode) {
        if (fieldNode === undefined) {
            console.warn("Invalid binding ");
            console.log(this);
            return;
        }

        this.field = fieldNode;
        CheckMetaAndOverrides.UpdateMetaAndConstraints(this);

        this.field.addEventListener('field-value-changed', (e) => {
            //nop
        });

        // update meta and constraints when they change
        this.field.addEventListener('this-metas-changed', () => {
            CheckMetaAndOverrides.UpdateMetaAndConstraints(this);
        });
    }

    /**
     *
     * @private
     * @return {CSSResult}
     */
    static get styles() {
        // language=CSS
        return Theme.getThemeForComponent('FuroDataFileInput') || css`
            :host {
                display: none;
            }
        `
    }

    /**
     * Delegates open request
     */
    open() {
        this._FBPTriggerWire('--open', null);
    }

    render() {
        // language=HTML
        return html`
           <furo-file-dialog id="input"  
             ?accept=${this.accept}
             ?multiple=${this.multiple} 
             ?capture="${this.capture}"
             ƒ-open="--open" @-input-changed="--valueChanged"></furo-file-dialog>
            
    `;
    }

}

customElements.define('furo-data-file-input', FuroDataFileInput);
