# furo flow based programming

## installation
If you work with your own components and just want to have the fbp capability, install [furo-fbp](/api/fbp/doc/FBP).

```bash
    npm install --save @furo/fbp
```


## Basic Usage
After you have furo-fbp installed, import the fbp mixin and use it in your component.

### Import
```javascript
import {FBP} from "@furo/fbp";
```

### FBP with lit-element
To use FBP with lit, just extend your class.
```javascript
class MyComponent extends FBP(LitElement) {
  
}
window.customElements.define('my-component', MyComponent);
```




### FBP with native web-components
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


### FBP with polymer
To use FBP with polymer, just extend your class.
```javascript
class MyComponent extends FBP(PolymerElement) {
  
}
window.customElements.define('my-component', MyComponent);
```


## Detailed documentation
Read more about @furo/fbp on the  [documentation pages](https://furo.pro).



## License

MIT

