# Advanced topics
Advanced topics sounds better then misc.    


## Wireing responses from ƒ-xxx
When you wire a ƒ-methodname, a non bubbling event *ƒ-methodname* with the response value in event.detail will be fired. 
Use the response by adding a `@-ƒ-methodname`. 

There is no difference to another fired event. You can fire another event, which eventually bubbles, park the response to a property, wire it,...   
  
You can receive and rewire the response from a methodname with **@-ƒ-methodnamename="--wire""**. 
```html

   <furo-button @-click="--calcNumber(_number)"> calculate sqrt </furo-button>
   <!-- root calculator -->    
   <square-root ƒ-calculate="--calcNumber" @-ƒ-calculate="--calculatedSqrRoot"></square-root>
   
   <display-result ƒ-show="--calculatedSqrRoot"></display-result>
```


## Spread arguments
//Todo @veith write documentation asap.




<furo-horizontal-flex>
<a href="../fbp-data/">Parking Data</a>
<furo-empty-spacer></furo-empty-spacer>
<a href="../fbp-scripting/">Scripting</a>
</furo-horizontal-flex>
