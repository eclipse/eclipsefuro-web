---
title: furo-markdown
description: renders markdown data
weight: 50
---

# furo-markdown
**@furo/util** <small>v2.0.0-rc.17</small>
<br>`import '@furo/util/src/furo-markdown.js';`<small>
<br>exports `<furo-markdown>` custom-element-definition
<br>superclass *LitElement*</small>
<br><small>summary *renders markdown data*</small>

{{% api "_furo-markdown-head.md" %}}

`furo-markdown`
 Renders given md data with parseMarkdown or loads a md file with `mdsrc="source.md"`

{{% api "_furo-markdown-description.md" %}}


## Attributes and Properties
{{% api "_furo-markdown-properties.md" %}}



### **mdsrc**

<span  style="border-width:2px; border-style: solid;border-color:  rgb(255, 182, 91);font-family:monospace; padding:2px 4px;">mdsrc</span>
</small>

source of the md
<br><br>

### **markdown**

<span  style="border-width:2px; border-style: solid;border-color:  rgb(255, 182, 91);font-family:monospace; padding:2px 4px;">markdown</span>
</small>

markdown string
<br><br>




### **markdownRendered**
default: **undefined**</small>


<br><br>

### **unsafe**

<span  style="border-width:2px; border-style: solid;border-color:  rgb(255, 182, 91);font-family:monospace; padding:2px 4px;">unsafe</span>
</small>

allow unsafe md. (writing html, components,...)
<br><br>

## Methods
{{% api "_furo-markdown-methods.md" %}}




### **fetchMd**
<small>**fetchMd**(*src* `` ) ⟹ `Promise&lt;string | never&gt;`</small>

<small>`` </small> →
<span  style="border-width:2px 2px 2px 10px; border-style: solid;border-color:  rgb(76, 175, 80);font-family:monospace; padding:2px 4px;">ƒ-fetch-md</span>

fetch markdown from a url or path

- <small>*src* </small>
<br><br>

### **parseMarkdown**
<small>**parseMarkdown**(*markdown* `` ) ⟹ `void`</small>

<small>`` </small> →
<span  style="border-width:2px 2px 2px 10px; border-style: solid;border-color:  rgb(76, 175, 80);font-family:monospace; padding:2px 4px;">ƒ-parse-markdown</span>

Parse markdown string to html content

- <small>*markdown* </small>
<br><br>







{{% api "_furo-markdown-footer.md" %}}
{{% api "_furo-markdown-scripts.md" %}}
