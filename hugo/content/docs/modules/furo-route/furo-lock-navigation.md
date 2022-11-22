---
title: furo-lock-navigation
description: Blocks the furo-location-updater from navigating away
weight: 50
---

# furo-lock-navigation
**@furo/route** <small>v2.5.0</small>
<br>`import '@furo/route/src/furo-lock-navigation.js';`<small>
<br>exports `<furo-lock-navigation>` custom-element-definition
<br>superclass *LitElement*
<br> mixes *FBP*</small>
<br><small>summary *Blocks the furo-location-updater from navigating away*</small>

{{% api "_furo-lock-navigation-head.md" %}}

`furo-lock-navigation`
 Blocks the furo-location-updater from navigating away if you have unsaved changes or work to do.

 This component also adds a listener to the unload event.

 ```html
 <furo-lock-navigation fn-lock="--dataChanged" fn-unlock="--saveSuccess"></furo-lock-navigation>
 ```

{{% api "_furo-lock-navigation-description.md" %}}


## Attributes and Properties
{{% api "_furo-lock-navigation-properties.md" %}}







## Methods
{{% api "_furo-lock-navigation-methods.md" %}}


### **lock**
<small>**lock**() ⟹ `void`</small>

<small>`*`</small> →
<span  style="border-width:2px 2px 2px 10px; border-style: solid;border-color:  rgb(76, 175, 80);font-family:monospace; padding:2px 4px;">fn-lock</span>

Blocks furo-location-updater from navigating away.

<br><br>

### **unlock**
<small>**unlock**() ⟹ `void`</small>

<small>`*`</small> →
<span  style="border-width:2px 2px 2px 10px; border-style: solid;border-color:  rgb(76, 175, 80);font-family:monospace; padding:2px 4px;">fn-unlock</span>

Removes the lock.

<br><br>

### **_lockHandler**
<small>**_lockHandler**(*event* `` ) ⟹ `void`</small>

<small>`` </small> →
<span  style="border-width:2px 2px 2px 10px; border-style: solid;border-color:  rgb(76, 175, 80);font-family:monospace; padding:2px 4px;">fn--lock-handler</span>



- <small>*event* </small>
<br><br>

### **_unloadHandler**
<small>**_unloadHandler**(*event* `` ) ⟹ `void`</small>

<small>`` </small> →
<span  style="border-width:2px 2px 2px 10px; border-style: solid;border-color:  rgb(76, 175, 80);font-family:monospace; padding:2px 4px;">fn--unload-handler</span>



- <small>*event* </small>
<br><br>




{{% api "_furo-lock-navigation-footer.md" %}}
{{% api "_furo-lock-navigation-scripts.md" %}}
