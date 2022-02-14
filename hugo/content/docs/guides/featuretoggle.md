---
weight: 20
title: "Feature Toggles"
---

# Feature Toggles

Use [FuroFeatureToggle](/docs/modules/furo-framework/FuroFeatureToggle/) to implement toggles for the following scenarios:   [^1]

- **release toggles** - in the context of Continuous Delivery, unfinished features are toggled off, and only activated when the feature is ready. However, the source code is transferred to the master branch earlier and deployed to the various stages. 
- **experiment toggles** - the classic, for example for A/B tests 
- **ops toggles** - this refers to switches under operational aspects. For example, when new features are rolled out and the performance behavior of the application is still unclear, the feature can simply be turned off if problems occur during operation. As far as everything runs stable, the switches are removed.
- **permission toggles** - certain features are made available only to premium or paying customers, or to users with extended privileges.

Do not use toggles feature for:

- Enabling or hiding buttons, based on a HATEOAS response. Use [furo-hateoas-state](/docs/modules/furo-data/furo-hateoas-state/) for that. 


## Supported toggles for HTML
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
Is the counter component for disable. It removes a disabled attribute from the element on true state of the key and adds the `hidden` attribute on a false state

## Use the toggle in JS
To use the toggles in js, you have the following options:

### setKeyState
This method is used, for changing and initializing a key.

### registerCallback
Register a callback on a

### getKeyState


[^1]: [Wikipedia (de)](https://de.wikipedia.org/wiki/Feature_Toggle), [Wikipedia (en)](https://en.wikipedia.org/wiki/Feature_toggle)
