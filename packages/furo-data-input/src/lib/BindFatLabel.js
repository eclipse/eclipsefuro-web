/**
 * bind labels for fat type
 */
export class BindFatLabel {

  /**
   * bind pristine label (for fat type)
   * @param caller
   */
  static addPristine(caller) {
    if (caller.binder.fieldNode) {
      /**
       * handle pristine
       *
       * Set to pristine label to the same _pristine from the fieldNode
       */
      if (caller.binder.fieldNode._pristine) {
        caller.binder.addLabel('pristine');
      } else {
        caller.binder.deleteLabel('pristine');
      }
      // set pristine on new data
      caller.binder.fieldNode.addEventListener('new-data-injected', () => {
        caller.binder.addLabel('pristine');
      });
    }

    // by value changed update label
    caller.addEventListener('value-changed', () => {

      // if something was entered the field is not empty
      caller.binder.deleteLabel('pristine');
    });
  }

  /**
   * bind empty label (for fat type)
   * @param caller
   */
  static addEmpty(caller) {
    // by value changed update label
    caller.addEventListener('value-changed', val => {
      // set flag empty on empty strings (for fat types)
      if (val.detail) {
        caller.binder.deleteLabel('empty');
      } else {
        caller.binder.addLabel('empty');
      }
    });
  }

}
