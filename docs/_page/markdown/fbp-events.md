# Fireing events

Web Components use events to communicate state changes up the DOM tree to parent elements. 

Furo also provides a notation for events (bubbling [**^^e**] and non bubbling [**^e**]), which allow you to specify events  declaratively.

On the first view, it does not make a lot sense to *rename* events. But imagine a simple controller component with 3 buttons labeled with play, pause and next. It is much easier to wire @-play, @-next and @-pause then just the @-click. The @-click can come from each button and you have to find out which button was pressed.   

[learn more about events...](https://developer.mozilla.org/en-US/docs/Web/Events)

## Non bubbling events 
Non bubbling events will, as the name says, not bubble and stop at the next dom parent.

To fire a non-bubbling-event use **^event-name**.

<furo-demo-snippet flow no-demo description="*non bubbling example">
<template>
<my-button @-click="--searchClicked">Search</my-button>
<!-- when my-searcher fires the response event, the data-received event will be fired -->
<my-searcher url="https://www.googleapis.com/youtube/v3/search"
ƒ-search="--searchClicked"
@-response="^data-received">                   
</my-searcher>
</template>
</furo-demo-snippet>



## Bubbling events
To fire a bubbling-event use **^^event-name**. Bubbling is useful if you want or have to use the event in a parent component. It is a good practice to document the bubbling events from the child components. 


<furo-demo-snippet flow no-demo description="*non bubbling example">
<template>
<my-button @-click="--searchClicked">Search</my-button>
<!-- when my-searcher fires the response event, the general-error event will be fired -->
<my-searcher url="https://www.googleapis.com/youtube/v3/search"
ƒ-search="--searchClicked"
@-error="^^general-error">                   
</my-searcher>
</template>
</furo-demo-snippet>

*the* ***general-error*** *event will bubble.* 

## Non bubbling host events
With **-^** you can dispatch an event, which is available on the host only, but does not bubble. This is useful when you want 
to mimic the blur event (which does not bubble) on the outside of your component.

## Sending host data with events
Sometimes you want to send some values with your event, when the default **event.detail** is not useful. 
You can send any host property with your event by giving the property name in brackets like  ^^some-event(**propertyName**) .

**bubbling event with custom data**
```html 
   <paper-button @-click="^^some-event(_privateProperty)"> check </paper-button> 
```
*The click event sends usually a number for the amount of clicks with a certain time distance. So it will send 1 for a click, 2 for a doubleClick, 3 for a trippleClick,...*


## Sending multiple events from a single source
You can also send multiple events from a single source. 
```html 
   <paper-button @-click="^^some-event(_privateProperty),^other-event,--checkTapped"> check </paper-button> 
```
*When the button is tapped,* ***some-event*** *and* ***other-event*** *will be fired and the wire* ***--checkTapped*** *will be triggered.* 

## Stop propagation
To stop the event propagation to parent elements, add a **:STOP** to the event wires `@-error=":STOP, --errorOccured"`. 
The wires in this event-chain will be triggered. But the propagation will be stopped.

## Prevent Default
Prevent default is not implemented, write an issue on the project page if you need it. 



<furo-horizontal-flex>
<a href="../fbp-wires/">Wireing</a>
<furo-empty-spacer></furo-empty-spacer>
<a href="../fbp-data/">Parking Data</a>
</furo-horizontal-flex>
