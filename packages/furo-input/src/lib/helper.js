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
      caller.dispatchEvent(
        new CustomEvent('input-attr-updated', {
          detail: value,
          bubbles: true,
          composed: true,
        }),
      );
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

    if (!input.validity.valid) {
      const invalidInputEvent = new Event('input-invalid', { composed: true, bubbles: false });
      invalidInputEvent.detail = input.validity;
      caller.dispatchEvent(invalidInputEvent);
    } else {

      if (caller.value.length === 0) {
        const customEvent = new Event('value-cleared', { composed: true, bubbles: true });
        caller.dispatchEvent(customEvent);
      }


      const customEvent = new Event('value-changed', { composed: true, bubbles: true });
      customEvent.detail = caller.value;
      caller.dispatchEvent(customEvent);
    }
  }
}
