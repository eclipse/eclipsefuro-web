/**
 * Handler of a single key, this class is used by FuroFeatureToggle
 * @private
 */
export class KeyState {
  constructor(initialState) {

    /**
     * create with false state
     * @private
     */
    this._state = initialState;
    // we store a ref to the removers, appender,... here
    /**
     * @private
     */
    this._appenders = [];
    /**
     * @private
     */
    this._removers = [];
    /**
     * @private
     */
    this._showers = [];
    /**
     * @private
     */
    this._hiders = [];
    /**
     * @private
     */
    this._disablers = [];
    /**
     * @private
     */
    this._enablers = [];
    /**
     * @private
     */
    this._callbacks = [];
  }


  /**
   * register appender
   * @private
   * @param original {domnode} original dom node
   */
  registerAppender(original) {
    const replacement = document.createComment('FFT-appender');
    this._appenders.push({ original, replacement });
    // apply the initial state
    if (this._state !== true) {
      original.replaceWith(replacement);
    }
  }


  /**
   * register remover
   * @private
   * @param original {domnode} original dom node
   */
  registerRemover(original) {
    const replacement = document.createComment('FFT-remover');
    this._removers.push({ original, replacement });
    // apply the initial state
    if (this._state === true) {
      original.replaceWith(replacement);
    }
  }


  /**
   * shower
   * @private
   * @param element {domnode} original dom node
   */
  registerShower(element) {
    this._showers.push(element);
    // apply the initial state
    if (this._state !== true) {
      element.setAttribute('hidden', '');
    } else {
      element.removeAttribute('hidden');
    }
  }

  /**
   * @private
   * @param element {domnode} original dom node
   */
  registerHider(element) {
    this._hiders.push(element);
    // apply the initial state
    if (this._state === true) {
      element.setAttribute('hidden', '');
    } else {
      element.removeAttribute('hidden');
    }
  }


  /**
   * @private
   * @param element {domnode} original dom node
   */
  registerEnabler(element) {
    this._enablers.push(element);
    // apply the initial state
    if (this._state !== true) {
      element.setAttribute('disabled', '');
    } else {
      element.removeAttribute('disabled');
    }
  }

  /**
   * @private
   * @param element {domnode} original dom node
   */
  registerDisabler(element) {
    this._disablers.push(element);
    // apply the initial state
    if (this._state === true) {
      element.setAttribute('disabled', '');
    } else {
      element.removeAttribute('disabled');
    }
  }

  /**
   * register a callback on a key
   * @param cb {function(boolean)}
   * @private
   */
  registerCallback(cb) {
    this._callbacks.push(cb);
    cb(this._state);
  }

  // setter
  /**
   * @private
   * @param newstate
   */
  set state(newstate) {
    // apply states on changed state only
    if (newstate !== this._state) {
      this._state = newstate;
      // check appenders
      this._appenders.forEach(rm => {
        if (this._state !== true) {
          rm.original.replaceWith(rm.replacement);
        } else {
          rm.replacement.replaceWith(rm.original);
        }
      });
      // check _removers
      this._removers.forEach(rm => {
        if (this._state !== true) {
          rm.replacement.replaceWith(rm.original);
        } else {
          rm.original.replaceWith(rm.replacement);
        }
      });

      this._showers.forEach(element => {
        if (this._state !== true) {
          element.setAttribute('hidden', '');
        } else {
          element.removeAttribute('hidden');
        }
      });

      this._hiders.forEach(element => {
        if (this._state === true) {
          element.setAttribute('hidden', '');
        } else {
          element.removeAttribute('hidden');
        }
      });

      this._enablers.forEach(element => {
        if (this._state !== true) {
          element.setAttribute('disabled', '');
        } else {
          element.removeAttribute('disabled');
        }
      });

      this._disablers.forEach(element => {
        if (this._state === true) {
          element.setAttribute('disabled', '');
        } else {
          element.removeAttribute('disabled');
        }
      });

      // execute callbacks
      this._callbacks.forEach(cb => {
        cb(this._state);
      });
    }
  }

  // direct getter
  /**
   * @private
   * @return {*}
   */
  get state() {
    return this._state;
  }
}
