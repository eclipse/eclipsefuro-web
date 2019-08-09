1. you can put your custom svg icons together into a iconset and export the set

```js
    /**
     * custom svg demo-icons 
     * demo-icons.js
     */
    export const DemoIcons = {
        "wb-cloudy": '<g><path d="M19.36 10.04...."></path></g>',
        "wb-sunny": '<g><path d="M6.76 4.84l-1.8-1.79-1.41 1.41 1.79 1.79 ...."></path></g>'
    };
    
```

2. then import and register the custom iconset for the global use

```js
    import {Iconset} from "@furo/framework/furo.js";
    import {DemoIcons} from "./demo-icons";
    Iconset.registerIconset("demo", DemoIcons);
    
```

3. after registering you can use the custom icons. 
icon name should be in this format: "iconsetName:iconName"

```html
    <!-- import iconset and furo-icon from @furo into you element -->
    
    import '@furo/layout/furo-icon';
    
    <!--  use the imported custom name 'wb-sunny' from custom iconset 'demo' -->
    
    <furo-icon icon="demo:wb-sunny"></furo-icon>
    
    
```
