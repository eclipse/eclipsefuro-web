# Debugging your fbp components
You can use the debugging tools you always used for web development. 
The eventListeners from furo-fbp are the same eventListeners you have had before.

<style> img[src*="#max"]{max-width:600px}</style>

`$0` is the selected element from the elements tab.
 

![debug](/FuroBaseComponents/_page/images/debug.png#max) 

> `getEventListeners($0)` shows you the attached eventListeners


## Show the fbp listeners on a host

Use `$0.__FBPEventlistener` to show all listeners on the host component

![debug](/FuroBaseComponents/_page/images/fbpEventListeners.png#max) 

## Show the wires on a host

Use `$0.__wirebundle` to show all registered wires.

![debug](/FuroBaseComponents/_page/images/wirebundle.png#max)

> Keep in mind that wires without receivers will **not** show in this list.

## Debugging a single wire

To debug a single wire write `$0._FBPDebug("--markdown")`.  

![debug](/FuroBaseComponents/_page/images/fbpDebug.png#max)

> Every time this wire triggers, you will see the following information in your console.

## Tracing

To trace all wires in a host use `$0._FBPTraceWires()`.  

![debug](/FuroBaseComponents/_page/images/fbpTrace.png#max)

> This will log every triggering wire to the console.
In most of the cases, the problems you have solve, are typos in wire names.
