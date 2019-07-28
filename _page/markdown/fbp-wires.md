# Getting started with Flowbased Programming

With FBP you mostly connect the the output of a component (event) with the functions of an ohter element.

## Connecting things

We have a button and an elements which we want to remove after the button is clicked.
 
  

<furo-demo-snippet demo>
<template>
  <light-bulb ƒ-toggle="--lightSwitchClicked"></light-bulb>
  <furo-button @-click="--lightSwitchClicked" label="i am a lightswitch"></furo-button> 
</template>
</furo-demo-snippet>



This doesnt look very impressive in the first moment. But like you can see, there is no scripting involved and there are no id's assigned to the components. This will be more useful if you have more then 2 components. 



## Multiple targets
A wire can have multiple targets. The **--lightSwitchClicked** wire from above can trigger multiple elements if you want.


<furo-demo-snippet demo>
<template>
  <light-bulb ƒ-toggle="--lightSwitchClicked"></light-bulb>
  <light-bulb ƒ-toggle="--lightSwitchClicked"></light-bulb>
  <light-bulb ƒ-toggle="--lightSwitchClicked"></light-bulb>
  <furo-button @-click="--lightSwitchClicked" label="i am a lightswitch"></furo-button> 
  <light-bulb ƒ-toggle="--otherLightSwitchClicked"></light-bulb>
</template>
</furo-demo-snippet>


if you press the button, all elements which are connected to the wire will trigger the defined function. In this example the last light-bulb is not connected.

## Multiple sources
A wire can also have multiple sources. 

<furo-demo-snippet demo>
<template>
  <light-bulb ƒ-toggle="--lightSwitchClicked"></light-bulb>
  <furo-button @-click="--lightSwitchClicked" label="i am a lightswitch"></furo-button> 
  <furo-button @-click="--lightSwitchClicked" label="i am a lightswitch too"></furo-button>  
 
</template>
</furo-demo-snippet>


It doesn't matter if you press the first or the second hide switch. Both will trigger the wire **--lightSwitchClicked**.

## Multiple sources and targets 
A wire can also have multiple sources and targets.

<furo-demo-snippet demo>
<template>
  <light-bulb ƒ-toggle="--lightSwitchClicked"></light-bulb>
  <light-bulb ƒ-toggle="--lightSwitchClicked"></light-bulb>
  <furo-button @-click="--lightSwitchClicked" label="i am a lightswitch"></furo-button> 
  <furo-button @-click="--lightSwitchClicked" label="i am a lightswitch too"></furo-button>  
  <light-bulb ƒ-toggle="--lightSwitchClicked"></light-bulb>
  <light-bulb ƒ-toggle="--lightSwitchClicked"></light-bulb>
</template>
</furo-demo-snippet>

  

  
  
## Multiple wires from source
You can trigger multiple wires from one source by comma separating them.

<furo-demo-snippet demo>
<template>
  <light-bulb ƒ-toggle="--lightSwitchClicked, --intervallPulse"></light-bulb>  
  <light-bulb ƒ-toggle="--lightSwitchClicked"></light-bulb>
  <light-bulb ƒ-toggle="--lightSwitchClicked"></light-bulb>
  <furo-button @-click="--lightSwitchClicked, --blinkerClicked" label="i am a lightswitch"></furo-button>   
  <interval-pulse ƒ-start="--blinkerClicked" ƒ-stop="--stopBlinkerClicked" @-tick="--intervallPulse" interval="1500"></interval-pulse>
  <furo-button danger  @-click="--stopBlinkerClicked" label="Stop the blinking"></furo-button>   
</template>
</furo-demo-snippet>


If you press the button, it will trigger the **--lightSwitchClicked, --blinkerClicked**.
 
## Multiple wires to target
You can receive from multiple wires by comma separating them.

<furo-demo-snippet demo>
<template>
  <light-bulb ƒ-toggle="--lightSwitchClicked, --intervallPulse"></light-bulb>  
  <furo-button @-click="--lightSwitchClicked" label="i am a lightswitch"></furo-button>   
  <furo-button @-click="--blinkerClicked" label="i am a blinkswitch"></furo-button>   
  <interval-pulse ƒ-start="--blinkerClicked" ƒ-stop="--stopBlinkerClicked" @-tick="--intervallPulse" interval="1500"></interval-pulse>
  <furo-button danger  @-click="--stopBlinkerClicked" label="Stop the blinking"></furo-button>   
  <light-bulb ƒ-toggle="--lightSwitchClicked, --intervallPulse"></light-bulb>  
</template>
</furo-demo-snippet>
  
## Passing useful data to target
By default the **event.detail** is passed to the function you wire. 

<furo-demo-snippet demo>
<template>
  <furo-color-input label="choose a color"  @-value-changed="--newColor"></furo-color-input>
  <hr />
  <light-bulb ƒ-toggle="--lightSwitchClicked, --intervallPulse" ƒ-set-color="--newColor"></light-bulb>  
  <furo-button @-click="--lightSwitchClicked" label="i am a lightswitch"></furo-button>   
  <furo-button @-click="--blinkerClicked" label="i am a blinkswitch"></furo-button>   
  <interval-pulse ƒ-start="--blinkerClicked" ƒ-stop="--stopBlinkerClicked" @-tick="--intervallPulse" interval="1500"></interval-pulse>
  <furo-button danger  @-click="--stopBlinkerClicked" label="Stop the blinking"></furo-button>   
  <light-bulb ƒ-toggle="--lightSwitchClicked, --intervallPulse" ƒ-set-color="--newColor"></light-bulb>
    
</template>
</furo-demo-snippet>
  
But sometimes you want an event as trigger and another property then event.detail as payload. 
You have several ways to accomplish this task.
 

## Send the raw *event* instead of *event.detail*

With an asterix as argument at the producer `@-event="--wireName(*)"` you will send the raw event.

## Use a sub property of the event
If the data on the wire is an object you can use a sub property.

With   `ƒ-something="--wireName(*.page.2.title)"` you will send the property title of the index 2 of the property page (which is an array in this case).



## Trigger a wire imperatively (from javascript)

In some rare conditions you have to trigger a wire from the sources. 
If you have applied the mixin, you can call the **_FBPTriggerWire** method.
 
```
ready(){
  super.ready();
  this._FBPTriggerWire('--wireName', this.dataYouWantToPass);
}
``` 
*this will trigger the wire **--wireName** on all components who receive this wire i.e. `<load-data ƒ-start="--wireName"></load-data>`).*
