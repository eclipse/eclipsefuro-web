---
title: furo-pages
description: Simple content switcher
weight: 50
---

# furo-pages
**@furo/route** <small>v2.4.2</small>
<br>`import '@furo/route/src/furo-pages.js';`<small>
<br>exports `<furo-pages>` custom-element-definition
<br>superclass *LitElement*</small>
<br><small>summary *Simple content switcher*</small>

{{% api "_furo-pages-head.md" %}}


Use `furo-pages` to build tabs, views, subviews,...


## preconditions
The components used in a furo-page must implement a **hidden** attribute css to set itself to display none.

```css
:host([hidden]){
   display:none
 }
```

## usage

```html

<furo-pages fn-inject-location="--locationChanged" default="home">
   <page-home name="home"></page-home>
   <other-page name="more"></other-page>
   <view-404 name="404"></view-404>
</furo-pages>

<furo-location at-location-changed="--locationChanged"></furo-location>
```
*If the url is `/` or `/home`, page-home is displayed.*
*If the url is `/more`,  other-page is displayed.*
*If the url does not match any of the names and a 404 is available, the 404 is displayed.*

## flowbased auto wires
furo-pages provides auto wires, which are automatically triggered in the child elements if
they support FBP. Each wire will forward a `locationObject`

-  `|--pageActivated` : Is triggered when the element is activated.
-  `|--pageDeActivated` : Is triggered when another page is activated. Empty wire.
-  `|--pageQueryChanged` : Is triggered when the page query changes.
-  `|--pageHashChanged` : Is triggered when the page hash changes.
-  `|--pageReActivated` : Is triggered when the locatioin contains the same page which already was activated.

-  `--pageActivated` : Is triggered when the element is activated.
-  `--pageDeActivated` : Is triggered when another page is activated. Empty wire.
-  `--pageQueryChanged` : Is triggered when the page query changes.
-  `--pageHashChanged` : Is triggered when the page hash changes.
-  `--pageReActivated` : Is triggered when the locatioin contains the same page which already was activated.

{{% api "_furo-pages-description.md" %}}


## Attributes and Properties
{{% api "_furo-pages-properties.md" %}}











### **default**
</small>

Set the default page to show.
<br><br>

## Methods
{{% api "_furo-pages-methods.md" %}}


### **activatePage**
<small>**activatePage**(*pageName* `` *String* `` ) ⟹ `void`</small>

<small>`` `` </small> →
<span  style="border-width:2px 2px 2px 10px; border-style: solid;border-color:  rgb(76, 175, 80);font-family:monospace; padding:2px 4px;">fn-activate-page</span>

Activate a page by name

- <small>*pageName* </small>
- <small>*String* pageName</small>
<br><br>

### **injectLocation**
<small>**injectLocation**(*location* `` ) ⟹ `void`</small>

<small>`` </small> →
<span  style="border-width:2px 2px 2px 10px; border-style: solid;border-color:  rgb(76, 175, 80);font-family:monospace; padding:2px 4px;">fn-inject-location</span>

Inject the location Object from furo-location. The page which is defined in location.pathSegments[0] will get activated.

To meke "sub" pages do not forget to enable the `url-space-regex` property on the *furo-location* component which feeds this component.

If the page/view does not exist and you have a page "404" defined, the 404 will be shown

If the page/view does not exist AND 404 does not exist, the default page gets activated.

- <small>*location* </small>
<br><br>










## Slots
{{% api "_furo-pages-slots.md" %}}

### **default**
Type: `HTMLElement [0..n]`

default slot to add pages.
<br><br>

{{% api "_furo-pages-footer.md" %}}
{{% api "_furo-pages-scripts.md" %}}
