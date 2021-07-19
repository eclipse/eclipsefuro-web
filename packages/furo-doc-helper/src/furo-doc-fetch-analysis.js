import { LitElement, css } from 'lit-element';
import { Theme } from '@furo/framework/src/theme';
import { FBP } from '@furo/fbp';

/**
 * `furo-doc-fetch-analysis`
 * todo Describe your element
 *
 * @fires {analysis} data -  Fired when analysis loaded
 *
 * @summary todo shortdescription
 * @customElement
 * @appliesMixin FBP
 */
class FuroDocFetchAnalysis extends FBP(LitElement) {
  fetchSrc(src) {
    fetch(src)
      .then(res => res.json())
      .then(analysis => {
        this._analysis = analysis;
        if (this.__location) {
          this.checkSubroute(this.__location);
        }
      })
      .catch(err => err);
  }

  checkSubroute(location) {
    // enqueue when analysis is not
    if (!this._analysis) {
      this.__location = location;
      return;
    }
    // Subelement deep linking
    // on ../input/component-name we want to select component-name
    if (location.pathSegments[0]) {
      const subElement = location.pathSegments[0];
      if (this._analysis.elements) {
        this._analysis.elements.forEach(e => {
          // needed for linking to the demos
          e.__package = this._path;

          if (e.tagname === subElement) {
            this._analysis.__selectedElement = e;
            // disable class
            this._analysis.__selectedClass = undefined;
            this._analysis.__selectedMixin = undefined;
            e.__selected = true;
          } else {
            e.__selected = false;
          }
        });
      }
      // check classes if available
      if (this._analysis.classes) {
        this._analysis.classes.forEach(e => {
          if (e.name === subElement) {
            this._analysis.__selectedClass = e;
            // disable element
            this._analysis.__selectedMixin = undefined;
            this._analysis.__selectedElement = undefined;
            e.__selected = true;
          } else {
            e.__selected = false;
          }
        });
      } // check mixins if available
      if (this._analysis.mixins) {
        this._analysis.mixins.forEach(e => {
          if (e.name === subElement) {
            this._analysis.__selectedMixin = e;
            // disable element
            this._analysis.__selectedClass = undefined;
            this._analysis.__selectedElement = undefined;
            e.__selected = true;
          } else {
            e.__selected = false;
          }
        });
      }
    } else if (this._analysis.elements) {
      [this._analysis.__selectedElement] = this._analysis.elements;
    } else if (this._analysis.classes) {
      [this._analysis.__selectedClass] = this._analysis.classes;
    }


    const customEvent = new Event('data', { composed: true, bubbles: true });
    customEvent.detail = this._analysis;
    this.dispatchEvent(customEvent);
  }

  /**
   * Themable Styles
   * @private
   * @return {CSSResult}
   */
  static get styles() {
    // language=CSS
    return (
      Theme.getThemeForComponent('FuroDocFetchAnalysis') ||
      css`
        :host {
          display: block;
        }

        :host([hidden]) {
          display: none;
        }
      `
    );
  }
}

window.customElements.define('furo-doc-fetch-analysis', FuroDocFetchAnalysis);
