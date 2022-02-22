---
title: furo-feature-toggle
description: flow based handler for feature toggles
weight: 50
---

# furo-feature-toggle
**@furo/util** <small>v2.0.1</small>
<br>`import '@furo/util/src/furo-feature-toggle.js';`<small>
<br>exports `<furo-feature-toggle>` custom-element-definition
<br>superclass *LitElement*
<br> mixes *FBP*</small>
<br><small>summary *flow based handler for feature toggles*</small>

{{% api "_furo-feature-toggle-head.md" %}}

`furo-feature-toggle`
 Is a handler for feature toggles, you can react to key changes with FBP.
 This component is quite simple, but gives you a lot of possibilities.
 Read more about feature toggles in the [guide](/docs/guides/featuretoggle/)

 ```html
 <!-- setting a key -->
<furo-feature-toggle
    key="feature.easter.egg" fn-set-true="--activateClicked" fn-set-false="--disableClicked">
    </furo-feature-toggle>

 <!-- observing key changes -->
 <furo-feature-toggle
    key="feature.xxxx.yyy"  @-key-activated="--fxyActivated" @-key-changed="--fxyChanged">
    </furo-feature-toggle>

 ```

{{% api "_furo-feature-toggle-description.md" %}}


## Attributes and Properties
{{% api "_furo-feature-toggle-properties.md" %}}






### **key**

<span  style="border-width:2px; border-style: solid;border-color:  rgb(255, 182, 91);font-family:monospace; padding:2px 4px;">key</span>
</small>

Name of a feature toggle.
<br><br>
## Events
{{% api "_furo-feature-toggle-events.md" %}}

### **key-true**
<span  style="border-width:2px 10px 2px 2px; border-style: solid;border-color:  rgb(2, 168, 244);font-family:monospace; padding:2px 4px;">@-key-true</span>
→ <small>`true`</small>

Fired when the key is set to true or is true on init.
<br><br>
### **key-false**
<span  style="border-width:2px 10px 2px 2px; border-style: solid;border-color:  rgb(2, 168, 244);font-family:monospace; padding:2px 4px;">@-key-false</span>
→ <small>`false`</small>

Fired when the key is set to false or is false on init.
<br><br>
### **key-changed**
<span  style="border-width:2px 10px 2px 2px; border-style: solid;border-color:  rgb(2, 168, 244);font-family:monospace; padding:2px 4px;">@-key-changed</span>
→ <small>`Boolean`</small>

Fired on init and when the key changes its state.
<br><br>

## Methods
{{% api "_furo-feature-toggle-methods.md" %}}



### **setFalse**
<small>**setFalse**() ⟹ `void`</small>

<small>`*`</small> →
<span  style="border-width:2px 2px 2px 10px; border-style: solid;border-color:  rgb(76, 175, 80);font-family:monospace; padding:2px 4px;">ƒ-set-false</span>

Sets a feature key state to false.

<br><br>

### **setTrue**
<small>**setTrue**() ⟹ `void`</small>

<small>`*`</small> →
<span  style="border-width:2px 2px 2px 10px; border-style: solid;border-color:  rgb(76, 175, 80);font-family:monospace; padding:2px 4px;">ƒ-set-true</span>

Sets a feature key state to true.

<br><br>





{{% api "_furo-feature-toggle-footer.md" %}}
{{% api "_furo-feature-toggle-scripts.md" %}}
