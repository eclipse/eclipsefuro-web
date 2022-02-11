/**
 * Handler of a single key, this class is used by FuroFeatureToggle
 * @private
 */
export class KeyState {
  constructor(initialState) {
    // create with false state
    this._state = initialState;
    // we store a ref to the removers here
    this._appenders = [];
    this._removers = [];
    this._showers = [];
    this._hiders = [];
    this._disablers = [];
    this._enablers = [];
    this._callbacks = [];
  }

  // _appenders
  registerAppender(original) {
    const replacement = document.createComment('FFT-appender');
    this._appenders.push({ original, replacement });
    // apply the initial state
    if (this._state !== true) {
      original.replaceWith(replacement);
    }
  }

  // remover
  registerRemover(original) {
    const replacement = document.createComment('FFT-remover');
    this._removers.push({ original, replacement });
    // apply the initial state
    if (this._state === true) {
      original.replaceWith(replacement);
    }
  }

  // shower
  registerShower(element) {
    this._showers.push(element);
    // apply the initial state
    if (this._state !== true) {
      element.setAttribute('hidden', '');
    } else {
      element.removeAttribute('hidden');
    }
  }

  // hider
  registerHider(element) {
    this._hiders.push(element);
    // apply the initial state
    if (this._state === true) {
      element.setAttribute('hidden', '');
    } else {
      element.removeAttribute('hidden');
    }
  }

  // Enabler
  registerEnabler(element) {
    this._enablers.push(element);
    // apply the initial state
    if (this._state !== true) {
      element.setAttribute('disabled', '');
    } else {
      element.removeAttribute('disabled');
    }
  }

  // Disabler
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
   */
  registerCallback(cb) {
    this._callbacks.push(cb);
    cb(this._state);
  }

  // setter
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
  get state() {
    return this._state;
  }
}
