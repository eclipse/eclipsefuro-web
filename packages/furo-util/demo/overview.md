# Getting started with Flowbased Programming

With FBP you mostly connect the the output of a component (event) with the functions of an ohter element.

## Connecting things

We have a button and an elements which we want to hide after the button is clicked.
 

![hide example](/_doc/images/hideExample.png)


```html

<template>
  <button @-click="--hideClicked">hide</button>
  <element-to-hide ƒ-hide="--hideClicked">First element to hide</element-to-hide>
</template>

```
This doesnt look very impressive in the first moment. But like you can see, there is no scripting involved and there are no id's assigned to the components. This will be more useful if you have more then 2 components. 
 
 
{{<note title="Note">}}
The ƒ-hide method from `element-to-hide` will be called with **event.detail** from the click event as an argument. 
More on this you can read in section  [passing data](#passing-data)
{{</note >}}


## Multiple targets
A wire can have multiple targets. The **--hideClicked** wire from above can trigger multiple elements if you want.

![Multiple targets](/_doc/images/multipleTargets.png)

```html
<template>
  <button @-click="--hideClicked">hide</button>
  <element-to-hide ƒ-hide="--hideClicked">element to hide</element-to-hide>
  <element-to-hide ƒ-hide="--hideClicked">other element to hide</element-to-hide>
  <element-to-show ƒ-show="--hideClicked">other element to hide</element-to-show>
</template>
```
if you press the button, all elements which are connected to the wire will trigger the defined function. In this example the first to will call the hide and the third element will call the show function.
