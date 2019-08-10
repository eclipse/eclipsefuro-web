# Theming

All visual components within `FURO` support theme overrides.
Themes are in regular a rewrite of the components css and can contain style vars. 

**We do not support mixins as long they are not 'standard'.**

## How to create a theme
The component theme override implemented in `FURO` allows a complete redesign of every built-in component.
* Simply add the component class in your themeset.js (shown in the sample file).
* Copy css template string from the source component (inside static get styles(){})
* Modify css
* Copy modified css template string to your themeset.js

### Sample

```javascript
export const MyFancyThemeset = {
    "ComponentClass": css` CSS Template String`,
    "AnotherComponentClass": css ` :host{ background-color: var(--primary, #000000), color: var(--on-primary)}`,
    ...
};
```

## How to use

#### register a themeset
You have to register the desired themeset, before your app starts. 
Otherwise the default themeset will be applied. The best way is to do it in your index.html.

``` javascript
<script type="module">
import {Init,Sys, Theme} from "@furo/framework";       
import {MyThemeset} from "./custom/themeset"
Theme.registerThemeset(MyThemeset);
...
```

#### to apply theming to your main app:
     
``` javascript
//import theming
  import {Theme} from "@furo/framework/theme"
      
  /**
   *
   * @private
   * @return {CSSResult} 
   */
   static get styles() {
     let theme = Theme.getThemeForComponent(this.name);
     if (theme) {
       return [theme, Styling.theme]
     } else {
       // language=CSS
       return [
         css`
         :host {
           display: block;
           height: 100vh;
           overflow: hidden;
         }
         `, Styling.theme]
     }
   }
```
