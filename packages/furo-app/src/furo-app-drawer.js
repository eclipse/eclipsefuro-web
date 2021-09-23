import { LitElement, html, css } from 'lit';
import { Theme } from '@furo/framework/src/theme';
import { FBP } from '@furo/fbp';
import '@furo/layout/src/furo-horizontal-flex';

/**
 * `furo-app-drawer`
 * Navigation drawers provide access to destinations and app functionality, such as switching accounts.
 * They can either be permanently on-screen or controlled by a navigation menu icon.
 *
 * @fires is-floating - Fired when drawer is in floating mode. This event is fired when drawer is closed and opened.
 * @fires is-pinned - Fired when drawer is in pinned mode.
 * @fires drawer-opened - Fired when drawer was opened.
 * @fires drawer-closed - Fired when drawer was closed.
 *
 * @slot {HTMLElement} - default slot to add app content.
 * @slot {HTMLElement} drawer - named slot for the drawer destinations.
 *
 * @cssprop {rgba(0, 0, 0, 0.5)} [--furo-app-drawer-backdrop=rgba(0, 0, 0, 0.5)] - backdrop background color
 *
 * @summary Application drawer
 * @customElement
 * @demo demo-furo-app-drawer
 * @appliesMixin FBP
 */
class FuroAppDrawer extends FBP(LitElement) {
  constructor() {
    super();
    /**
     * Width for the autofloat
     * @type {number}
     */
    this.floatBreakpoint = 1159;
    this._movementDetectionRange = 10;

    // return **this** to component which want to connect
    window.addEventListener('connect-to-drawer-requested', e => {
      if (e.detail.name === this.name) {
        e.detail.drawer = this;
      }
    });
  }

  /**
   * @private
   * @return {Object}
   */
  static get properties() {
    return {
      /**
       * Use method floatDrawer or set this attribute to enable float mode
       * @private
       */
      _isFloating: { type: Boolean, reflect: true, attribute: 'float' },

      /**
       * Enable this to put the drawer on the right side
       */
      isReverse: { type: Boolean, reflect: true, attribute: 'reverse' },
      /**
       * disables automatic floating mode
       */
      permanent: { type: Boolean },
      /**
       * let the menu float (hidden).
       */
      float: { type: Boolean },
      /**
       * Min width of the app-drawer to switch to floating mode
       */
      floatBreakpoint: { type: Number, attribute: 'float-breakpoint' },
      /**
       * name of this drawer, needed if you want to connect to this drawer
       */
      name: { type: String },
    };
  }

  /**
   * helper variable to set the floating
   * @param val
   * @private
   */
  set __isFloating(val) {
    this._isFloating = val;
    if (val) {
      const customEvent = new Event('is-floating', { composed: true, bubbles: true });
      this.dispatchEvent(customEvent);
    } else {
      const customEvent = new Event('is-pinned', { composed: true, bubbles: true });
      this.dispatchEvent(customEvent);
    }
  }

  get __isFloating() {
    return this._isFloating;
  }

  /**
   * open the drawer when it is in float mode
   */
  open() {
    this.isOpen = true;
    if (this.__isFloating) {
      const drawer = this.shadowRoot.getElementById('drawer');
      // drawer.style.transform = "translate3d(0, 0, 0)";
      if (this.isReverse) {
        // drawer.style.transform = "translate3d("+ width +"px, 0, 0)";
        drawer.style.right = 0;
      } else {
        drawer.style.left = 0;
        // drawer.style.transform = "translate3d(-"+ width +"px, 0, 0)";
      }
      const backdrop = this.shadowRoot.getElementById('backdrop');
      backdrop.style.opacity = 1;
      backdrop.style.pointerEvents = 'auto';

      // unregister movement tracker
      this.removeEventListener('mousemove', this.moveHandler, true);
      this.removeEventListener('touchmove', this.moveHandler, true);
      // unregister trackend
      this.removeEventListener('mouseup', this.trackEnd, { once: true });
      this.removeEventListener('touchend', this.trackEnd, { once: true });
    }
    const customEvent = new Event('drawer-opened', { composed: true, bubbles: true });
    this.dispatchEvent(customEvent);
  }

  /**
   * closes the drawer when it is in float mode
   */
  close() {
    this.isOpen = false;
    if (this.__isFloating) {
      const drawer = this.shadowRoot.getElementById('drawer');
      const { width } = drawer.getBoundingClientRect();
      if (this.isReverse) {
        // drawer.style.transform = "translate3d("+ width +"px, 0, 0)";
        drawer.style.right = `${-width}px`;
      } else {
        drawer.style.left = `${-width}px`;
        // drawer.style.transform = "translate3d(-"+ width +"px, 0, 0)";
      }
      const backdrop = this.shadowRoot.getElementById('backdrop');
      backdrop.style.opacity = 0;
      backdrop.style.pointerEvents = 'none';

      // unregister movement tracker
      this.removeEventListener('mousemove', this.moveHandler, true);
      this.removeEventListener('touchmove', this.moveHandler, true);
      // unregister trackend
      this.removeEventListener('mouseup', this.trackEnd, { once: true });
      this.removeEventListener('touchend', this.trackEnd, { once: true });
    }
    const customEvent = new Event('drawer-closed', { composed: true, bubbles: true });
    this.dispatchEvent(customEvent);
  }

  /**
   * let the drawer float
   */
  floatDrawer() {
    this.__isFloating = true;
  }

  /**
   * disable the floating
   */
  pinDrawer() {
    this.__isFloating = false;
  }

  /**
   * Put the drawer on the right side
   *
   * Or use the attribute reverse for the same effect
   *
   */
  putDrawerToRight() {
    this.isReverse = true;
  }

  /**
   * Put the drawer on the left side (default)
   */
  putDrawerToLeft() {
    this.isReverse = false;
  }

  /**
   * flow is ready lifecycle method
   * @private
   */
  _FBPReady() {
    super._FBPReady();
    // this._FBPTraceWires()
    /**
     * Register hook on wire --backdropClicked to
     * close the menu
     */
    this._FBPAddWireHook('--backdropClicked', () => {
      this.close();
    });

    // register resize listener
    if (!this.permanent) {
      if (window.ResizeObserver) {
        const ro = new ResizeObserver(entries => {
          for (const entry of entries) {
            window.requestAnimationFrame(() => {
              const cr = entry.contentRect;
              this.__isFloating = cr.width <= this.floatBreakpoint;
            });
          }
          if (this.__isFloating) {
            this.close();
          }
        });
        ro.observe(this);
      } else {
        // fallback, just listen to the resize event
        const cr = this.getBoundingClientRect();
        this.__isFloating = cr.width <= this.floatBreakpoint;

        window.addEventListener('resize', () => {
          // eslint-disable-next-line no-shadow
          const cr = this.getBoundingClientRect();
          this.__isFloating = cr.width <= this.floatBreakpoint;
          if (this.__isFloating) {
            this.close();
          }
        });
      }
    }

    // initial size
    const cr = this.getBoundingClientRect();
    this.__isFloating = cr.width <= this.floatBreakpoint;

    const drawer = this.shadowRoot.getElementById('drawer');
    /**
     * Set the transition effect after the first render. Otherwise we get a flickering effect
     */
    setTimeout(() => {
      drawer.style.transitionDuration = '200ms';
    }, 201);

    const drag = this.shadowRoot.getElementById('drag');
    const backdrop = this.shadowRoot.getElementById('backdrop');

    const trackhandler = e => {
      // unregister
      this.removeEventListener('mousemove', this.moveHandler, true);
      this.removeEventListener('touchmove', this.moveHandler, true);
      if (e instanceof MouseEvent) {
        this.pauseEvent(e);
      }
      if (this.__isFloating) {
        const startX = this._getScreenX(e);
        const startY = this._getScreenY(e);
        const startTime = performance.now();
        const { width } = drawer.getBoundingClientRect();
        let trackingEnabled = false;
        let trackingFixed = false;
        drawer.style.transitionDuration = '0ms';

        // Setup a timer
        let animationframetimeout;
        // register move
        this.moveHandler = () => {
          // If there's a timer, cancel it
          if (requestAnimationFrame) {
            window.cancelAnimationFrame(animationframetimeout);
          }

          if (e instanceof MouseEvent) {
            this.pauseEvent(e);
            // prevent dragging of links in a drawer
            e.preventDefault();
          }

          let distance = this._getScreenX(e) - startX;
          const y = this._getScreenY(e) - startY;

          // start tracking if angle is in a 45 deg horizontal
          if (
            !trackingFixed &&
            Math.abs(distance) < this._movementDetectionRange &&
            Math.abs(y) < this._movementDetectionRange
          ) {
            trackingEnabled = Math.abs(y) < Math.abs(distance);
            return;
          }

          // Setup the new requestAnimationFrame()
          animationframetimeout = window.requestAnimationFrame(() => {
            if (!trackingEnabled) {
              return;
            }
            trackingFixed = true;
            // correct the 10 pixels from tracking enable
            if (!this.isReverse) {
              distance += this._movementDetectionRange;
            } else {
              distance -= this._movementDetectionRange;
            }

            // update drawer position
            let delta = (distance * 100) / width;
            if (this.isOpen) {
              // limit the dragging, it makes no sense to pull the drawer in to the content area
              if ((!this.isReverse && delta > 0) || (this.isReverse && delta < 0)) {
                delta = 0;
              }
              // drawer.style.transform = "translate3d(" + distance + "px, 0, 0)";
              if (this.isReverse) {
                if (distance < 0) {
                  distance = 0;
                }
                drawer.style.right = `${-distance}px`;
              } else {
                if (distance > 0) {
                  distance = 0;
                }
                drawer.style.left = `${distance}px`;
              }
              backdrop.style.opacity = Math.floor(100 + delta) / 100;
            } else {
              // limit the dragging
              if (delta > 100) {
                delta = 100;
                distance = width;
              }
              if (delta < -100) {
                delta = -100;
                distance = -width;
              }

              if (this.isReverse) {
                // drawer.style.transform = "translate3d(" + (100 + delta) + "%, 0, 0)";
                drawer.style.right = `${-(width + distance)}px`;
              } else {
                // drawer.style.transform = "translate3d(" + (delta - 100) + "%, 0, 0)";
                drawer.style.left = `${distance - width}px`;
              }
              // backdrop darkness
              backdrop.style.opacity = Math.abs(delta / 100);
            }
          });
        };

        // register move
        this.addEventListener('mousemove', this.moveHandler, true);

        // todo: check this: this.addEventListener("touchmove", this.moveHandler, {passive: true});
        // https://github.com/WICG/EventListenerOptions/blob/gh-pages/explainer.md
        this.addEventListener('touchmove', this.moveHandler, true);

        // eslint-disable-next-line no-shadow
        this.trackEnd = e => {
          drawer.style.transitionDuration = '';
          // If there's a animation timer, cancel it
          if (requestAnimationFrame) {
            window.cancelAnimationFrame(animationframetimeout);
          }

          const endTime = performance.now();
          const distance = this._getScreenX(e) - startX;
          const duration = endTime - startTime;

          // quick movement
          if (Math.abs(distance) > 30 && duration < 200) {
            if (this.isOpen) {
              if ((!this.isReverse && distance < 0) || (this.isReverse && distance > 0)) {
                this.close();
              }
            } else {
              this.open();
            }
          } else {
            if (!trackingEnabled) {
              return;
            }
            // complete the movement, slow
            const delta = (distance * 100) / width;
            if (delta > -40 && delta < 40) {
              // restore initial pos
              if (this.isOpen) {
                this.open();
              } else {
                this.close();
              }
            } else if (this.isOpen) {
              this.close();
            } else {
              this.open();
            }
          }

          // unregister
          this.removeEventListener('mousemove', this.moveHandler, true);
          this.removeEventListener('touchmove', this.moveHandler, true);
        };
        // unregister movement tracker
        this.addEventListener('mouseup', this.trackEnd, { once: true });
        this.addEventListener('touchend', this.trackEnd, { once: true });
      }
    };
    drawer.addEventListener('trackstart', trackhandler, { passive: true });
    drawer.addEventListener('mousedown', trackhandler);

    drag.addEventListener('trackstart', trackhandler, { passive: true });
    drag.addEventListener('mousedown', trackhandler);
  }

  // eslint-disable-next-line class-methods-use-this
  pauseEvent(e) {
    if (e.stopPropagation) e.stopPropagation();
    if (e.preventDefault) e.preventDefault();
    e.cancelBubble = true;
    e.returnValue = false;
    return false;
  }

  // eslint-disable-next-line class-methods-use-this
  _getScreenX(e) {
    let x;
    if (e instanceof MouseEvent) {
      x = e.screenX;
    } else {
      x = e.changedTouches[0].screenX;
    }
    return x;
  }

  // eslint-disable-next-line class-methods-use-this
  _getScreenY(e) {
    let y;
    if (e instanceof MouseEvent) {
      y = e.screenY;
    } else {
      y = e.changedTouches[0].screenY;
    }
    return y;
  }

  /**
   * Themable Styles
   * @private
   * @return {CSSResult}
   */
  static get styles() {
    // language=CSS
    return (
      Theme.getThemeForComponent('FuroAppDrawer') ||
      css`
        :host {
          display: block;
          height: 100%;
          position: relative;
          overflow: hidden;
        }

        :host([hidden]) {
          display: none;
        }

        furo-horizontal-flex {
          height: 100%;
        }

        #drawer {
          border-right: 1px solid var(--separator, rgb(228, 228, 228));
          /*transition-duration: 200ms; is set in fbpReady */
          background: var(--surface-light);
        }

        ::slotted([scroll]) {
          height: 100%;
          overflow-y: auto;
        }

        /* disable pointer events, z-index 15 just to be below the drawer */
        #backdrop {
          pointer-events: none;
          transition-duration: 200ms;
          transition-property: opacity;
          position: absolute;
          top: 0;
          right: 0;
          bottom: 0;
          left: 0;
          opacity: 0;
          background: var(--furo-app-drawer-backdrop, rgba(0, 0, 0, 0.5));
          z-index: 15;
        }

        #drag {
          position: absolute;
          top: 0;
          width: 18px;
          bottom: 0;
          left: 0;
          z-index: 16;
        }

        :host([reverse]) #drag {
          left: unset;
          right: 0;
        }

        /* put the floating drawer outside the visible area, z-index 16 should be enough layers above 0 */
        :host([float]) #drawer {
          position: absolute;
          z-index: 16;
          top: 0;
          left: 0;
          bottom: 0;
        }

        /* put drawer to the right side on reverse mode */
        :host([float][reverse]) #drawer {
          left: unset;
          right: 0;
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
      <furo-horizontal-flex ?reverse="${this.isReverse}">
        <div id="drawer">
          <slot name="drawer"></slot>
        </div>
        <div flex>
          <slot></slot>
        </div>
      </furo-horizontal-flex>
      <div id="backdrop" @-click="--backdropClicked"></div>
      <div id="drag"></div>
    `;
  }
}

window.customElements.define('furo-app-drawer', FuroAppDrawer);
