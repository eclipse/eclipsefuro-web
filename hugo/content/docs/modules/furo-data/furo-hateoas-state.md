---
title: furo-hateoas-state
description: disables or hide nodes based on hts
weight: 50
---

# furo-hateoas-state
**@furo/data** <small>v2.2.1</small>
<br>`import '@furo/data/src/furo-hateoas-state.js';`<small>
<br>exports `<furo-hateoas-state>` custom-element-definition
<br>superclass *LitElement*
<br> mixes *FieldNodeAdapter*</small>
<br><small>summary *disables or hide nodes based on hts*</small>

{{% api "_furo-hateoas-state-head.md" %}}

`furo-hateoas-state` is an invisible component with a binding of type furo.Link or injection of a link array.

It disables / enables or hides / shows components according to the injected HATEOAS links. `furo-hateoas-state` only
sets or remove the attributes **hidden** and **disabled** on the nodes.

All nodes inside the same parent are taken in to control.

Elements inside a shadow root are not selected.

Set the attribute **data-rel="list"** on any element you want to control with `furo-hateoas-state`.

Set the attribute **hide-no-rel** if you want to hide the node instead of being disabled.

```html
<div>
  <button data-rel='list'>list</button>
  <button hide-no-rel data-rel='list'>hide no rel</button>
  <button data-rel='add'>add</button>
  <furo-hateoas-state ƒ-bind-hts='--collection(*.links)'></furo-hateoas-state>
</div>
```
*all elements with a data-rel="something" attribute inside the div are controlled*

{{% api "_furo-hateoas-state-description.md" %}}


## Attributes and Properties
{{% api "_furo-hateoas-state-properties.md" %}}



























## Methods
{{% api "_furo-hateoas-state-methods.md" %}}



### **enable**
<small>**enable**() ⟹ `void`</small>

<small>`*`</small> →
<span  style="border-width:2px 2px 2px 10px; border-style: solid;border-color:  rgb(76, 175, 80);font-family:monospace; padding:2px 4px;">ƒ-enable</span>

Enable or show all nodes.

<br><br>

### **disable**
<small>**disable**() ⟹ `void`</small>

<small>`*`</small> →
<span  style="border-width:2px 2px 2px 10px; border-style: solid;border-color:  rgb(76, 175, 80);font-family:monospace; padding:2px 4px;">ƒ-disable</span>

Disable or hide all nodes.

<br><br>

### **bindData**
<small>**bindData**(*fieldNode* `` ) ⟹ `boolean`</small>

<small>`` </small> →
<span  style="border-width:2px 2px 2px 10px; border-style: solid;border-color:  rgb(76, 175, 80);font-family:monospace; padding:2px 4px;">ƒ-bind-data</span>

Binds a fieldNode. Make sure the type of your field is accepted by the implemented component.

- <small>*fieldNode* </small>
<br><br>

### **bindHts**
<small>**bindHts**(*Links* `` ) ⟹ `void`</small>

<small>`` </small> →
<span  style="border-width:2px 2px 2px 10px; border-style: solid;border-color:  rgb(76, 175, 80);font-family:monospace; padding:2px 4px;">ƒ-bind-hts</span>

Bind a `RepeaterNode` of type `furo.Link`.

- <small>*Links* </small>
<br><br>

### **injectHts**
<small>**injectHts**(*value* `[json]` ) ⟹ `void`</small>

<small>`[json]` </small> →
<span  style="border-width:2px 2px 2px 10px; border-style: solid;border-color:  rgb(76, 175, 80);font-family:monospace; padding:2px 4px;">ƒ-inject-hts</span>

Inject a link array directly.

```json
[
  {
    "href": "/mockdata/persons/list",
    "method": "GET",
    "rel": "list",
    "type": "person.PersonCollection",
    "service": "PersonService"
  }
]
```

- <small>*value* Array with raw `furo.Link` like</small>
<br><br>






















{{% api "_furo-hateoas-state-footer.md" %}}
{{% api "_furo-hateoas-state-scripts.md" %}}
