---
title: furo-app-flow-router
description: Application Flow =&gt; routing
weight: 50
---

# furo-app-flow-router
**@furo/route** <small>v2.0.0-rc.5</small>
<br>`import '@furo/route/src/furo-app-flow-router.js';`<small>
<br>exports `<furo-app-flow-router>` custom-element-definition
<br>superclass *LitElement*
<br> mixes *FBP*</small>
<br><small>summary *Application Flow =&gt; routing*</small>

{{% api "_furo-app-flow-router-head.md" %}}

`furo-app-flow-router`

Use this component with app-flow and furo-pages to implement application flow


```html
   <app-flow-router ƒ-.config="--flowConfigLoaded" ƒ-trigger="--flowEvent" ƒ-back="--wire" ƒ-forward="--wire"></app-flow-router>
```

 *Configuration Array

| current   | flow-event-name      | target      | [mapping]          |
|:----------|:---------------------|:------------|:-------------------|
| view-main | form-complete        | detail-view | from => to         |
| *         | menu-settings-click  | settings    |                    |
| *         | all-fields-req       | all-qps     |        *           |
| *         | some-fields-req      | some-qps    | a=>b,x=>id,c=>item |


```json
 [
   ['view-main', 'button-tap', 'detail-view',  'task => id],
   ["*", "search", "EXTERNAL_LINK: https://google.com/"],
   ["*", "searchInNewWindow", "EXTERNAL_LINK_BLANK: https://google.com/"]
   ["*", "searchInNewWindow", "EXTERNAL_LINK_BLANK:", *]
 ]
 ```


 if the current view is view-main and the flow-event-name is 'form-complete', the view switches to detail-view and data.from is mapped to "to".

 ## Special configurations:

 - Set a "*" to map all data 1:1 to the url.

 - You can set a wildcard for "current". If you check the example: menu-settings-click can be triggered from any current. If there is a "current" with menu-settings-click configured and you are there, the wildcard is not used.
 - if you want to link to a target outside your app add **EXTERNAL_LINK:** followed by the link
 - if you want to close a page which was openend by a _blank click use the keyword **WINDOW-CLOSE**
 - if you want to trigger a history.back() use the **HISTORY-BACK**
 - if there is no history.back() possible use the **flow event!** **HISTORY-BACK** and define the target as usual

{{% api "_furo-app-flow-router-description.md" %}}


## Attributes and Properties
{{% api "_furo-app-flow-router-properties.md" %}}







### **config**

<span  style="border-width:2px; border-style: solid;border-color:  rgb(255, 182, 91);font-family:monospace; padding:2px 4px;">config</span>
</small>

The Configuration Array
<br><br>

### **display**
default: **&#39;none&#39;**</small>


<br><br>

### **urlSpaceRegex**

<span  style="border-width:2px; border-style: solid;border-color:  rgb(255, 182, 91);font-family:monospace; padding:2px 4px;">url-space-regex</span>
<small>`string|RegExp` default: **&#39;&#39;**</small>

default value of urlSpaceRegex. this value can be rewritten via `url-space-regex` attribute
<br><br>
## Events
{{% api "_furo-app-flow-router-events.md" %}}

### **__beforeReplaceState**
<span  style="border-width:2px 10px 2px 2px; border-style: solid;border-color:  rgb(2, 168, 244);font-family:monospace; padding:2px 4px;">@-__beforeReplaceState</span>
→ <small>`void`</small>

 Fired when before the state will be updated.
<br><br>
### **view-changed**
<span  style="border-width:2px 10px 2px 2px; border-style: solid;border-color:  rgb(2, 168, 244);font-family:monospace; padding:2px 4px;">@-view-changed</span>
→ <small>`flowEvent`</small>

 Fired when page was changed.
<br><br>
### **event-not-found**
<span  style="border-width:2px 10px 2px 2px; border-style: solid;border-color:  rgb(2, 168, 244);font-family:monospace; padding:2px 4px;">@-event-not-found</span>
→ <small>`flowEvent`</small>

 Fired when view was not found.
<br><br>

## Methods
{{% api "_furo-app-flow-router-methods.md" %}}


### **back**
<small>**back**() ⟹ `void`</small>

<small>`*`</small> →
<span  style="border-width:2px 2px 2px 10px; border-style: solid;border-color:  rgb(76, 175, 80);font-family:monospace; padding:2px 4px;">ƒ-back</span>

trigger a history back

<br><br>

### **forward**
<small>**forward**() ⟹ `void`</small>

<small>`*`</small> →
<span  style="border-width:2px 2px 2px 10px; border-style: solid;border-color:  rgb(76, 175, 80);font-family:monospace; padding:2px 4px;">ƒ-forward</span>

trigger a history forward

<br><br>

### **setConfig**
<small>**setConfig**(*config* `` ) ⟹ `void`</small>

<small>`` </small> →
<span  style="border-width:2px 2px 2px 10px; border-style: solid;border-color:  rgb(76, 175, 80);font-family:monospace; padding:2px 4px;">ƒ-set-config</span>

Set the config

- <small>*config* </small>
<br><br>

### **trigger**
<small>**trigger**(*flowEvent* `` ) ⟹ `boolean`</small>

<small>`` </small> →
<span  style="border-width:2px 2px 2px 10px; border-style: solid;border-color:  rgb(76, 175, 80);font-family:monospace; padding:2px 4px;">ƒ-trigger</span>

Trigger the router

- <small>*flowEvent* </small>
<br><br>







{{% api "_furo-app-flow-router-footer.md" %}}
{{% api "_furo-app-flow-router-scripts.md" %}}
