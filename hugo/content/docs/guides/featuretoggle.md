---
weight: 20
title: "Feature Toggles"
---

# Feature Toggles

Use [FuroFeatureToggle](/docs/modules/furo-framework/FuroFeatureToggle/) to implement toggles for the following scenarios:   [^1]

- **release toggles** - in the context of Continuous Delivery, unfinished features are toggled off, and only activated when the feature is ready. However, the source code is transferred to the master branch earlier and deployed to the various stages. 
- **experiment toggles** - the classic, for example for A/B tests 
- **ops toggles** - this refers to switches under operational aspects. For example, when new features are rolled out and the performance behavior of the application is still unclear, the feature can simply be turned off if problems occur during operation. As far as everything runs stable, the switches are removed.
- **permission toggles** - certain features are made available only to a subset of users, or to users with extended privileges.

## Hints:
- read [feature-toggle-best-practices from flagship.io](https://www.flagship.io/feature-toggle-best-practices/)
- Keep toggle scope as small as possible
- Always expose feature toggle configurations
- Have a standardized toggle naming scheme
- For enabling or hiding buttons, based on a HATEOAS response, use [furo-hateoas-state](/docs/modules/furo-data/furo-hateoas-state/).



## Initialization
If you want to init your keys, register them with `registerKeyMap`.
This method can be called at any time, because a uninitialized key defaults to the false state.


```js
import { FuroFeatureToggle } from '@furo/framework/src/FuroFeatureToggler/FuroFeatureToggle.js';
  
FuroFeatureToggle.registerKeyMap({
  "feature.a":true,
  "feature.b":true,
  "feature.c":false,
});
```
*init.js*

## Supported toggles for Web Components or HTML
The lib supports the following cases, for direct usage in your html:

### data-furo-toggle-append
Appends the element on true state of the key and removes the element from the dom on false state.
This will also happen if you change the state of the toggle, at a later time.

> For this, you have to write the tag in the HTML, to avoid flickering, 
> you can import the needed component with a toggle callback.


### data-furo-toggle-remove
This behaves like the append toggle, but the difference is, that it
removes the element on true state of the key and will append the element on a false state

### data-furo-toggle-hide 
Will add a `hidden=""`  attribute to the element on true state of the key
and removes the attribute on a false state.

### data-furo-toggle-show
Is the counter component for hide. It removes a hidden attribute from the element on true state of the key and adds the attribute on a false state

### data-furo-toggle-disable
Will add a `disabled=""`  attribute to the element on true state of the key and removes the attribute on a false state.

### data-furo-toggle-enable
Is the counter component for disable. It removes a disabled attribute from the element on true state of the key and adds the `disabled` attribute on a false state



## Helpers and Utils
At the moment, there is only the `furo-feature-toggle` component available. 
Feel free to file an issue with a feature request, if you miss something.


[^1]: [Wikipedia (de)](https://de.wikipedia.org/wiki/Feature_Toggle), [Wikipedia (en)](https://en.wikipedia.org/wiki/Feature_toggle)
