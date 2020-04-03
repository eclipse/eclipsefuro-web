/**
 * update Attribute on input element actively, so we dont have things like pattern="undefined" on the native element.
 * @param attribute
 * @param value
 * @private
 */

export class Helper {
  /**
   * update Attribute on input element actively, so we dont have things like pattern="undefined" on the native element.
   * @param attribute
   * @param value
   * @private
   */
  static UpdateInputAttribute(caller, attribute, value) {
    caller.updateComplete.then(() => {
      if (!caller._theInputElement) {
        // eslint-disable-next-line no-param-reassign
        caller._theInputElement = caller.shadowRoot.getElementById('input');
      }
      if (value !== null) {
        caller._theInputElement.setAttribute(attribute, value);
      } else {
        // remove the attribute on null value
        caller._theInputElement.removeAttribute(attribute);
      }
    });
  }

  /**
   * send event value-changed with event detail value
   * when input invalid send extra input-invalid event with event detail validity object
   * @param caller
   * @param e
   */
  static triggerValueChanged(caller, e) {
    const input = e.composedPath()[0];
    // eslint-disable-next-line no-param-reassign
    caller.valid = input.validity.valid;
    // eslint-disable-next-line no-param-reassign
    caller._float = !!input.value;
    // eslint-disable-next-line no-param-reassign
    caller.value = input.value;

    /**
     * @event value-cleared
     * Fired when value has changed to EMPTY_STRING from inside the component
     * detail paylod: empty
     */
    if (caller.value.length === 0) {
      const customEvent = new Event('value-cleared', { composed: true, bubbles: true });
      caller.dispatchEvent(customEvent);
    }
    /**
     * @event value-changed
     * Fired when value has changed from inside the component
     * detail payload: {String} the text value
     */
    const customEvent = new Event('value-changed', { composed: true, bubbles: true });
    customEvent.detail = caller.value;
    caller.dispatchEvent(customEvent);

    if (!input.validity.valid) {
      /**
       * @event input-invalid
       * Fired when input value is invalid
       * detail payload: {Object} the validity object of input
       */
      const invalidInputEvent = new Event('input-invalid', { composed: true, bubbles: false });
      invalidInputEvent.detail = input.validity;
      caller.dispatchEvent(invalidInputEvent);
    }
  }
}
