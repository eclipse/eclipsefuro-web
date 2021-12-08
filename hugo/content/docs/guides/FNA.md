---
weight: 2 
title: "Extending a UI lib"
---

# How to make your own UI components bindable

There are several ways to make your component *bindable*.

## Variant 1 DIY

You can create a `bind-data` method by yourself and apply the listeners and watchers on
the [`FieldNode`](/docs/modules/furo-data/FieldNode/)
or the [`RepeaterNode`](/docs/modules/furo-data/RepeaterNode/), depending on what your component will consume.

This can be quite complex, but will give you the greatest flexibility.

Take a look at the [furo-ui5-button](https://github.com/theNorstroem/furo-ui5/blob/main/src/furo-ui5-button.js), which
is a very small example to handle the binding by yourself.

## Variant 2: Use the FieldNodeAdapter

The simplest and most comfortable way to make your component bindable is by extending the `FieldNodeAdapter`. It will
give you some callback methods to overwrite and does the heavy lifting for you.

Take a look at the [furo-ui5-text-input](https://github.com/theNorstroem/furo-ui5/blob/main/src/furo-ui5-text-input.js)
, which is a full-fledged example which uses nearly everything from the **FNA**.

## Minimal example

The smallest variant to achieve a usable binding will need the method `_setFnaFieldValue` and the
callback `onFnaFieldValueChanged`.

**`onFnaFieldValueChanged({JSON})`**
Will give you the value as JSON literal, you do not need to handle the  `FieldNode` attributes.

**`setFnaFieldValue({JSON})`**
Let you update the `FieldNode` by simply passing in a JSON literal.

```js
import { FieldNodeAdapter } from '@furo/data/src/lib/FieldNodeAdapter.js';

export class SampleInput extends FBP(FieldNodeAdapter(LitElement)) {

  constructor() {
    super()
    this.addEventListener("change", (e) => {
      // update the FieldNode
      this.setFnaFieldValue(e.data);
    })
  }

  // receive updates from FieldNode
  onFnaFieldValueChanged(val) {
    this.value = val
  }


}

```

## Methods, Attrs and Callbacks

There are some more attributes, methods and callbacks that you receive from the `FieldNodeAdapter`.


### var `__fieldNode`

This is a reference for the adapter and contains the `FieldNode`.

### Method `getDataType()`

Returns the type name of the bounded fieldNode

*@return* string Typename

### Method `isFat()`
Check if bounded type is a fat type

*@return* boolean

### Method `isWrapper()`
Check if bounded type is a wrapper type

*@return* boolean 

### Method `bindData(fieldNode)`
Binds a fieldNode. Make sure the type of your field is accepted by the implemented component. 

*@param* fieldNode {FieldNode|RepeaterNode} - FieldNode or RepeaterNode

### Method `setFnaFieldValue(value)`

Sets the value on the fieldNode. When you set the value, the changes you made will not trigger
the `onFnaFieldValueChanged` of the current component (no loop backs).  

*@param* value {JSON} - the raw json value for the fieldNode. 

### callback `onFnaFieldValueChanged(value)`
Notifies a field value change event. This event is debounced with 1ms, if you have bound a complex type, only one change
event will be triggered (this is what you want). If you need all change events or more control for your component, use
the listener on the fieldNode itself.

*@param* value - the raw json value for the fieldNode. 

### callback `onFnaConstraintsChanged(constraints)`
Notifies changes on the constraints.

returns an object like:

```json
 {
  "min": {
    is: 33,
    message: "must be bigger"
  }
}
```

```javascript
  // example callback
onFnaConstraintsChanged(constraints)
{
  if (constraints.min !== undefined) {
    this._constraintsFromFNA.min = constraints.min;
    if (this._privilegedAttributes.min === null && this._attributesFromFAT.min === undefined) {
      this.min = constraints.min.is;
    }
  }
}
```


### callback `onFnaOptionsChanged(options)`
Notifies when the options for the field is changed or set. 

*@param* options Object - options object


### onFnaReadonlyChanged(readonly)
Notifies when the readonly flag for the field is changed or set. 

*@param* readonly bool - readonly state 


### callback `onFnaHintChanged(hint)`

Notifies when the hint for the field is changed or set. 

*@param* hint - text for the hint

### callback `onFnaLabelChanged(label)`

Notifies when the label for the field is changed or set. 

*@param* label string - text for the label


### onFnaPlaceholderChanged(placeholder) {}
Notifies when the placeholder for the field is changed or set.

*@param* placeholder string - text for the placeholder


### callback `onFnaFieldNodeBecameInvalid(validity)`
Notifies that a field gets invalid.

*@param* validity - Object like {constraint: "min", description: "too small", field: ""} 

### callback `onFnaFieldNodeBecameValid()`
Notifies that a field gets valid.

### callback `onFnaFieldNewDataInjected()`
Notifies that new data was injected.


### callback `onFnaRepeatedFieldChanged()`
Notifies when a repeater node changes. This means, a element was added or removed to 
the repeater node.

This will not notify you about values inside the repeater node.
    
