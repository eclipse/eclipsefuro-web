---
title: furo-keydown
description: keyboard event listener
weight: 50
---

# furo-keydown
**@furo/util** <small>v2.0.0-rc.14</small>
<br>`import '@furo/util/src/furo-keydown.js';`<small>
<br>exports `<furo-keydown>` custom-element-definition
<br>superclass *LitElement*
<br> mixes *FBP*</small>
<br><small>summary *keyboard event listener*</small>

{{% api "_furo-keydown-head.md" %}}

`furo-keydown` attaches a keypress listener to the parent element and gives you handy events to work with.

When you set `alt`, `ctrl` or any of the other arguments, the key event will be triggered only if the corresponding key was pressed too.

 [more about keydown](https://developer.mozilla.org/en-US/docs/Web/API/Document/keydown_event)

```html
<furo-keydown key="Enter" @-key="--enterPressed"></furo-keydown>
<furo-keydown ctrl key="c" @-key="--copyRequested"></furo-keydown>
```

{{% api "_furo-keydown-description.md" %}}


## Attributes and Properties
{{% api "_furo-keydown-properties.md" %}}




### **key**

<span  style="border-width:2px; border-style: solid;border-color:  rgb(255, 182, 91);font-family:monospace; padding:2px 4px;">key</span>
</small>

Key to listen on. Like Enter, Backspace, ArrowLeft, A,B,C, a,b,c
<br><br>

### **global**

<span  style="border-width:2px; border-style: solid;border-color:  rgb(255, 182, 91);font-family:monospace; padding:2px 4px;">global</span>
</small>

Set this attribute to listen to the keydown event global (window).
<br><br>

### **alt**

<span  style="border-width:2px; border-style: solid;border-color:  rgb(255, 182, 91);font-family:monospace; padding:2px 4px;">alt</span>
</small>

`alt` key must be pressed to trigger the `key` event.
<br><br>

### **ctrl**

<span  style="border-width:2px; border-style: solid;border-color:  rgb(255, 182, 91);font-family:monospace; padding:2px 4px;">ctrl</span>
</small>

`ctrl` key must be pressed to trigger the `key` event.
<br><br>

### **meta**

<span  style="border-width:2px; border-style: solid;border-color:  rgb(255, 182, 91);font-family:monospace; padding:2px 4px;">meta</span>
</small>

`meta` key must be pressed to trigger the `key` event.
<br><br>

### **shift**

<span  style="border-width:2px; border-style: solid;border-color:  rgb(255, 182, 91);font-family:monospace; padding:2px 4px;">shift</span>
</small>

`shift` key must be pressed to trigger the `key` event.
<br><br>

### **preventDefault**

<span  style="border-width:2px; border-style: solid;border-color:  rgb(255, 182, 91);font-family:monospace; padding:2px 4px;">prevent-default</span>
</small>

Set this attribute to prevent the event default of the keypress event.
<br><br>

### **stopPropagation**

<span  style="border-width:2px; border-style: solid;border-color:  rgb(255, 182, 91);font-family:monospace; padding:2px 4px;">stop-propagation</span>
</small>

Set this to true to stop the event propagation of the keypress event.
<br><br>
## Events
{{% api "_furo-keydown-events.md" %}}

### **key**
<span  style="border-width:2px 10px 2px 2px; border-style: solid;border-color:  rgb(2, 168, 244);font-family:monospace; padding:2px 4px;">@-key</span>
→ <small>`KeyboardEvent`</small>

Fired when key was catched on target
<br><br>

## Methods
{{% api "_furo-keydown-methods.md" %}}














{{% api "_furo-keydown-footer.md" %}}
{{% api "_furo-keydown-scripts.md" %}}
