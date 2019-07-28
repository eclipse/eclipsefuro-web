# Advanced topics


## Spread arguments
Todo... 


## Handling responses from functions
When you wire a ƒ-function, a non bubbling event *ƒ-function* with the response value in event.detail will be fired. 
There is no difference to another fired event. You can fire another event, which eventually bubbles, store the response to a property, wire it,...   
  
You can receive and rewire the response from a function with **@-ƒ-functionname="...""**. 
```html
  ...
   <paper-button @-click="--wireWithArray(_values)"> calculate </paper-button>
    
   <multiply-values ƒ-calculate="--wireWithArray" @-ƒ-calculate="--calculated"></multiply-values>
   <multiply-values ƒ-calculate="--wireWithArray" @-ƒ-calculate="((_result))"></multiply-values>
  ...
  ...
  ,properties:{
      _values:{
      type:Array,
      value:[3,2]
      },
      _result:{
      type:Number
      }
  }
```

*When you press the button, both multiply-values.calculate functions are called. The first one will trigger the wire --calculated, the second one will
write the response to the property _result.*
