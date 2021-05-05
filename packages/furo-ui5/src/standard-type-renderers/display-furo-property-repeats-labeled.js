import { DisplayFuroPropertyRepeats } from './display-furo-property-repeats.js';

/**
 * `display-furo-property-repeats-labeled`
 * The display-furo-property-repeats-labeled component displays a RepeaterNode of type `furo.Property` in read only mode.
 *
 * Every display-xxx component should implement the following API:
 * - function: bindData(fieldNode){...}
 * - attribute: tabular-form (this attribute is set, if the component is inside of a furo-data-table. This attribute is only needed, if the styling inside of a table is different)
 *
 *
 * @summary
 * @customElement
 * @demo demo-display-furo-property-repeats-labeled Basic Usage
 */
export class DisplayFuroPropertyRepeatsLabeled extends DisplayFuroPropertyRepeats {
  /**
   * Overloaded
   * @private
   */
  _updateFieldList() {
    this.elementList.forEach(element => {
      element.remove();
    });

    if (this._field.repeats && this._field.repeats.length) {
      this._field.repeats.forEach(item => {
        const renderName = `display-${item.data['@type']._value
          .replace(/.*\//, '')
          .replaceAll('.', '-')
          .toLocaleLowerCase()}`;
        const element = document.createElement(renderName);

        const wrapper = document.createElement('furo-ui5-form-field-container');
        const label = document.createElement('ui5-label');
        label.setAttribute('slot', 'label');
        label.setAttribute('label', '');
        label.innerText = item.display_name || '';
        wrapper.appendChild(label);
        wrapper.appendChild(element);

        if (element.bindData) {
          this.elementList.push(wrapper);
          element.bindData(item.data);
          element.setAttribute('content', '');
          element.setAttribute('data-type', this._field._name);
          this.parentNode.insertBefore(wrapper, this);
        }
      });
      this.requestUpdate();
    }
  }
}

window.customElements.define(
  'display-furo-property-repeats-labeled',
  DisplayFuroPropertyRepeatsLabeled,
);
