---
title: furo-data-flow-repeat
description: automatic display of repeated fields
weight: 50
---

# furo-data-flow-repeat
**@furo/data** <small>v2.6.0</small>
<br>`import '@furo/data/src/furo-data-flow-repeat.js';`<small>
<br>exports *FuroDataFlowRepeat* js
<br>exports `<furo-data-flow-repeat>` custom-element-definition
<br>superclass *FlowRepeat*
<br> mixes *FieldNodeAdapter*</small>
<br><small>summary *automatic display of repeated fields*</small>

{{% api "_furo-data-flow-repeat-head.md" %}}

`furo-data-flow-repeat` Is a bindable repeater.


 ```html
 <furo-data-flow-repeat identity-path="id" fn-bind-data="--data(*.repeaterfield)">
   <template>
     <furo-ui5-data-text-input-labeled
         fn-bind-data="--init"></furo-ui5-data-text-input-labeled>
   </template>
 </furo-data-flow-repeat>
 ```
 *The wire `--init` is fired from furo-data-flow-repeat*

 If you want to delete a repeated item, implement something which triggers the `deleteNode` method on the fieldNode itself.

 ## Available wires in the template:

-  `--init` : contains the repeated item, fired only once on creation of the repeated node
-  `--item` : contains the repeated item, fired on every inject
-  `--firstItem` : contains the repeated item, fired on the first element.
-  `--lastItem` : contains the repeated item, fired on the last element.
-  `--index` : contains a number with the index of the element.
-  `--host` : contains a reference to the host component.
-  `--trigger` : contains what was passed in to the triggering method.
-  `--triggerFirst` : contains what was passed in to the triggering method.
-  `--triggerLast` : contains what was passed in to the triggering method.
-  `--itemSelected` : contains nothing, is triggered with select(index).
-  `--itemDeSelected` : contains nothing, is triggered when another item is selected with select(index).

## Available attributes
**index** contains the current index of the item. Use this to fire a event with an index like `at-click="^^item-clicked(index)"`
**item** contains the current index of the item. Use this to fire a event with the repeated item like `at-click="^^item-selected(item)"`

{{% api "_furo-data-flow-repeat-description.md" %}}


## Attributes and Properties
{{% api "_furo-data-flow-repeat-properties.md" %}}






### **selectAddedItem**
default: **false**</small>

Enable this to select the created item. This will trigger a wire `--itemSelected` which can be wired to
`fn-focus="--itemSelected"`.
<br><br>

### **identityPath**
default: **false**</small>

By setting this param, the repeater has not to rebuild the list on new data. It only updates the parts that have changed.

The path is a field, relative to the root of the repeated item.
<br><br>




















## Methods
{{% api "_furo-data-flow-repeat-methods.md" %}}


### **bindData**
<small>**bindData**(*fieldNode* `RepeaterNode` ) ⟹ `boolean`</small>

<small>`RepeaterNode` </small> →
<span  style="border-width:2px 2px 2px 10px; border-style: solid;border-color:  rgb(76, 175, 80);font-family:monospace; padding:2px 4px;">fn-bind-data</span>

Bind a repeater node.

If `identity-path` is not set, the list will be cleared every time it receives new data.

- <small>*fieldNode* Must be a repeater node.</small>
<br><br>


### **add**
<small>**add**(*data* `Object` ) ⟹ `void`</small>

<small>`Object` </small> →
<span  style="border-width:2px 2px 2px 10px; border-style: solid;border-color:  rgb(76, 175, 80);font-family:monospace; padding:2px 4px;">fn-add</span>

Adds a repeated item of the same type.

If  no object is set, a initial FieldNode of the same type is added to the repeats.

- <small>*data* Object that match the type of the repeated node.</small>
<br><br>

























{{% api "_furo-data-flow-repeat-footer.md" %}}
{{% api "_furo-data-flow-repeat-scripts.md" %}}
