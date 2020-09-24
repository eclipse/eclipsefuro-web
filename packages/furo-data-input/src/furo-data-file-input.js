import { FuroFileDialog } from '@furo/input/src/furo-file-dialog.js';
import { UniversalFieldNodeBinder } from '@furo/data/src/lib/UniversalFieldNodeBinder.js';

/**
 * `furo-data-file-input`
 * Binds a entityObject field to a furo-file-input field
 *
 *  * ### following labels of fat types are supported by default:
 *
 * - 'error': state of input is error
 * - 'multiple': indicates that the user may choose more than one file
 *
 * ### following attributes of fat types are supported by default:
 *
 * - 'label': input label
 * - 'accept': One or more unique file type specifiers describing file types to allow
 * - 'multiple': furo leading icon of the input
 * - 'capture': What source to use for capturing image or video data
 *
 * ### following constrains are mapped into the attributes of the fat types and presence in payload:
 *
 * - 'required': is mapped to 'required' attribute
 *
 * Tags: input
 * @summary Binds a entityObject field to a furo-file-input field
 * @customElement
 * @demo demo-furo-data-file-input Data binding
 * @mixes FBP
 */
class FuroDataFileInput extends FuroFileDialog {
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

  constructor() {
    super();
    this._initBinder();
  }

  /**
   * inits the universalFieldNodeBinder.
   * Set the mapped attributes and labels.
   * @private
   */
  _initBinder() {
    this.binder = new UniversalFieldNodeBinder(this);

    // set the attribute mappings
    this.binder.attributeMappings = {
      label: 'label',
      accept: 'accept',
      multiple: 'multiple',
      capture: 'capture',
    };

    // set the label mappings
    this.binder.labelMappings = {
      error: 'error',
      multiple: 'multiple',
    };

    this.binder.fatAttributesToConstraintsMappings = {
      required: 'value._constraints.required.is', // for the fieldnode constraint
    };

    this.binder.constraintsTofatAttributesMappings = {
      required: 'required',
    };

    /**
     * check overrides from the used component, attributes set on the component itself overrides all
     */
    this.binder.checkLabelandAttributeOverrrides();

    // the extended furo-text-input component uses _value
    this.binder.targetValueField = '_value';

    // update the value on input changes
    this.addEventListener('input-changed', e => {
      /**
       * get local files and encode to Base64
       */
      const promises = [];
      const FILES = e.detail.files;

      this.files = FILES;

      /**
       * @event files-selected
       * This event is representative for the attribute files on the native element input type=file
       * Fired when value has changed from inside the component
       * detail payload: {Array} A FileList listing the chosen files
       */
      const customEvent = new Event('files-selected', { composed: true, bubbles: true });
      customEvent.detail = FILES;
      this.dispatchEvent(customEvent);

      /**
       * File encoding for the convenience event `value-changed
       */
      for (let i = 0; i < FILES.length; i += 1) {
        promises.push(this._fetchLocalFile(FILES[i]));
      }

      /**
       * All files are encoded
       */
      Promise.all(promises).then(values => {
        if (this.binder.fieldNode) {
          this.binder.fieldValue = values;
        }

        /**
         * @event value-changed
         * Fired when value has changed from inside the component
         * detail payload: {Array} all selected files base64 encoded
         */
        const valueChangeEvent = new Event('value-changed', { composed: true, bubbles: true });
        valueChangeEvent.detail = values;
        this.dispatchEvent(valueChangeEvent);

        if (this.binder.fieldFormat === 'fat') {
          // set flag empty on empty strings (for fat types)
          if (values) {
            this.binder.deleteLabel('empty');
          } else {
            this.binder.addLabel('empty');
          }

          this.binder.deleteLabel('pristine');
        }
      });
    });
  }

  /**
   * Fetch local file
   * @private
   */
  _fetchLocalFile(file) {
    return new Promise(resolve => {
      // Create a new FileReader instance
      const reader = new FileReader();

      reader.addEventListener('load', () => {
        resolve(reader.result);
      });
      reader.addEventListener('progress', e => {
        if (e.lengthComputable) {
          /**
           * @event progress
           * is triggered while reading a Blob content.
           * detail payload: {Array} all selected files base64 encoded
           */
          const customEvent = new Event('progress', { composed: true, bubbles: true });
          customEvent.detail = e;
          this.dispatchEvent(customEvent);
          // e.g. progress percentage: Math.round((e.loaded / e.total) * 100);
        }
      });
      reader.readAsDataURL(file);
    });
  }

  // because we defined the property accept, the setter from the parent needs to be updated
  set accept(val) {
    super.accept = val;
  }

  // because we defined the property multiple, the setter from the parent needs to be updated
  set multiple(val) {
    super.multiple = val;
  }

  // because we defined the property capture, the setter from the parent needs to be updated
  set capture(val) {
    super.capture = val;
  }

  static get properties() {
    return {
      /**
       * Hint for expected file type in file upload controls
       * https://developer.mozilla.org/en-US/docs/Web/HTML/Element/input/file#Unique_file_type_specifiers
       * e.g. .doc,.docx,application/msword,application/vnd.openxmlformats-officedocument.wordprocessingml.document
       */
      accept: {
        type: String,
        reflect: true,
      },
      /**
       * Whether to allow multiple values
       */
      multiple: {
        type: Boolean,
        reflect: true,
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
        type: String,
        reflect: true,
      },
    };
  }

  /**
   * Bind a entity field to the text-input. You can use the entity even when no data was received.
   * When you use `@-object-ready` from a `furo-data-object` which emits a EntityNode, just bind the field with `--entity(*.fields.fieldname)`
   * @param {Object|FieldNode} fieldNode a Field object
   */
  bindData(fieldNode) {
    this.binder.bindField(fieldNode);
    if (this.binder.fieldNode) {
      /**
       * handle pristine
       *
       * Set to pristine label to the same _pristine from the fieldNode
       */
      if (this.binder.fieldNode._pristine) {
        this.binder.addLabel('pristine');
      } else {
        this.binder.deleteLabel('pristine');
      }
      // set pristine on new data
      this.binder.fieldNode.addEventListener('new-data-injected', () => {
        this.binder.addLabel('pristine');
      });
    }
  }
}

customElements.define('furo-data-file-input', FuroDataFileInput);
