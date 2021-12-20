---
title: flow-bind
description: Custom element to allow using furo-fbp&#39;s template features in a html document.
weight: 50
---

# flow-bind
**@furo/furo-fbp** <small>v6.0.0-rc.8</small>
<br>`import '@furo/furo-fbp/src/flow-bind.js';`<small>
<br>exports `<flow-bind>` custom-element-definition
<br>superclass *HTMLElement*
<br> mixes *FBP*</small>
<br><small>summary *Custom element to allow using furo-fbp&#39;s template features in a html document.*</small>

{{% api "_flow-bind-head.md" %}}

`flow-bind`

 Custom element to allow using furo-fbp's template features in a html document.
 It comes very handy, when you want write tests or make some demos.

```html
<test-fixture id="basic">
  <template>
   <flow-bind id="elem">
     <template>
       <div id="sender" @-click="--data-received">sender</div>
       <div id="receiver" ƒ-render="--data-received">receiver</div>
     </template>
   </flow-bind>
  </template>
</test-fixture>
```

{{% api "_flow-bind-description.md" %}}


## Attributes and Properties
{{% api "_flow-bind-properties.md" %}}






















## Methods
{{% api "_flow-bind-methods.md" %}}
























{{% api "_flow-bind-footer.md" %}}
{{% api "_flow-bind-scripts.md" %}}
