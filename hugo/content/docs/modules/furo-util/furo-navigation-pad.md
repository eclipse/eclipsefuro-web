---
title: furo-navigation-pad
description: keyboard navigation helper
weight: 50
---

# furo-navigation-pad
**@furo/util** <small>v2.0.9</small>
<br>`import '@furo/util/src/furo-navigation-pad.js';`<small>
<br>exports `<furo-navigation-pad>` custom-element-definition
<br>superclass *LitElement*
<br> mixes *FBP*</small>
<br><small>summary *keyboard navigation helper*</small>

{{% api "_furo-navigation-pad-head.md" %}}

`furo-navigation-pad` listens to different keyboard navigation events like the arrow keys. It will attach the listeners
 to the parent node and cancel the default and stop the propagation of the events.

 The events are available as standalone events or as combined event in the `navigated` event.

 ```html
 <!-- forward all navigation events except the Escape  -->
 <furo-navigation-pad
     ignored-keys="Escape" at-navigated="--navpad"
     ></furo-navigation-pad>

 ```

{{% api "_furo-navigation-pad-description.md" %}}


## Attributes and Properties
{{% api "_furo-navigation-pad-properties.md" %}}




### **ignoredKeys**

<span  style="border-width:2px; border-style: solid;border-color:  rgb(255, 182, 91);font-family:monospace; padding:2px 4px;">ignored-keys</span>
<small>`String` </small>

Enter the keys you want to ignore as comma seperated values.

i.e. "Escape, ArrowLeft"
<br><br>
## Events
{{% api "_furo-navigation-pad-events.md" %}}

### **navigated**
<span  style="border-width:2px 10px 2px 2px; border-style: solid;border-color:  rgb(2, 168, 244);font-family:monospace; padding:2px 4px;">at-navigated</span>
→ <small>`String`</small>

Generic navigation event, fired when one of the navigation keys was pressed, detail contains one of these: Escape | Enter | ArrowDown | ArrowUp |ArrowLeft|ArrowRight| PageUp | PageDown | Home | End
<br><br>
### **enter-pressed**
<span  style="border-width:2px 10px 2px 2px; border-style: solid;border-color:  rgb(2, 168, 244);font-family:monospace; padding:2px 4px;">at-enter-pressed</span>
→ <small>`KeyboardEvent`</small>

 Fired when Enter key was pressed.
<br><br>
### **arrow-down-pressed**
<span  style="border-width:2px 10px 2px 2px; border-style: solid;border-color:  rgb(2, 168, 244);font-family:monospace; padding:2px 4px;">at-arrow-down-pressed</span>
→ <small>`KeyboardEvent`</small>

 Fired when ArrowDown key was pressed.
<br><br>
### **arrow-up-pressed**
<span  style="border-width:2px 10px 2px 2px; border-style: solid;border-color:  rgb(2, 168, 244);font-family:monospace; padding:2px 4px;">at-arrow-up-pressed</span>
→ <small>`KeyboardEvent`</small>

 Fired when ArrowUp key was pressed.
<br><br>
### **arrow-left-pressed**
<span  style="border-width:2px 10px 2px 2px; border-style: solid;border-color:  rgb(2, 168, 244);font-family:monospace; padding:2px 4px;">at-arrow-left-pressed</span>
→ <small>`KeyboardEvent`</small>

 Fired when ArrowLeft key was pressed.
<br><br>
### **arrow-right-pressed**
<span  style="border-width:2px 10px 2px 2px; border-style: solid;border-color:  rgb(2, 168, 244);font-family:monospace; padding:2px 4px;">at-arrow-right-pressed</span>
→ <small>`KeyboardEvent`</small>

 Fired when ArrowRight key was pressed.
<br><br>
### **escape-pressed**
<span  style="border-width:2px 10px 2px 2px; border-style: solid;border-color:  rgb(2, 168, 244);font-family:monospace; padding:2px 4px;">at-escape-pressed</span>
→ <small>`KeyboardEvent`</small>

 Fired when Escape key was pressed.
<br><br>
### **page-up-pressed**
<span  style="border-width:2px 10px 2px 2px; border-style: solid;border-color:  rgb(2, 168, 244);font-family:monospace; padding:2px 4px;">at-page-up-pressed</span>
→ <small>`KeyboardEvent`</small>

 Fired when PageUp key was pressed.
<br><br>
### **page-down-pressed**
<span  style="border-width:2px 10px 2px 2px; border-style: solid;border-color:  rgb(2, 168, 244);font-family:monospace; padding:2px 4px;">at-page-down-pressed</span>
→ <small>`KeyboardEvent`</small>

 Fired when PageDown key was pressed.
<br><br>
### **home-pressed**
<span  style="border-width:2px 10px 2px 2px; border-style: solid;border-color:  rgb(2, 168, 244);font-family:monospace; padding:2px 4px;">at-home-pressed</span>
→ <small>`KeyboardEvent`</small>

 Fired when Home key was pressed.
<br><br>
### **end-pressed**
<span  style="border-width:2px 10px 2px 2px; border-style: solid;border-color:  rgb(2, 168, 244);font-family:monospace; padding:2px 4px;">at-end-pressed</span>
→ <small>`KeyboardEvent`</small>

 Fired when End key was pressed.
<br><br>

## Methods
{{% api "_furo-navigation-pad-methods.md" %}}







{{% api "_furo-navigation-pad-footer.md" %}}
{{% api "_furo-navigation-pad-scripts.md" %}}
