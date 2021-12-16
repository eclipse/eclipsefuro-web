---
weight: 11
title: "Type Renderer"
---

# Dynamic type-dependent rendering
The furo-type-renderer is used to display type specific data. It uses **display** as default context and will warn you
on the console if the requested `context-[type-name]` does not exist or was not imported.

There is a standard set of type-renderers for rendering the most common types.

The standard ui5 set can be integrated with the import
- import '@furo/ui5/src/standard-type-renderers/display-registry.js'.

If you want to implement an individual display of a type, you need your own `context-[type-name]` component and import it.

## Component Naming Convention

Type: google.type.TimeOfDay

```
display-google-type-timeofday
------- ---------------------
|             |
context      type-name
```


## use the generic path
```html
  <furo-type-renderer 
    ƒ-bind-data="--dao(*.data.any_type_of_field)">
  </furo-type-renderer>
```

## or use the specific component
```html
  <display-google-type-timeofday 
    ƒ-bind-data="--dao(*.data.timeofday_field)">
  </display-google-type-timeofday>
```

