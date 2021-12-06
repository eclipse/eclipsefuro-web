---
title: test-bind
description: Custom element to allow using furo-fbp&#39;s template features in a html document.
weight: 50
---

# test-bind
**@furo/fbp** <small>v6.0.0-rc.5</small>
<br>`import '@furo/fbp/src/test-bind.js';`<small>
<br>exports `<test-bind>` custom-element-definition
<br>exports `<empty-test-fbp-node>` custom-element-definition
<br>superclass *HTMLElement*
<br> mixes *FBP*</small>
<br><small>summary *Custom element to allow using furo-fbp&#39;s template features in a html document.*</small>

{{% api "_test-bind-head.md" %}}

`flow-bind`

 Custom element to allow using furo-fbp's template features in a html document.
 It comes very handy, when you want write tests or make some demos.

```
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

{{% api "_test-bind-description.md" %}}


## Attributes and Properties
{{% api "_test-bind-properties.md" %}}



### **template**
</small>


<br><br>

### **_host**
default: **elem**</small>


<br><br>


















## Methods
{{% api "_test-bind-methods.md" %}}
























{{% api "_test-bind-footer.md" %}}
{{% api "_test-bind-scripts.md" %}}
