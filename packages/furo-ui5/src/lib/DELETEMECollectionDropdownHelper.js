/**
 * Helper class for furo-data-collection-dropdown and furo-ui5-data-collection-dropdown
 *
 * @fires {option list} options-injected  - Is fired when a new list is applied
 */

/* eslint-disable no-param-reassign */
export class CollectionDropdownHelper {
  static triggerSetOptionItem(caller) {
    if (caller._injectedDropdownList.length > 0) {
      caller._dropdownList = caller._injectedDropdownList;
    } else if (caller._pseudoDropdownList.length > 0) {
      caller._dropdownList = caller._pseudoDropdownList;
    }
    caller._pseudoDropdownList = [];
    caller._optionNeedToBeRendered = true;
    this.setOptionItems(caller);
  }

  /**
   * Let you get an attribute value by path
   * @param obj
   * @param path
   * @returns {T}
   * @private
   */
  // eslint-disable-next-line class-methods-use-this
  static getValueByPath(obj, path) {
    return path.split('.').reduce((res, prop) => res[prop], obj) || obj;
  }

  /**
   * Triggers the item selected event
   * @param caller
   * @param obj
   */
  static notifiySelectedItem(caller, obj) {
    if (obj) {
      const customEvent = new Event('item-selected', { composed: true, bubbles: true });
      customEvent.detail = obj._original;
      caller.dispatchEvent(customEvent);
    }
  }

  static findDisplayNameByValue(caller, val) {
    let displayName = '';

    for (let i = 0; i < caller._dropdownList.length; i += 1) {
      if (caller._dropdownList[i].id === val) {
        displayName = caller._dropdownList[i].label;
        break;
      }
    }
    return displayName;
  }

  static listHasDataObjectValue(caller) {
    if (caller._fieldNodeToUpdate) {
      caller._valueFoundInList = false;

      let size = caller._injectedDropdownList.length;
      // eslint-disable-next-line no-plusplus
      while (size-- && !caller._valueFoundInList) {
        if (caller._fieldNodeToUpdate._value === caller._injectedDropdownList[size].id) {
          caller._valueFoundInList = true;
        }
      }
    }
  }

  static initDropdownItemWithoutCollectionInjection(caller) {
    caller._pseudoDropdownList = [
      {
        id: caller._fieldNodeToUpdate._value,
        label: caller._fieldDisplayNodeToUpdate
          ? caller._fieldDisplayNodeToUpdate._value
          : caller._fieldNodeToUpdate._value,
        selected: true,
      },
    ];

    // select marked item from meta options
    if (
      caller._isMetaInjection &&
      !caller._fieldNodeToUpdate._value &&
      caller._injectedDropdownList.length > 0
    ) {
      caller._injectedDropdownList.forEach(i => {
        if (i.selected) {
          caller._fieldNodeToUpdate._value = i.id;
          if (caller._fieldDisplayNodeToUpdate) {
            caller._fieldDisplayNodeToUpdate._value = i.label;
          }
        }
      });
      this._isMetaInjection = false;
    }
    // select first item if the auto-select-first is set
    else if (
      caller.autoSelectFirst &&
      !caller._fieldNodeToUpdate._value &&
      caller._injectedDropdownList.length > 0
    ) {
      caller._dropdownList = caller._injectedDropdownList;
      caller._dropdownList[0].selected = true;
      caller._fieldNodeToUpdate._value = caller._dropdownList[0].id;
      if (caller._fieldDisplayNodeToUpdate) {
        caller._fieldDisplayNodeToUpdate._value = caller._dropdownList[0].label;
      }
      this.setOptionItems(caller);
      this.notifiySelectedItem(caller, caller._dropdownList[0]);
    } else if (caller._pseudoDropdownList.length > 0) {
      caller._dropdownList = caller._pseudoDropdownList;
      this.setOptionItems(caller);
    }
  }

  static updateField(caller) {
    if (!caller.updateLock) {
      this.listHasDataObjectValue(caller);
      if (!caller._valueFoundInList) {
        this.initDropdownItemWithoutCollectionInjection(caller);
      } else {
        caller._dropdownList = caller._injectedDropdownList;
        this.setOptionItems(caller);
      }
    }
  }

  static mapDataToList(caller, list) {
    let arr = [];
    // if field value not exists. select item when the item is marked as `selected` in list
    if (!caller._fieldNodeToUpdate || !caller._fieldNodeToUpdate._value) {
      arr = this.setItemSelectedViaSelectedMark(caller, list);
    } else if (Array.isArray(list)) {
      let isSelected = false;
      let hasSelectedMark = false;
      let preSelectedValueInList = null;
      for (let i = 0; i < list.length; i += 1) {
        const item = {
          id: list[i][caller.valueField],
          label: list[i][caller.displayField],
          selected: false,
          _original: list[i]._original,
        };

        if (caller._fieldNodeToUpdate._value === list[i][caller.valueField]) {
          item.selected = true;
          isSelected = true;
        }

        if (list[i].selected) {
          hasSelectedMark = true;
          preSelectedValueInList = list[i][caller.valueField];
        }

        arr.push(item);
      }

      if (!isSelected && hasSelectedMark) {
        arr = this.setItemSelectedViaSelectedMark(caller, list);
        caller._fieldNodeToUpdate._value = preSelectedValueInList;
      }
    }

    return arr;
  }

  static setItemSelectedViaSelectedMark(caller, list) {
    let arr = [];
    if (Array.isArray(list)) {
      arr = list.map(e => ({
        id: e[caller.valueField],
        label: e[caller.displayField],
        selected: !!e.selected,
        _original: e._original,
      }));
    }
    return arr;
  }

  static injectList(caller, list) {
    const arr = this.mapInputToInnerStruct(caller, list);
    caller._injectedDropdownList = this.mapDataToList(caller, arr);
    this.updateField(caller);

    caller.dispatchEvent(
      new CustomEvent('options-injected', {
        detail: caller._injectedDropdownList,
        bubbles: true,
        composed: true,
      }),
    );
  }

  static mapInputToInnerStruct(caller, collection) {
    if (collection === undefined || !collection.length) {
      // no valid collection object submitted
      return [];
    }
    const arrValue = [];

    const arrSubfieldChains = caller.subField.length ? caller.subField.split('.') : [];

    if (Array.isArray(collection)) {
      collection.forEach(element => {
        const tmpValue = {};
        arrSubfieldChains.forEach(s => {
          if (element[s]) {
            Object.assign(tmpValue, element[s]);
          } else {
            Object.assign(tmpValue, element);
          }
        });
        tmpValue._original = element;
        arrValue.push(tmpValue);
      });
    }
    return arrValue;
  }

  /**
   * set option items
   * @private
   */
  static setOptionItems(caller) {
    if (
      caller._dropdownList &&
      (caller.autoSelectFirst || caller._optionNeedToBeRendered || caller._fieldNodeToUpdate._value)
    ) {
      // convert array list to id, label structure
      if (typeof caller._dropdownList[0] === 'string') {
        // eslint-disable-next-line no-param-reassign
        caller._dropdownList = caller._dropdownList.map(item => ({ id: item, label: item }));
      }

      let arr;
      if (caller._fieldNodeToUpdate._value) {
        arr = caller._dropdownList.map(e => ({
          id: e.id,
          label: e.label,
          selected: caller._fieldNodeToUpdate._value === e.id.toString() || false,
        }));
      } else {
        arr = caller._dropdownList.map(e => {
          if (e.selected) {
            caller._fieldNodeToUpdate._value = e.id;
            return {
              id: e.id,
              label: e.label,
              selected: e.selected || false,
            };
          }
          return {
            id: e.id,
            label: e.label,
            selected: e.selected || false,
          };
        });
      }
      if (!caller._valueFoundInList) {
        arr[0].selected = true;
        caller._fieldNodeToUpdate._value = arr[0].id;
        if (caller._fieldDisplayNodeToUpdate) {
          caller._fieldDisplayNodeToUpdate._value = arr[0].label;
        }
      }

      caller.addItems(arr);
      // this.notifiySelectedItem(caller, selectedObj);
      caller._optionNeedToBeRendered = true;
    }
  }
}
