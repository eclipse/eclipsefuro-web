import {LitElement, html, css} from 'lit-element';
import {FBP} from "@furo/fbp";
import {Theme} from "@furo/framework/theme";
import {Helper} from "./lib/helper.js";


/**
 * `furo-file-input`
 * Handy component to manage input type="file"
 * Let the user choose one or more files from their device storage
 *
 * ### Styling
 * The following custom properties are available for styling:
 *
 * Custom property | Description | Default  | Fallback
 * ----------------|-------------|----------|----------
 * `` |  |  | --
 *
 *
 * @summary File input field
 * @customElement
 * @demo demo-furo-file-input Sample
 * @appliesMixin FBP
 */
class FuroFileInput extends FBP(LitElement) {

    /**
     * @event input
     * The input event fires when the value of an <input>, <select>, or <textarea> element has been changed.
     * The input event is fired every time the value of the element changes.
     *
     * Comes from underlying component input. **bubbles**
     */

    /**
     * flow is ready lifecycle method
     */
    _FBPReady() {
        super._FBPReady();
        // this._FBPTraceWires();

        this._FBPAddWireHook("--inputInput", (e) => {

            /**
             * get local files and encode to Base64
             */
            const promises = [];
            const FILES = e.target.files;

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
    }

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
            reader.readAsDataURL(file);

        });

    }

    static get properties() {
        return {
            /**
             * The required attribute, the value true means this field must be filled in
             *
             */
            required: {
                type: Boolean
            },
            /**
             * The label attribute is a string that provides a brief hint to the user as to what kind of information is expected in the field. It should be a word or short phrase that demonstrates the expected type of data, rather than an explanatory message. The text must not include carriage returns or line feeds.
             */
            label: {
                type: String,
                attribute: true
            },
            /**
             * Set this attribute to autofocus the input field.
             */
            autofocus: {
                type: Boolean
            },
            /**
             * A Boolean attribute which, if present, means this field cannot be edited by the user.
             */
            disabled: {
                type: Boolean, reflect: true
            },
            /**
             * A Boolean attribute which, if present, means this field cannot be edited by the user.
             */
            readonly: {
                type: Boolean, reflect: true
            },
            /**
             * A FileList listing the chosen files
             * readonly
             */
            files: {
                type: Array
            },
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
            }
        };
    }

    static get styles() {
        // language=CSS
        return Theme.getThemeForComponent('FuroFileInput') || css`
            :host {
                display: inline-block;
                position: relative;
                font-size: 16px;
                box-sizing: border-box;
                min-width: 64px;
                white-space: nowrap;
            }

            :host([hidden]) {
                display: none;
            }

            * {
                transition: all 100ms ease-in;
            }

            .inputfile {
                width: 0.1px;
                height: 0.1px;
                opacity: 0;
                overflow: hidden;
                position: absolute;
                z-index: -1;
            }

            .inputfile + label {
                display: inline-block;
                font-family: "Roboto", "Noto", sans-serif;
                border-radius: 4px;
                border: 1px solid transparent;
                width: 100%;
                cursor: pointer;
                color: var(--on-surface);
                padding: 0 var(--furo-button-padding, var(--spacing-s, 16px));;
                text-transform: uppercase;
                font-size: 14px;
                font-weight: 500;
                outline: none;
                line-height: 34px;
                background-color: transparent;
                box-sizing: border-box;
            }

            :host([unelevated]) .inputfile + label {
                background-color: var(--surface, #f7f7f7);
                color: var(--on-surface, #333333);
            }

            label:hover {
                background-color: rgba(0, 0, 0, var(--state-hover));
            }

            label:focus {
                background-color: rgba(0, 0, 0, var(--state-focus));
            }

            :host([primary]) .inputfile + label {
                color: var(--primary);
            }

            :host([primary]) label:focus {
                background-color: rgba(var(--primary-rgb), var(--state-focus));
            }

            :host([primary]) .inputfile + label:hover {
                background-color: rgba(var(--primary-rgb), var(--state-hover));
            }

            :host([secondary]) .inputfile + label {
                color: var(--secondary);
            }

            :host([secondary]) label:focus {
                background-color: rgba(0, 0, 0, var(--state-focus));
            }

            :host([secondary]) .inputfile + label:hover {
                background-color: rgba(var(--secondary-rgb), var(--state-hover));
            }

            :host([accent]) .inputfile + label {
                color: var(--accent);
            }

            :host([accent]) label:focus {
                background-color: rgba(var(--accent-rgb), var(--state-focus));
            }

            :host([accent]) .inputfile + label:hover {
                background-color: rgba(var(--accent-rgb), var(--state-hover));
            }

            :host([outline]) .inputfile + label {
                background-color: transparent;
                color: var(--on-surface);
                border: 1px solid var(--on-surface);
            }

            :host([outline]) .inputfile + label:hover {
                background-color: rgba(0, 0, 0, var(--state-hover));
                color: var(--on-surface);
                border: 1px solid var(--on-surface);
            }

            :host([outline]) .inputfile + label:focus {
                background-color: rgba(0, 0, 0, var(--state-focus));
                color: var(--on-surface);
                border: 1px solid var(--on-surface);
            }

            :host([outline][primary]) .inputfile + label {
                background-color: transparent;
                color: var(--primary);
                border: 1px solid var(--primary);
            }

            :host([outline][primary]) .inputfile + label:hover {
                background-color: rgba(var(--primary-rgb), var(--state-hover));
                color: var(--primary);
                border: 1px solid var(--primary);
            }

            :host([outline][primary]) .inputfile + label:focus {
                background-color: rgba(var(--primary-rgb), var(--state-focus));
                color: var(--primary);
                border: 1px solid var(--primary);
            }

            :host([outline][secondary]) .inputfile + label {
                background-color: transparent;
                color: var(--secondary);
                border: 1px solid var(--secondary);
            }

            :host([outline][secondary]) .inputfile + label:hover {
                background-color: rgba(var(--secondary-rgb), var(--state-hover));
                color: var(--secondary);
                border: 1px solid var(--secondary);
            }

            :host([outline][secondary]) .inputfile + label:focus {
                background-color: rgba(var(--secondary-rgb), var(--state-focus));
                color: var(--secondary);
                border: 1px solid var(--secondary);
            }

            :host([outline][accent]) .inputfile + label {
                background-color: transparent;
                color: var(--accent);
                border: 1px solid var(--accent);
            }

            :host([outline][accent]) .inputfile + label:hover {
                background-color: rgba(var(--accent-rgb), var(--state-hover));
                color: var(--accent);
                border: 1px solid var(--accent);
            }

            :host([outline][accent]) .inputfile + label:focus {
                background-color: rgba(var(--accent-rgb), var(--state-focus));
                color: var(--accent);
                border: 1px solid var(--accent);
            }

            :host([raised][primary]) .inputfile + label, :host([unelevated][primary]) .inputfile + label {
                background-color: var(--primary);
                color: var(--on-primary);
            }

            :host([raised][primary]) .inputfile + label:hover, :host([unelevated][primary]) .inputfile + label:hover {
                background-color: var(--primary-dark);
                color: var(--on-primary);
            }

            :host([raised][secondary]) .inputfile + label, :host([unelevated][secondary]) .inputfile + label {
                background-color: var(--secondary);
                color: var(--on-secondary);
            }

            :host([raised][secondary]) .inputfile + label:hover, :host([unelevated][secondary]) .inputfile + label:hover {
                background-color: var(--secondary-dark);
                color: var(--on-secondary);
            }

            :host([raised][accent]) .inputfile + label, :host([unelevated][accent]) .inputfile + label {
                background-color: var(--accent);
                color: var(--on-accent);
            }

            :host([raised][accent]) .inputfile + label:hover, :host([unelevated][accent]) .inputfile + label:hover {
                background-color: var(--accent-dark);
                color: var(--on-accent);
            }

            :host([disabled]) .inputfile + label, :host([disabled]) .inputfile + label:hover {
                color: var(--disabled, #eeeeee);
                cursor: not-allowed;
            }

            :host([raised][disabled]) .inputfile + label, :host([raised][disabled]) .inputfile + label:hover, :host([unelevated][disabled]) .inputfile + label, :host([unelevated][disabled]) .inputfile + label:hover {
                background-color: var(--disabled, #eeeeee);
                color: var(--on-disabled, #333333);
                border-color: var(--disabled, #eeeeee);
                cursor: not-allowed;
            }


        `
    }

    /**
     * Updater for the accept attr, the prop alone with accept="${this.accept}" wont work,
     * becaue it set "undefined" (as a Sting!)
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

    /**
     * Sets the focus on the field.
     */
    focus() {
        this._FBPTriggerWire("--focus");
    }

    /**
     * Sets the field to readonly
     */
    disable() {
        this.disabled = true;
    }

    /**
     * Makes the field writable.
     */
    enable() {
        this.disabled = false;
    }

    /**
     * @private
     * @returns {TemplateResult|TemplateResult}
     */
    render() {
        // language=HTML
        return html`
      <input type="file" class="inputfile"
             ?readonly=${this.readonly} 
             ?disabled=${this.disabled} 
             ?required=${this.required} 
             ?accept=${this.accept}
             ?multiple=${this.multiple} 
             ?capture="${this.capture}"
             id="input" name="input"
             @-input="--inputInput(*)">
      <label for="input" ƒ-focus="--focus" ?autofocus=${this.autofocus}><span>${this.label} ${this.required ? html`*` : html``}</span></label>
    `;
    }

}

window.customElements.define('furo-file-input', FuroFileInput);
