# Parking data

Sometimes people want to store data in variables/properties for later usage. Maybe the data you want to send
with an event is not the data which makes sense to send. 

Take the click event as an example. If you have a component which reads data from a remote resource, it makes not much
sense to send the click event itself. 
 
 

## Parking event-data to properties
To park data from an event just use the **((property))** '@-event="((property))"' syntax.

`@-value-changed="((color1))` will save the a color value on **color1**. 

> Keep in mind that you will overwrite existing properties of your host. A name like shadowRoot can cause problems.
 


## Sending parked data with events
To send parked data, write the property name in brackets after the wire. Like `@-click="--newColor(color1)"`. This will send
the value of **color1** on the wire `--newColor` instead the click event.

## Simple example

<furo-demo-snippet demo style="height:600px">
<template>
  <furo-data-color-input label="choose color 1"  @-value-changed="((color1)), --newColor"></furo-data-color-input>
  <furo-data-color-input label="choose color 2"  @-value-changed="((color2)), --newColor"></furo-data-color-input>
  <furo-data-color-input label="choose color 3"  @-value-changed="((color3)), --newColor"></furo-data-color-input>
  <hr />
  <light-bulb ƒ-set-color="--newColor" on></light-bulb>  
  <furo-button @-click="--newColor(color1)" label="setColor"></furo-button>   
  <furo-button @-click="--newColor(color2)" label="setColor"></furo-button>   
  <furo-button @-click="--newColor(color3)" label="setColor"></furo-button>   
     
    
</template>
</furo-demo-snippet>



<furo-horizontal-flex>
<a href="../fbp-events/">Fireing events</a>
<furo-empty-spacer></furo-empty-spacer>
<a href="../fbp-wires-more/">More wireing</a>
</furo-horizontal-flex>
