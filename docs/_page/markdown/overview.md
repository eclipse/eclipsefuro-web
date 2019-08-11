# Introduction to Furo Flowbased Programming

Write your applications like you make the concept for your application. 
Normaly you draw a few components and some arrows to connect the components, to describe your intention. 
Why you don’t do the same to write your app or component? Use existing web-components and wire them to build your application.

**TL/DR**: Furo-FBP is a shorthand notation for adding eventlisteners and invoking methods on elements without writing any javascript. Thats it.

But there is more then just eventlisteners in Furo-FBP. 
Watch the video below for a short introduction or read more in the [Flowbased Programming](/guide/md/fbp-wires/) section.

We also recommended the [Manuals] section, to get a better understanding how to wire the [components](/api/doc/input/) 
from the different packages to something useful.

### FBP 101

In furo-fbp you connect events from one component to methods of an ohter component. If you get this concept, you have understand
already 90% of the thing you need to write a program.

![101](/_page/images/fbp101.jpg)

> About the demo snippet viewer: Click on the **flow** tab see the flow, click on the **source** tab to see the source and click on the **demo** tab to see the demo.

<furo-demo-snippet flow>
<template>
  <!-- when you click the button, it will dispatch a click event -->
  <furo-button @-click="--lightSwitchClicked" label="i am a lightswitch"></furo-button>
  <!-- The event will travel on the wire --lightSwitchClicked, which trigges the ƒ-toggle method --> 
  <light-bulb ƒ-toggle="--lightSwitchClicked"></light-bulb> 
</template>
</furo-demo-snippet>


- ☞ Position the mouse on the dashed boxes to read the comments.
- ☞ Position the mouse on the blue lines to see the wire names.
- ☞ Click on source to see the sourcecode.
- ☞ Click on demo to see the demo.


## The introduction video
The video is a little bit old, but it gives you a short impression of the underlying concepts.
The concept is trival and the more components you know, the more possibilities you will have.

*The video is in german.*
 <iframe width="560" height="315" src="https://www.youtube.com/embed/vbMqbL5q9h0?start=1382" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
