---
title: furo-lock-navigation
description: Blocks the furo-location-updater from navigating away
weight: 50
---

# furo-lock-navigation
**@furo/route** <small>v2.6.13</small>
<br>`import '@furo/route/src/furo-lock-navigation.js';`<small>
<br>exports *FuroLockNavigation* js
<br>exports `<furo-lock-navigation>` custom-element-definition
<br>superclass *LitElement*
<br> mixes *FBP*</small>
<br><small>summary *Blocks the furo-location-updater from navigating away*</small>

{{% api "_furo-lock-navigation-head.md" %}}

`furo-lock-navigation`
 Blocks the furo-location-updater and furo-app-flow-router from navigating away if you have unsaved changes or work to do.

 This component also adds a listener to the unload event, which kicks in at a reload or close of the window.

 ```html
 <furo-lock-navigation fn-lock="--dataChanged" fn-unlock="--saveSuccess"></furo-lock-navigation>
 ```

{{% api "_furo-lock-navigation-description.md" %}}


## Attributes and Properties
{{% api "_furo-lock-navigation-properties.md" %}}







### **message**

<span  style="border-width:2px; border-style: solid;border-color:  rgb(255, 182, 91);font-family:monospace; padding:2px 4px;">message</span>
<small>`string` default: **&#39;You have unsaved changes, proceed anyway?&#39;**</small>

The warning message, which is displayed at the prompt.
<br><br>
## Events
{{% api "_furo-lock-navigation-events.md" %}}

### **furo-navigation-locked**
<span  style="border-width:2px 10px 2px 2px; border-style: solid;border-color:  rgb(2, 168, 244);font-family:monospace; padding:2px 4px;">at-furo-navigation-locked</span>
→ <small>`void`</small>

 Fired when the navigation was locked
<br><br>
### **furo-navigation-unlocked**
<span  style="border-width:2px 10px 2px 2px; border-style: solid;border-color:  rgb(2, 168, 244);font-family:monospace; padding:2px 4px;">at-furo-navigation-unlocked</span>
→ <small>`void`</small>

 Fired when the navigation was unlocked
<br><br>

## Methods
{{% api "_furo-lock-navigation-methods.md" %}}


### **lock**
<small>**lock**() ⟹ `void`</small>

<small>`*`</small> →
<span  style="border-width:2px 2px 2px 10px; border-style: solid;border-color:  rgb(76, 175, 80);font-family:monospace; padding:2px 4px;">fn-lock</span>

Blocks furo-location-updater and furo-app-flow-router from navigating away.

<br><br>

### **unlock**
<small>**unlock**() ⟹ `void`</small>

<small>`*`</small> →
<span  style="border-width:2px 2px 2px 10px; border-style: solid;border-color:  rgb(76, 175, 80);font-family:monospace; padding:2px 4px;">fn-unlock</span>

Removes the lock.

<br><br>







{{% api "_furo-lock-navigation-footer.md" %}}
{{% api "_furo-lock-navigation-scripts.md" %}}
