# @furo/data-ui

UI elements for furo data


## What is inside

### Elements

- [furo-data-context-menu](https://components.furo.pro/?t=FuroDataContextMenu) a context menu 
- [furo-data-table](https://components.furo.pro/?t=FuroDataTable) type based data table
- [furo-data-table-toggle](https://components.furo.pro/?t=FuroDataTableToggle) helper for furo-data-table 
- [furo-data-hide-content](https://components.furo.pro/?t=FuroDataHideContent) hide content container with boolean fields


## Required specs

The ./spec folder contains the signatures which you need or must fulfill to work with some components of this package

### standalone usage
If you just want to use the types with the data-objects and doing the server communication by your own or you just import
some json files, you can add the types and services to your application by doing the following:

```javascript
// first import the spec (scr/configs/init.js is a good place)
import Menuspec from '@furo/data-ui/specs/menu/menuitem.type.spec.js'

// then add / register the type
Init.addApiTypeSpec("menu.Menu", Menuspec)
```


### usage with @furo/specs
If you work with spec projects, import the specs dir in your  `furo.spec.conf.json`. 
```json
{
  "import_spec_dirs": [
      "node_modules/@furo/spec-basetypes", 
      "node_modules/@furo/data-ui/specs"
  ]
}
```

If want to make some changes, just use this specs as a **reference** for the type signature.

