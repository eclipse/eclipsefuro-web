 <h1>Component Testing</h1>
    <furo-vertical-scroller>
      <h2>Overview</h2>
      <p>The tests in FuroBaseComponents can be run directly in the browser (during development) and automated. <br>
        To run the automated tests, which gives you also a coverage report, just run <code>polymer test</code>.</p>
      <p><a href="https://github.com/Polymer/tools/tree/master/packages/web-component-tester" target="_blank">More about testing...</a></p>
      <h3>Add Test to the automate suite</h3>
      <p>To add new packages to the automated test, register them under the suites section in <code>wct.conf.json</code>.
        <br>
        Keep attention to the filenames: in automated tests we use the npm package names an in manual testing we use the
        directory names.
      </p>

> Add the suites to the automated testing, to add additional tests manualy
``` json 
  "suites": [
        "node_modules/@furo/fbp/test/index.html",
        "node_modules/@furo/route/test/index.html"
    ]
```


> Add all tests to the automated testing (**recomended**)
``` json 
  "suites": [
        "node_modules/@furo/fbp/test/*_test.html",
        "node_modules/@furo/route/test/*_.html"
    ]
```

If you want a <a href="/coverage/lcov-report/index.html">coverage report</a> for your files, ad the files or glob to
the includes for the istanbub plugin.

##Testing during development aka TDD

After starting <code>npm run serve</code>, just go to the test page which you want to see. The URL for the
testsuites
is composed as following

``` bash
http://127.0.0.1:8000/packages/furo-fbp/test/wire-hooks_test.html
|         host       |      package   |suite|
|         host       |      package   |      component test     |

```

This link will run the suite for <a href="/packages/furo-fbp/test/" target="_blank">@furo/fbp</a>. <br>
You can also run the tests individually, by adding the name of the test to the url: <a
href="/packages/furo-fbp/test/wire-hooks_test.html" target="_blank">wire-hooks_test.html</a>. Open the
console
for the detailed results, when testing individually.
### Adding Tests to the suite

To add a test to the suite, you have to register it in the <b>index.html</b> file, which is located in the test
folder.

``` json

WCT.loadSuites([
'flow-bind_test.html',
'property-setting_test.html',
'queue_test.html',
'spreading_test.html',
'subpath_test.html',
'wire-hooks_test.html',
]);
```

## Acessibility Tests

Do not forget to add accessibility tests for your components. This is simply done with <a href="https://github.com/dequelabs/axe-core" target="_blank">axe-core</a>. 

``` javascript
import '/node_modules/axe-core/axe.min.js';
import {axeReport} from '/node_modules/pwa-helpers/axe-report.js';

describe('your component ', function () {
// check for a11y errors
it('a11y', () => {
return axeReport(fixture('basic'));
});
}
```
