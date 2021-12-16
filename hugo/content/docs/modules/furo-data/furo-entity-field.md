---
title: furo-entity-field
description: interact with single field of a data object
weight: 50
---

# furo-entity-field
**@furo/furo-data** <small>v2.0.0-rc.7</small>
<br>`import '@furo/furo-data/src/furo-entity-field.js';`<small>
<br>exports `<furo-entity-field>` custom-element-definition
<br>superclass *LitElement*</small>
<br><small>summary *interact with single field of a data object*</small>

{{% api "_furo-entity-field-head.md" %}}

Use this component to interact with fields from an furo-data-object.

You can update the field value or listen to changes of a field.

```html
<furo-entity-field ƒ-bind-data="--dataObject(*.field)"></furo-entity-field>
```

{{% api "_furo-entity-field-description.md" %}}


## Attributes and Properties
{{% api "_furo-entity-field-properties.md" %}}




### **value**
</small>

Setter
<br><br>

## Events
{{% api "_furo-entity-field-events.md" %}}

### **value-changed**
<span  style="border-width:2px 10px 2px 2px; border-style: solid;border-color:  rgb(2, 168, 244);font-family:monospace; padding:2px 4px;">@-value-changed</span>
→ <small>`*`</small>

 Fired when the field value or a child value of it was changed.
<br><br>

## Methods
{{% api "_furo-entity-field-methods.md" %}}


### **setValue**
<small>**setValue**(*v* `` ) ⟹ `void`</small>

<small>`` </small> →
<span  style="border-width:2px 2px 2px 10px; border-style: solid;border-color:  rgb(76, 175, 80);font-family:monospace; padding:2px 4px;">ƒ-set-value</span>

Set the value of the field.

- <small>*v* </small>
<br><br>


### **bindData**
<small>**bindData**(*fieldNode* `Object|FieldNode` ) ⟹ `void`</small>

<small>`Object|FieldNode` </small> →
<span  style="border-width:2px 2px 2px 10px; border-style: solid;border-color:  rgb(76, 175, 80);font-family:monospace; padding:2px 4px;">ƒ-bind-data</span>

Bind a entity field to the date-input. You can use the entity even when no data was received.
When you use `@-object-ready` from a `furo-data-object` which emits a EntityNode, just bind the field with `--entity(*.fields.fieldname)`

- <small>*fieldNode* a Field object</small>
<br><br>




{{% api "_furo-entity-field-footer.md" %}}
{{% api "_furo-entity-field-scripts.md" %}}
