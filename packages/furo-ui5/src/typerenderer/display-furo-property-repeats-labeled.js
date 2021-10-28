import { DisplayFuroPropertyRepeated } from './display-furo-property-repeated.js';

/**
 * `display-furo-property-repeats-labeled`
 * The display-furo-property-repeats-labeled component displays a RepeaterNode of type `furo.Property` in read only mode.
 *
 * Every display-xxx component should implement the following API:
 * - function: bindData(fieldNode){...}

 *
 *
 * @summary
 * @customElement
 * @demo demo-display-furo-property-repeats-labeled Basic Usage
 */
export class DisplayFuroPropertyRepeatsLabeled extends DisplayFuroPropertyRepeated {
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
        label.setAttribute('show-colon', null);
        label.setAttribute('label', '');

        label.innerText = this._getPropertyLabel(item);
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

  /**
   * resolve label for furo.Property repeated item
   * @param item
   * @returns {string}
   * @private
   */
  // eslint-disable-next-line class-methods-use-this
  _getPropertyLabel(item) {
    let label = '';

    if (item.meta && item.meta.fields && item.meta.fields['data.data']) {
      if (item.meta.fields['data.data'] && item.meta.fields['data.data'].meta) {
        label = item.meta.fields['data.data'].meta.label || label;
      }
    }
    if (item.meta && item.meta.fields && item.meta.fields.data) {
      if (item.meta.fields.data && item.meta.fields.data.meta) {
        label = item.meta.fields.data.meta.label || label;
      }
    }
    return label || item.display_name;
  }
}

window.customElements.define(
  'display-furo-property-repeats-labeled',
  DisplayFuroPropertyRepeatsLabeled,
);
