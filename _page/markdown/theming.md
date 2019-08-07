# Theming

All visual components within `Furo` support theme overrides.
Themes are in regular a rewrite of the components css and can contain style vars. 

We do not use mixins as long they are not 'standard'.

## How to

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

## Example file

```javascript
export const MyFancyThemeset = {
    "MainApp": css` :host{ display: block; height: 100vh; overflow: hidden;}`,
    "FuroTextInput": css``,
    ...
};
```
