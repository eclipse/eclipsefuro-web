/**
 * Helper class for binding ui5 labeled elements
 */
export class Ui5LabelDataBinding {

  /**
   * bind data for labeled element
   * @param element
   * @param fieldNode
   */
  static bindData(element,fieldNode) {

    // eslint-disable-next-line no-param-reassign
    element._field = fieldNode;
    element._FBPTriggerWire('--data', fieldNode);

    if(this.isFatType(fieldNode)) {
      // eslint-disable-next-line no-param-reassign
      element.label = element.label || fieldNode.attributes.label || fieldNode._meta.label;
    }
    else {
      // eslint-disable-next-line no-param-reassign
      element.label = element.label || fieldNode._meta.label;

    }

    /**
     * Listener on fieldNode meta changes
     */
    element._field.addEventListener('element-metas-changed', meta => {
      // eslint-disable-next-line no-param-reassign
      element.label = meta.detail._meta.label || element.label;
      element.requestUpdate();
    });

    element.requestUpdate();
  }

  /**
   * check whether it is a fat type
   *
   * @param field
   * @returns {boolean}
   */
  static isFatType(field) {
    let isFatType = false;
    if (field && 'value' in field && 'labels' in field && 'attributes' in field) {
      this.fieldValue = field.value._value;
      isFatType = true;
    }
    return isFatType;
  }
}
