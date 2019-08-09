# Writing demos for your component
Write your demos like you write your components. Use the `furo-demo-snippet` component to show the source, demo and flow of your components.
The tracer for the wires is always enabled in the furo-demo-snippet. 
You will see the trace results in your console.   

## furo-demo-snippet
Use furo-demo-snippet to add a demo with source view.

```html
<furo-demo-snippet >
    <template>
      <furo-vertical-flex style="height: 180px">
        <div>small</div>
        <furo-empty-spacer style="border: 1px dashed lightgray"></furo-empty-spacer>
        <div>small</div>
      </furo-vertical-flex>
    </template>
</furo-demo-snippet>
```

You will get this:

<furo-demo-snippet >
    <template>
      <furo-vertical-flex style="height: 180px">
        <div>small</div>
        <furo-empty-spacer style="border: 1px dashed lightgray"></furo-empty-spacer>
        <div>small</div>
      </furo-vertical-flex>
    </template>
</furo-demo-snippet>


## Full example of a demo

````javascript
import { LitElement, html, css } from 'lit-element';
import {Theme} from "@furo/framework/theme"; // yes, demos are also themeable and stylable
import {FBP} from "@furo/fbp";
import "@furo/doc-helper"; // imports furo-demo-snippet
import "../furo-catalog"; // import the components you need for the demo itself
/**
 * `demo-furo-vertical-flex`
 *
 * @summary demo for furo-vertical-flex
 * @customElement
 * @appliesMixin FBP
 */
class DemoFuroVerticalFlex extends FBP(LitElement) {

  /**
   * Themable Styles
   * @private
   * @return {CSSResult}
   */
  static get styles() {
    // language=CSS
    return Theme.getThemeForComponent(this.name) || css`
    :host {
        display: block;
        height: 100%;
        padding-right: var(--spacing);
    }
    :host([hidden]) {display: none;}       
`
  }
  
  /**
   * @private
   * @returns {TemplateResult}
   */
  render() {
    // language=HTML
    return html`
      <h2>Demo furo-vertical-flex</h2>
      <p>Arrange your components vertically. Add the flex attribute for the flexing part.</p>
      <furo-demo-snippet demo>
        <template>
          <furo-vertical-flex style="height: 180px">
            <div>small</div>
            <furo-empty-spacer style="border: 1px dashed lightgray"></furo-empty-spacer>
            <div>small</div>
          </furo-vertical-flex>
        </template>
      </furo-demo-snippet>
    `;
  }
}

window.customElements.define('demo-furo-vertical-flex', DemoFuroVerticalFlex);


````
