---
title: DOMFBP
description: 
weight: 100
---

# DOMFBP

**@furo/furo-fbp** <small>v6.7.0</small>
<br>`import '@furo/fbp/src/DOMFBP.js';`<small>
<br>exports *DOMFBP* js
<br>extends *src/DOMFBP.js*
<br> mixes *FBP*</small>


****

DOMFBP allows you to append FBP to any dom element.

**Usage:**

```html
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <title>Title</title>
  <script type="module" src="https://cdn.jsdelivr.net/npm/@furo/precompiled@2.3.0/dist/furo-fbp.js"></script>
  <script>
    import("https://cdn.jsdelivr.net/npm/@furo/precompiled@2.3.0/dist/DOMFBP.js").then(() => {
      // activate FBP on body
      const fbphandle = new DOMFBP(document.body)
      // enable tracing
      fbphandle._FBPTraceWires();
    })
  </script>
</head>
<body>
<button at-click="--buttonClicked" fn-remove="--buttonClicked">remove me</button>
</body>
</html>
```

```js
import {DOMFBP} from '@furo/fbp/src/DOMFBP.js';

// append fbp to the body
new DOMFBP(document.body);


```

## Attributes and Properties
{{% api "_DOMFBP-properties.md" %}}






















## Methods
{{% api "_DOMFBP-methods.md" %}}


















