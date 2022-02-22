---
title: furo-document-title
description: Document title
weight: 50
---

# furo-document-title
**@furo/route** <small>v2.0.1</small>
<br>`import '@furo/route/src/furo-document-title.js';`<small>
<br>exports `<furo-document-title>` custom-element-definition
<br>superclass *LitElement*
<br> mixes *FBP*</small>
<br><small>summary *Document title*</small>

{{% api "_furo-document-title-head.md" %}}

`furo-document-title`

 Updates the document title and set navigation waypoints.

 ## Structure of the title
 The title is built up from 3 parts (`prefix`, `title`, `suffix`). Each of them can be set by attribute or a setter method. The `title` and `suffix` part can be set with a fieldnode from a `furo-data-object`.

 `document.title = prefix + title + suffix`

 ## Waypoints
 Waypoints are pushed to the browser history and allows you to navigate with the back and forward buttons of the browser.
 To return to the last waypoint within your app, you have to trigger a `history.back()`. Read more about the history API [here](https://developer.mozilla.org/en-US/docs/Web/API/History).

 If you use `furo-app-flow` you can send the **history-back** event.

 Views and pages without a waypoint are not stored in the history.

 ```
 [a]-->[b]-->[.]-->[.]-->[.]-->[c]
        ▲                       │
        └───────────────────────┘
        By clicking the back button you will return to b

 ```

 ## Usage example

 ```html
  <furo-document-title
    prefix="${i18n.t('prefix.label')} ["
    ƒ-bind-title="--DataObject(*.display_name)"
    suffix="]"
    ƒ-set-waypoint="--pageActivated"
  ></furo-document-title>
 ```
 The document title will be set to: `PrefixLabel [display_name_value]`

{{% api "_furo-document-title-description.md" %}}


## Attributes and Properties
{{% api "_furo-document-title-properties.md" %}}










### **prefix**

<span  style="border-width:2px; border-style: solid;border-color:  rgb(255, 182, 91);font-family:monospace; padding:2px 4px;">prefix</span>
<small>`string` default: **&#39;&#39;**</small>

prefix part, you can also use `setPrefix()`.`
<br><br>

### **title**

<span  style="border-width:2px; border-style: solid;border-color:  rgb(255, 182, 91);font-family:monospace; padding:2px 4px;">title</span>
<small>`string` default: **&#39;&#39;**</small>

Title part, you can also use `setTitle()` or `bindTitle().`
<br><br>

### **suffix**

<span  style="border-width:2px; border-style: solid;border-color:  rgb(255, 182, 91);font-family:monospace; padding:2px 4px;">suffix</span>
<small>`string` default: **&#39;&#39;**</small>

Suffix part, you can also use `setSuffix()` or `bindSuffix().`
<br><br>
## Events
{{% api "_furo-document-title-events.md" %}}

### **waypoint-pushed**
<span  style="border-width:2px 10px 2px 2px; border-style: solid;border-color:  rgb(2, 168, 244);font-family:monospace; padding:2px 4px;">@-waypoint-pushed</span>
→ <small>`Event`</small>

 Fired when the waypoint is finaly pushed to the browser history.
<br><br>
### **waypoint-canceled**
<span  style="border-width:2px 10px 2px 2px; border-style: solid;border-color:  rgb(2, 168, 244);font-family:monospace; padding:2px 4px;">@-waypoint-canceled</span>
→ <small>`Event`</small>

 Fired when the waypoint was set but not pushed to the history, because the user navigated back.
<br><br>

## Methods
{{% api "_furo-document-title-methods.md" %}}


### **setWaypoint**
<small>**setWaypoint**() ⟹ `void`</small>

<small>`*`</small> →
<span  style="border-width:2px 2px 2px 10px; border-style: solid;border-color:  rgb(76, 175, 80);font-family:monospace; padding:2px 4px;">ƒ-set-waypoint</span>



<br><br>

### **activate**
<small>**activate**() ⟹ `void`</small>

<small>`*`</small> →
<span  style="border-width:2px 2px 2px 10px; border-style: solid;border-color:  rgb(76, 175, 80);font-family:monospace; padding:2px 4px;">ƒ-activate</span>

Set the document title with the current prefix title suffix. Without setting a waypoint.

<br><br>


### **setSuffix**
<small>**setSuffix**(*s* `` ) ⟹ `void`</small>

<small>`` </small> →
<span  style="border-width:2px 2px 2px 10px; border-style: solid;border-color:  rgb(76, 175, 80);font-family:monospace; padding:2px 4px;">ƒ-set-suffix</span>

Updates the suffix

- <small>*s* </small>
<br><br>

### **setTitle**
<small>**setTitle**(*title* `` ) ⟹ `void`</small>

<small>`` </small> →
<span  style="border-width:2px 2px 2px 10px; border-style: solid;border-color:  rgb(76, 175, 80);font-family:monospace; padding:2px 4px;">ƒ-set-title</span>

Updates the title

- <small>*title* string</small>
<br><br>

### **bindSuffix**
<small>**bindSuffix**(*fieldnode* `` ) ⟹ `void`</small>

<small>`` </small> →
<span  style="border-width:2px 2px 2px 10px; border-style: solid;border-color:  rgb(76, 175, 80);font-family:monospace; padding:2px 4px;">ƒ-bind-suffix</span>

Bind a fieldnode to auto update the suffix

- <small>*fieldnode* </small>
<br><br>

### **bindTitle**
<small>**bindTitle**(*fieldnode* `` ) ⟹ `void`</small>

<small>`` </small> →
<span  style="border-width:2px 2px 2px 10px; border-style: solid;border-color:  rgb(76, 175, 80);font-family:monospace; padding:2px 4px;">ƒ-bind-title</span>

Bind a fieldnode to auto update the title

- <small>*fieldnode* </small>
<br><br>







{{% api "_furo-document-title-footer.md" %}}
{{% api "_furo-document-title-scripts.md" %}}
