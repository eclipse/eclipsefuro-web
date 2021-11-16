import { LitElement, html, css } from 'lit'

import { FBP } from '@furo/fbp'

/**
 * `furo-backdrop-display`
 *
 * This components receives and displays the backdrop requests from furo-backdrop components.
 *
 * The backdrop display can be placed anywhere in the dom. The higher the better.
 *
 * Tipp: place it below or inside the component which applies the style vars. Othewise the displayed components
 * do not know these vars.
 *
 * ```html
 *  <!-- place the display in your main-stage -->
 *  <furo-backdrop-display></furo-backdrop-display>
 *  ```
 *
 * @cssprop {0px} [--furo-backdrop-color=#6d6d6d] - background color of backdrop
 *
 * @summary Display component for furo-backdrop
 * @customElement
 * @demo demo-furo-backdrop Basic usage
 * @appliesMixin FBP
 */
class FuroBackdropDisplay extends FBP(LitElement) {
  constructor() {
    super()
    /**
     * timeout duration
     * @type {number}
     */
    this.toDuration = 100
  }

  /**
   * @private
   * @return {Object}
   */
  static get properties() {
    return {
      /**
       * Needed to start the animation.
       * @private
       */
      start: { type: Boolean, reflect: true },
      /**
       * Indicates that the backdrop is shown.
       * @private
       */
      show: { type: Boolean, reflect: true },
      /**
       * Timeout duration, to wait to notify the changes.
       *
       * Note: the animations in the css are set with 250ms.
       *
       * If you are interested to use @-opened to load some data, set this value lower. This gives you 250 ms extra time to load content, without feeling slow.
       *
       * If you are interested to use @-opened to show some ui stuff, set this value higher or equal 250.
       */
      toDuration: {
        type: Number,
        attribute: 'to-duration',
      },
    }
  }

  /**
   * flow is ready lifecycle method
   * @private
   */
  _FBPReady() {
    super._FBPReady()
    // this._FBPTraceWires()

    // listen on clicks on backdrop to close it
    this.shadowRoot.getElementById('backdrop').addEventListener('click', () => {
      this.close()
    })

    /**
     * items which should be shown in the backdrop must be registered
     * Otherwise we trigger a lot of connected and disconnected callbacks
     */
    this.parentNode.addEventListener('register-backdrop', e => {
      this.contentSource = e.detail.handle
      this.contentSource.displayHandle = this.shadowRoot
        .getElementById('ctnt')
        .appendChild(this.contentSource.children[0])
    })

    /**
     * Listen to close requests
     */
    this.parentNode.addEventListener('close-backdrop-requested', e => {
      this.contentSource = e.detail.handle
      this.close()
    })

    /**
     * Listen to show requests
     */
    this.parentNode.addEventListener('show-backdrop-requested', e => {
      this.contentSource = e.detail.handle
      // set registered item to _active
      this.contentSource.displayHandle.classList.toggle('_active')

      // start backdrop animation with a timeout of 1
      this.start = true
      setTimeout(() => {
        this.show = true
        setTimeout(() => {
          // notify via furo-backdrop that it is opened
          this.contentSource.dispatchEvent(new Event('opened', { composed: true, bubbles: true }))
        }, this.toDuration)
      }, 1)
    })
  }

  /**
   * closes the backdrop.
   * You can close the backdrop on the display element, this is useful when you want to close the backdrops on page
   * changes.
   *
   * Usualy the component which triggers the backdrop or is displayed closes it.
   */
  close() {
    // start animation => look at the css
    this.show = false
    setTimeout(() => {
      // end animation
      this.start = false
      // deactivate the backdrop visibility
      this.contentSource.displayHandle.classList.toggle('_active')

      // notify furo-backdrop that it is closed now
      this.contentSource.dispatchEvent(new Event('closed', { composed: true, bubbles: true }))
    }, this.toDuration)
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
          position: absolute;
          display: none;
          top: 0;
          left: 0;
          right: 0;
          bottom: 0;
          z-index: 10;
        }

        /* used to start the amimations */
        :host([start]) {
          display: block;
        }

        :host([start]) #backdrop {
          opacity: 0;
        }

        :host([show]) #backdrop {
          opacity: 0.6;
        }

        #backdrop {
          width: 100%;
          height: 100%;
          transition: opacity 250ms;
          opacity: 0;
          background-color: var(--furo-backdrop-color, #6d6d6d);
        }

        /* center the content exactly in the middle */
        :host .ctnt {
          position: absolute;
          top: 50%;
          left: 50%;
          transform: translate(-50%, -50%) scale(0.3);
          z-index: 11;
          transition: all 250ms ease-out;
        }

        /* content area not visible at start time */
        :host([start]) .ctnt {
          visibility: hidden;
        }

        /* switch content area to visible */
        :host([show]) .ctnt {
          visibility: visible;
          transform: translate(-50%, -50%) scale(1); /* center it exactly in the middle */
        }

        /* backdropped content by default not visible */
        .ctnt > * {
          display: none;
        }

        .ctnt > *._active {
          display: block;
        }
      `
    )
  }

  /**
   * @private
   * @returns {TemplateResult}
   * @private
   */
  render() {
    // language=HTML
    return html`
      <div id='backdrop'></div>
      <div id='ctnt' class='ctnt'></div>
    `
  }
}

window.customElements.define('furo-backdrop-display', FuroBackdropDisplay)
