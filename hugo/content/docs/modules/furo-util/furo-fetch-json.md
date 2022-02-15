---
title: furo-fetch-json
description: fetch json data
weight: 50
---

# furo-fetch-json
**@furo/util** <small>v2.0.0-rc.14</small>
<br>`import '@furo/util/src/furo-fetch-json.js';`<small>
<br>exports `<furo-fetch-json>` custom-element-definition
<br>superclass *LitElement*
<br> mixes *FBP*</small>
<br><small>summary *fetch json data*</small>

{{% api "_furo-fetch-json-head.md" %}}

`furo-fetch-json`
 Fetches and parses json data from a source.

 ```html
 <furo-fetch-json src="/example.json" ƒ-fetch="|--FBPready" @-data="--contentReceived"></furo-fetch-json>
 ```

{{% api "_furo-fetch-json-description.md" %}}


## Attributes and Properties
{{% api "_furo-fetch-json-properties.md" %}}





### **src**

<span  style="border-width:2px; border-style: solid;border-color:  rgb(255, 182, 91);font-family:monospace; padding:2px 4px;">src</span>
</small>

the url you want to fetch
<br><br>
## Events
{{% api "_furo-fetch-json-events.md" %}}

### **data**
<span  style="border-width:2px 10px 2px 2px; border-style: solid;border-color:  rgb(2, 168, 244);font-family:monospace; padding:2px 4px;">@-data</span>
→ <small>`{Object} json data`</small>

 Fired when data received and json parsed
<br><br>
### **parse-error**
<span  style="border-width:2px 10px 2px 2px; border-style: solid;border-color:  rgb(2, 168, 244);font-family:monospace; padding:2px 4px;">@-parse-error</span>
→ <small>`error`</small>

 Fired when json is not parseable
<br><br>

## Methods
{{% api "_furo-fetch-json-methods.md" %}}


### **fetch**
<small>**fetch**() ⟹ `Promise`</small>

<small>`*`</small> →
<span  style="border-width:2px 2px 2px 10px; border-style: solid;border-color:  rgb(76, 175, 80);font-family:monospace; padding:2px 4px;">ƒ-fetch</span>

fetch and parse the data from specified `src`.

Use fetch-src if you want to pass the source url

<br><br>

### **fetchSrc**
<small>**fetchSrc**(*source* `` *String* `` ) ⟹ `Promise`</small>

<small>`` `` </small> →
<span  style="border-width:2px 2px 2px 10px; border-style: solid;border-color:  rgb(76, 175, 80);font-family:monospace; padding:2px 4px;">ƒ-fetch-src</span>

fetch json data from source

- <small>*source* </small>
- <small>*String* source</small>
<br><br>





{{% api "_furo-fetch-json-footer.md" %}}
{{% api "_furo-fetch-json-scripts.md" %}}
