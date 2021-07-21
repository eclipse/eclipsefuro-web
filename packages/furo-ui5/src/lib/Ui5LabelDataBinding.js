/**
 * Helper class for binding ui5 labeled elements
 */
export class Ui5LabelDataBinding {
  /**
   * bind data for labeled element
   * @param element
   * @param {FieldNode} fieldNode
   */
  static bindData(element, fieldNode) {
    if (fieldNode === undefined) {
      // eslint-disable-next-line no-console
      console.warn('Invalid fieldNode in bindData', element);
      return;
    }

    // eslint-disable-next-line no-param-reassign
    element._field = fieldNode;
    element._FBPTriggerWire('--data', fieldNode);

    if (this.isFatType(fieldNode)) {
      // eslint-disable-next-line no-param-reassign
      element.label = element.label || fieldNode.attributes.label || fieldNode._meta.label;
      // eslint-disable-next-line no-param-reassign
      element.required =
        element.required || fieldNode.labels.required || fieldNode._constraints.required;
    } else {
      // eslint-disable-next-line no-param-reassign
      element.label = element.label || fieldNode._meta.label;
      // eslint-disable-next-line no-param-reassign
      element.required = element.required || fieldNode._constraints.required;
    }

    /**
     * Listener on fieldNode meta changes
     */
    element._field.addEventListener('this-metas-changed', meta => {
      // eslint-disable-next-line no-param-reassign
      element.label = meta.detail._meta.label || element.label;
      // eslint-disable-next-line no-param-reassign
      element.required = meta.detail._constraints.required || element.required;
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
