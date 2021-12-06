---
title: furo-config
description: config access
weight: 50
---

# furo-config
**@furo/util** <small>v2.0.0-rc.7</small>
<br>`import '@furo/util/src/furo-config.js';`<small>
<br>exports `<furo-config>` custom-element-definition
<br>superclass *LitElement*</small>
<br><small>summary *config access*</small>

{{% api "_furo-config-head.md" %}}

`furo-config`

 Access config data


```html
  <furo-config-loader section="views" src="/viewconfig.json"></furo-config>
  <furo-config-loader section="second" src="/second.json"></furo-config>
  <furo-config section="views" @-config-updated="--conf"></furo-config>
  <furo-config section="second.section.deep" @-config-updated="--deepconf"></furo-config>
```

{{% api "_furo-config-description.md" %}}


## Attributes and Properties
{{% api "_furo-config-properties.md" %}}



### **section**

<span  style="border-width:2px; border-style: solid;border-color:  rgb(255, 182, 91);font-family:monospace; padding:2px 4px;">section</span>
</small>

section of the config object that you are interested in

access deep object with dots like `main.sub.sub`
<br><br>

### **config**
default: **Config**</small>

The current section of the config, which was defined by `section`.
<br><br>
## Events
{{% api "_furo-config-events.md" %}}

### **config-updated**
<span  style="border-width:2px 10px 2px 2px; border-style: solid;border-color:  rgb(2, 168, 244);font-family:monospace; padding:2px 4px;">@-config-updated</span>
→ <small>`config.section`</small>

Fired when section changed
<br><br>

## Methods
{{% api "_furo-config-methods.md" %}}







{{% api "_furo-config-footer.md" %}}
{{% api "_furo-config-scripts.md" %}}
