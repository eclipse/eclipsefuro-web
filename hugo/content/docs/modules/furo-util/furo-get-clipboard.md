---
title: furo-get-clipboard
description: get clipboard content
weight: 50
---

# furo-get-clipboard
**@furo/util** <small>v2.0.1</small>
<br>`import '@furo/util/src/furo-get-clipboard.js';`<small>
<br>exports `<furo-get-clipboard>` custom-element-definition
<br>superclass *LitElement*
<br> mixes *FBP*</small>
<br><small>summary *get clipboard content*</small>

{{% api "_furo-get-clipboard-head.md" %}}

`furo-get-clipboard`
 get the clipboard content from the OS.

```html

<furo-get-clipboard
    ƒ-trigger="--clipboardContentRequested" @-content="--contentReceived"
    ></furo-get-clipboard>

```

{{% api "_furo-get-clipboard-description.md" %}}


## Attributes and Properties
{{% api "_furo-get-clipboard-properties.md" %}}




### **json**

<span  style="border-width:2px; border-style: solid;border-color:  rgb(255, 182, 91);font-family:monospace; padding:2px 4px;">json</span>
</small>

Convert clipboard content to json
<br><br>
## Events
{{% api "_furo-get-clipboard-events.md" %}}

### **content**
<span  style="border-width:2px 10px 2px 2px; border-style: solid;border-color:  rgb(2, 168, 244);font-family:monospace; padding:2px 4px;">@-content</span>
→ <small>``</small>

 Fired when clipboard content is received
<br><br>

## Methods
{{% api "_furo-get-clipboard-methods.md" %}}


### **trigger**
<small>**trigger**() ⟹ `void`</small>

<small>`*`</small> →
<span  style="border-width:2px 2px 2px 10px; border-style: solid;border-color:  rgb(76, 175, 80);font-family:monospace; padding:2px 4px;">ƒ-trigger</span>



<br><br>





{{% api "_furo-get-clipboard-footer.md" %}}
{{% api "_furo-get-clipboard-scripts.md" %}}
