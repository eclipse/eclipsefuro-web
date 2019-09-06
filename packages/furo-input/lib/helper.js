
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
    caller.updateComplete.then((d) => {
      if (!caller._theInputElement) {
        caller._theInputElement = caller.shadowRoot.getElementById("input");
      }
      if (value !== null) {
        caller._theInputElement.setAttribute(attribute, value)
      } else {
        // remove the attribute on null value
        caller._theInputElement.removeAttribute(attribute);
      }
    })
  }

}
