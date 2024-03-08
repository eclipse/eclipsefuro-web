---
title: furo-location
description: url watcher
weight: 50
---

# furo-location
**@furo/route** <small>v2.6.13</small>
<br>`import '@furo/route/src/furo-location.js';`<small>
<br>exports *FuroLocation* js
<br>exports `<furo-location>` custom-element-definition
<br>superclass *LitElement*</small>
<br><small>summary *url watcher*</small>

{{% api "_furo-location-head.md" %}}

`furo-location` watches for URL changes and notifies you. The location object which is fired from furo-location can be used
 for page navigation in furo-pages or for deep link resolution.


```html
<furo-location at-location-changed="--pathChanged"></furo-location>

<furo-pages
  fn-inject-location="--pathChanged"
  default="list">
    <view-list name="list"></view-list>
    <view-create name="create"></view-create>
    <view-detail name="detail"></view-detail>
</furo-pages>
```


### locationObject
```json
{
    "host": "localhost:8480",
    "query": {"tsk": 999},
    "hash": {},
    "path": "/detail",
    "pathSegments": [
        "detail"
    ],
    "hashstring": "",
    "querystring": "tsk=999"
}
```

{{% api "_furo-location-description.md" %}}


## Attributes and Properties
{{% api "_furo-location-properties.md" %}}








### **urlSpaceRegex**

<span  style="border-width:2px; border-style: solid;border-color:  rgb(255, 182, 91);font-family:monospace; padding:2px 4px;">url-space-regex</span>
<small>`string|RegExp` default: **&#39;&#39;**</small>

A regexp that defines the set of URLs that should be considered part
of this web app.

Clicking on a link that matches this regex won't result in a full page
navigation, but will instead just update the URL state in place.

This regexp is given everything after the origin in an absolute
URL. So to match just URLs that start with /app/ do:
    url-space-regex="^/app/"

If you plan to work in sub directories, you may set **url-space-regex="^${window.APPROOT}/additional/path"**.
Keep in mind to put a "url-space-regex" on every furo-location. Otherwise you can not switch between apps in different
folders with a link.
<br><br>
## Events
{{% api "_furo-location-events.md" %}}

### **location-path-changed**
<span  style="border-width:2px 10px 2px 2px; border-style: solid;border-color:  rgb(2, 168, 244);font-family:monospace; padding:2px 4px;">at-location-path-changed</span>
→ <small>`Location object`</small>

 Fired when Path portion of the location changed
<br><br>
### **location-hash-changed**
<span  style="border-width:2px 10px 2px 2px; border-style: solid;border-color:  rgb(2, 168, 244);font-family:monospace; padding:2px 4px;">at-location-hash-changed</span>
→ <small>`Location object`</small>

 Fired when Hash portion of the location changed
<br><br>
### **location-query-changed**
<span  style="border-width:2px 10px 2px 2px; border-style: solid;border-color:  rgb(2, 168, 244);font-family:monospace; padding:2px 4px;">at-location-query-changed</span>
→ <small>`Location object`</small>

 Fired when Query portion of the location changed
<br><br>
### **location-changed**
<span  style="border-width:2px 10px 2px 2px; border-style: solid;border-color:  rgb(2, 168, 244);font-family:monospace; padding:2px 4px;">at-location-changed</span>
→ <small>`Location object`</small>

 Fired when something in the location changed
<br><br>
### **external-link-clicked**
<span  style="border-width:2px 10px 2px 2px; border-style: solid;border-color:  rgb(2, 168, 244);font-family:monospace; padding:2px 4px;">at-external-link-clicked</span>
→ <small>`Location object`</small>

 Fired when a external link was clicked
<br><br>
### **url-space-entered**
<span  style="border-width:2px 10px 2px 2px; border-style: solid;border-color:  rgb(2, 168, 244);font-family:monospace; padding:2px 4px;">at-url-space-entered</span>
→ <small>`Location object`</small>

 Fired when the path matches the url-space-regex and neither a search query or hash was given, useful to detect if someone enters the current url
<br><br>
### **__beforeReplaceState**
<span  style="border-width:2px 10px 2px 2px; border-style: solid;border-color:  rgb(2, 168, 244);font-family:monospace; padding:2px 4px;">at-__beforeReplaceState</span>
→ <small>`void`</small>

 Fired when before the state will be updated
<br><br>

## Methods
{{% api "_furo-location-methods.md" %}}











{{% api "_furo-location-footer.md" %}}
{{% api "_furo-location-scripts.md" %}}
