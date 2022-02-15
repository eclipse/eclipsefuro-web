---
title: furo-backdrop
description: show content with backdrop
weight: 50
---

# furo-backdrop
**@furo/layout** <small>v2.0.0-rc.12</small>
<br>`import '@furo/layout/src/furo-backdrop.js';`<small>
<br>exports `<furo-backdrop>` custom-element-definition
<br>superclass *LitElement*
<br> mixes *FBP*</small>
<br><small>summary *show content with backdrop*</small>

{{% api "_furo-backdrop-head.md" %}}

`furo-backdrop`

Displays content with a backdrop.

The element you place in to furo-backdrop will be displayed centered.


```html
<furo-backdrop @-opened="--BackdropFocus" @-closed="--backdropClosed"
  ƒ-show="--expandIconClicked"
  ƒ-close="--closeRequested, --recordSelected">
     <any-component @-item-selected="--recordSelected" style="width: 90vw; height: 90vh"></any-component>
</furo-backdrop>

```

You can wire and use the elements in furo-backrop as if they were local elements.

Do not forget to add the furo-backdrop-display somewhere in the parent dom.

{{% api "_furo-backdrop-description.md" %}}


## Attributes and Properties
{{% api "_furo-backdrop-properties.md" %}}





## Events
{{% api "_furo-backdrop-events.md" %}}

### **opened**
<span  style="border-width:2px 10px 2px 2px; border-style: solid;border-color:  rgb(2, 168, 244);font-family:monospace; padding:2px 4px;">@-opened</span>
→ <small>`handle: this`</small>

The **opened** event will be fired when the content is visible on the backdrop. Tipp: you can use this to focus something on the shown content.
<br><br>
### **closed**
<span  style="border-width:2px 10px 2px 2px; border-style: solid;border-color:  rgb(2, 168, 244);font-family:monospace; padding:2px 4px;">@-closed</span>
→ <small>`handle: this`</small>

The **closed** event will be fired when the displayed content is invisible and the backdrop is closed. Tipp: Maybe you want to use this event to refocus the initiator.
<br><br>
### **register-backdrop**
<span  style="border-width:2px 10px 2px 2px; border-style: solid;border-color:  rgb(2, 168, 244);font-family:monospace; padding:2px 4px;">@-register-backdrop</span>
→ <small>`handle: this`</small>

Internal event to move the contents to the backdrop-display.
<br><br>

## Methods
{{% api "_furo-backdrop-methods.md" %}}



### **show**
<small>**show**() ⟹ `void`</small>

<small>`*`</small> →
<span  style="border-width:2px 2px 2px 10px; border-style: solid;border-color:  rgb(76, 175, 80);font-family:monospace; padding:2px 4px;">ƒ-show</span>

Initiates the backdrop and shows the content on top of the backdrop area.

<br><br>

### **close**
<small>**close**() ⟹ `void`</small>

<small>`*`</small> →
<span  style="border-width:2px 2px 2px 10px; border-style: solid;border-color:  rgb(76, 175, 80);font-family:monospace; padding:2px 4px;">ƒ-close</span>

Hides the display.

**Note:** The display will also get closed when the user clicks on the backdrop.

<br><br>




{{% api "_furo-backdrop-footer.md" %}}
{{% api "_furo-backdrop-scripts.md" %}}
