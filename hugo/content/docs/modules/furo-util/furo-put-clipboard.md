---
title: furo-put-clipboard
description: write content to clipboard
weight: 50
---

# furo-put-clipboard
**@furo/util** <small>v2.1.9</small>
<br>`import '@furo/util/src/furo-put-clipboard.js';`<small>
<br>exports *FuroPutClipboard* js
<br>exports `<furo-put-clipboard>` custom-element-definition
<br>superclass *LitElement*</small>
<br><small>summary *write content to clipboard*</small>

{{% api "_furo-put-clipboard-head.md" %}}

`furo-put-clipboard`
 put content to the clipboard of the OS.

```html

<furo-put-clipboard
    json
    fn-trigger="--data" at-content-put="--contentInClipboard"
    ></furo-put-clipboard>

```

{{% api "_furo-put-clipboard-description.md" %}}


## Attributes and Properties
{{% api "_furo-put-clipboard-properties.md" %}}





### **json**

<span  style="border-width:2px; border-style: solid;border-color:  rgb(255, 182, 91);font-family:monospace; padding:2px 4px;">json</span>
<small>`Boolean` </small>

Stringify JSON content. Set this to true to auto stringify your JSON object with a 2 indention.
<br><br>
## Events
{{% api "_furo-put-clipboard-events.md" %}}

### **content-put**
<span  style="border-width:2px 10px 2px 2px; border-style: solid;border-color:  rgb(2, 168, 244);font-family:monospace; padding:2px 4px;">at-content-put</span>
→ <small>`*`</small>

Fired when content is written to clipboard
<br><br>

## Methods
{{% api "_furo-put-clipboard-methods.md" %}}


### **setData**
<small>**setData**(*data* `Object` ) ⟹ `void`</small>

<small>`Object` </small> →
<span  style="border-width:2px 2px 2px 10px; border-style: solid;border-color:  rgb(76, 175, 80);font-family:monospace; padding:2px 4px;">fn-set-data</span>

Set data that you want to put to clipboard.

- <small>*data* Serializable data to put</small>
<br><br>

### **trigger**
<small>**trigger**(*data* `Object|null` ) ⟹ `void`</small>

<small>`Object|null` </small> →
<span  style="border-width:2px 2px 2px 10px; border-style: solid;border-color:  rgb(76, 175, 80);font-family:monospace; padding:2px 4px;">fn-trigger</span>

Write data to the clipboard

If you trigger without data, the data which sas set with `setData` will be written to the clipboard.

- <small>*data* Serializable data</small>
<br><br>





{{% api "_furo-put-clipboard-footer.md" %}}
{{% api "_furo-put-clipboard-scripts.md" %}}
