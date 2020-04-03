# Usage

- replace furo-layout and furo/layout with your package name.
- merge the dependencies from package.json to the new package json
- set the version on the package json
- replace the demos, tests and the sample-component

- change the catalog import in your demos to:
```js
// eslint-disable-next-line import/no-extraneous-dependencies
import "@furo/layout/src/furo-catalog.js";

```

