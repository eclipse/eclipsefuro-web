import { LitElement, html, css } from 'lit-element';
import { Theme } from '@furo/framework/src/theme';
import { FBP } from '@furo/fbp';

/**
 * `furo-file-drop`
 * EXPERIMENTAL
 *
 * @summary dropzone for files
 * @customElement
 * @demo demo-furo-file-drop
 * @appliesMixin FBP
 */
class FuroFileDrop extends FBP(LitElement) {
  /**
   * @private
   * @return {Object}
   */
  static get properties() {
    return {
      /**
       * Description
       */
      files: { type: Array },
    };
  }

  /**
   * flow is ready lifecycle method
   * @private
   */
  _FBPReady() {
    super._FBPReady();
    // this._FBPTraceWires()

    this.addEventListener(
      'dragover',
      ev => {
        // prevent default to allow drop
        ev.preventDefault();
        // eslint-disable-next-line no-param-reassign
        ev.dataTransfer.dropEffect = 'copy'; // Explicitly show this is a copy.
      },
      false,
    );

    this.addEventListener('drop', ev => {
      // Prevent default behavior (Prevent file from being opened)
      ev.preventDefault();

      if (ev.dataTransfer.items) {
        // Use DataTransferItemList interface to access the file(s)
        for (let i = 0; i < ev.dataTransfer.items.length; i += 1) {
          // If dropped items aren't files, reject them
          if (ev.dataTransfer.items[i].kind === 'file') {
            const file = ev.dataTransfer.items[i].getAsFile();
            // eslint-disable-next-line no-console
            console.log(`... file[${i}].name = ${file.name}`);
            // Create a new FileReader innstance
            const reader = new FileReader();
            reader.onload = e => {
              // eslint-disable-next-line no-console
              console.log(btoa(e.target.result));
            };
            reader.readAsBinaryString(file);
          }
        }
      } else {
        // Use DataTransfer interface to access the file(s)
        for (let i = 0; i < ev.dataTransfer.files.length; i += 1) {
          // eslint-disable-next-line no-console
          console.log(`... file[${i}].name = ${ev.dataTransfer.files[i].name}`);
        }
      }
    });
  }

  /**
   * Themable Styles
   * @private
   * @return {CSSResult}
   */
  static get styles() {
    // language=CSS
    return (
      Theme.getThemeForComponent('FuroFileDrop') ||
      css`
        :host {
          display: block;
          background: black;
          height: 200px;
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
   * @private
   */
  render() {
    // language=HTML
    return html`
      <p>Hej, welcome</p>
    `;
  }
}

window.customElements.define('furo-file-drop', FuroFileDrop);
