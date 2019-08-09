# FBP Lifecycle

## _FBPReady()
_FBPReady() is called, when the wires are registered and the components are able to receive wire data.
This is also the earliest point to enable the tracing.

```javascript
class MyComponent extends FBP(LitElement) {  
  // trace all wires
  _FBPReady(){
    super._FBPReady();
    this._FBPTraceWires();
  }
}
window.customElements.define('my-component', MyComponent);

```


## FBP with lit-element
To use FBP with lit, just extend your class.
```javascript
class MyComponent extends FBP(LitElement) {
  
}
window.customElements.define('my-component', MyComponent);
```

The appender is automatically triggered from FBP via the firstUpdated method.
```javascript
// you dont have to write this, its already done in furo-fbp
firstUpdated(changedProperties) {
    this._appendFBP(this.shadowRoot);
    super.firstUpdated();
}
```



## FBP with native web-components
To use furo-fbp with native components, call `this._appendFBP(this.shadowRoot);` to enable fbp.

```javascript
class MyComponent extends FBP(HTMLElement) {

  constructor() {
    super();
    // Create a shadow root to the element.
    this.attachShadow({mode: 'open'});
    this.shadowRoot.appendChild(template.content.cloneNode(true));
    // Append FBP to my-component
    this._appendFBP(this.shadowRoot);
  }
 
}

window.customElements.define('my-component', MyComponent);

```


## FBP with polymer
To use FBP with polymer, just extend your class.
```javascript
class MyComponent extends FBP(PolymerElement) {
  
}
window.customElements.define('my-component', MyComponent);
```

The appender is automatically triggered from FBP via the _attachDom method.
```javascript
// you dont have to write this, its already done in furo-fbp
_attachDom(dom) {
    this._appendFBP(dom);
    super._attachDom(dom);
}
```
