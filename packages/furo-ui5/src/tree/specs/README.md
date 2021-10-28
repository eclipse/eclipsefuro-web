This folder contains the signatures which you need or must fulfill to work with some components of this package

## Usage


### standalone
If you just want to use the types with the data-objects and doing the server communication by your own or you just import
some json files, you can add the types and services to your application by doing the following:

```javascript
// first import the spec (scr/configs/init.js is a good place)
import spec from '@furo/data-navigation/specs/navigation/navigationnode.type.spec.js'

// then add / register the type
Init.addApiTypeSpec("navigation.Navigationnode", spec)
```


### with @furo/specs
If you work with spec projects, import the specs dir in your  `furo.spec.conf.json`. 
```json
{
  "import_spec_dirs": [
      "node_modules/@furo/spec-basetypes", 
      "node_modules/@furo/navigation/src/specs"
  ]
}
```

If want to make some changes, just use this specs as a **reference** for the type signature.

