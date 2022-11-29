---
title: furo-location-updater
description: deep linking helper
weight: 50
---

# furo-location-updater
**@furo/route** <small>v2.6.0</small>
<br>`import '@furo/route/src/furo-location-updater.js';`<small>
<br>exports `<furo-location-updater>` custom-element-definition
<br>superclass *LitElement*
<br> mixes *FBP*</small>
<br><small>summary *deep linking helper*</small>

{{% api "_furo-location-updater-head.md" %}}

`furo-location-updater`
updates parts of the url location with pushState

You can set query params and hashes. Use this component for proper deep linking.
The furo-location component will fire the location events as usual.

```html

 <furo-location-updater
    fn-set-qp="--QueryParamKeyValuePairs"
    fn-set-hash="--HashKeyValuePairs"></furo-location-updater>

```

{{% api "_furo-location-updater-description.md" %}}


## Attributes and Properties
{{% api "_furo-location-updater-properties.md" %}}





### **clearQp**

<span  style="border-width:2px; border-style: solid;border-color:  rgb(255, 182, 91);font-family:monospace; padding:2px 4px;">clear-qp</span>
<small>`String` </small>

Comma separated list of qp keys to clear if they are not explicitly set with `fn-set-qp`
<br><br>

### **clearHash**

<span  style="border-width:2px; border-style: solid;border-color:  rgb(255, 182, 91);font-family:monospace; padding:2px 4px;">clear-hash</span>
<small>`String` </small>

Comma separated list of hashes to clear if they are not explicitly set with `fn-set-hash`
<br><br>
## Events
{{% api "_furo-location-updater-events.md" %}}

### **__beforeReplaceState**
<span  style="border-width:2px 10px 2px 2px; border-style: solid;border-color:  rgb(2, 168, 244);font-family:monospace; padding:2px 4px;">at-__beforeReplaceState</span>
→ <small>`Number`</small>

 Fired when before the state will be updated, with `window.performance.now()`.
<br><br>

## Methods
{{% api "_furo-location-updater-methods.md" %}}


### **setQp**
<small>**setQp**(*newQP* `` ) ⟹ `void`</small>

<small>`` </small> →
<span  style="border-width:2px 2px 2px 10px; border-style: solid;border-color:  rgb(76, 175, 80);font-family:monospace; padding:2px 4px;">fn-set-qp</span>

Set query params by giving an object with key-value pairs.

Keep in mind, that this values goes to the url, so setting objects as values is not a good idea

- <small>*newQP* </small>
<br><br>

### **setHash**
<small>**setHash**(*newHASH* `` ) ⟹ `void`</small>

<small>`` </small> →
<span  style="border-width:2px 2px 2px 10px; border-style: solid;border-color:  rgb(76, 175, 80);font-family:monospace; padding:2px 4px;">fn-set-hash</span>

Set hash values by giving an object with key-value pairs.

Keep in mind, that this values goes to the url, so setting objects as values is not a good idea

- <small>*newHASH* </small>
<br><br>






{{% api "_furo-location-updater-footer.md" %}}
{{% api "_furo-location-updater-scripts.md" %}}
