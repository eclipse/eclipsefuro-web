# Interaction with javascript


## Trigger a wire imperatively

In some rare conditions you have to trigger a wire from the sources. 
If you have applied the mixin, you can call the **_FBPTriggerWire** method.
 
```
ready(){
  super.ready();
  this._FBPTriggerWire('--wireName', this.dataYouWantToPass);
}
``` 
*this will trigger the wire **--wireName** on all components who receive this wire i.e. `<load-data ƒ-start="--wireName"></load-data>`).*

## Add a wire hook
