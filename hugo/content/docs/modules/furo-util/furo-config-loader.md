---
title: furo-config-loader
description: load config files
weight: 50
---

# furo-config-loader
**@furo/util** <small>v2.0.7</small>
<br>`import '@furo/util/src/furo-config-loader.js';`<small>
<br>exports `<furo-config-loader>` custom-element-definition
<br>superclass *LitElement*
<br> mixes *FBP*</small>
<br><small>summary *load config files*</small>

{{% api "_furo-config-loader-head.md" %}}

`furo-config-loader` loads a configuration json in to the defined section.

To access the config values, use `furo-config`.

```html
<furo-config-loader
    src="/custom/view-config.json"
    section="views"
    ></furo-config-loader>
```

{{% api "_furo-config-loader-description.md" %}}


## Attributes and Properties
{{% api "_furo-config-loader-properties.md" %}}




### **src**

<span  style="border-width:2px; border-style: solid;border-color:  rgb(255, 182, 91);font-family:monospace; padding:2px 4px;">src</span>
</small>

File source
<br><br>

### **section**

<span  style="border-width:2px; border-style: solid;border-color:  rgb(255, 182, 91);font-family:monospace; padding:2px 4px;">section</span>
</small>

Targeted section to load the config in.
<br><br>
## Events
{{% api "_furo-config-loader-events.md" %}}

### **config-loaded**
<span  style="border-width:2px 10px 2px 2px; border-style: solid;border-color:  rgb(2, 168, 244);font-family:monospace; padding:2px 4px;">at-config-loaded</span>
→ <small>`Object`</small>

Fired when the config is loaded with the loaded config as detail.
<br><br>

## Methods
{{% api "_furo-config-loader-methods.md" %}}








{{% api "_furo-config-loader-footer.md" %}}
{{% api "_furo-config-loader-scripts.md" %}}
