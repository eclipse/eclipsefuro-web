# Interaction with javascript


## Trigger a wire imperatively

To trigger a wire from the javascript part of your component or from a test, call the **_FBPTriggerWire** method.
You can also trigger the wire in the constructor, then the wire will be queued until the flow is parsed and ready.
 
```js
class TriggerSample extends FBP(LitElement) {
    constructor(){
      super();
      this.data = "Test";
      // this wire will be queued
      this._FBPTriggerWire("--wireName", this.data);
    }
    
    /**
     * _FBPReady triggers when the flow is ready
     */
    _FBPReady(){
      super._FBPReady();
      this._FBPTriggerWire('--wireName', this.data);
    }
    
    /**
     * To pass data from outside to a wire, use this._FBPTriggerWire()
     * 
     */
    fetchRecord(src){
      this._FBPTriggerWire('--fetchRequested', src);
    }
}
``` 


## Add a wire hook
To hook on a wire use `this._FBPAddWireHook("--wirename")`. This comes very handy at testing, or if you have to manipulate some 
data, because the component doesnt send it like an other component needs it.

```javascript
class HookSample extends FBP(LitElement) {

    constructor() {
        super();
        // the md-fetcher can only work with urls
        this._FBPAddWireHook("--pathChanged",(d)=>{
          this._FBPTriggerWire("--fetchMD","/_page/markdown/"+ d.pathSegments[0] + ".md");         
      })
    }
}
```

> The most @-events of the furo base components will fit the ƒ-methods of the corresponding components.
It is like playing domino. Read the api guide to learn what which component sends or expects.



<furo-horizontal-flex>
<a href="../fbp-wires-more/">More wireing</a>
<furo-empty-spacer></furo-empty-spacer>
<a href="../fbp-lifecycle/">Lifecycle</a>
</furo-horizontal-flex>
