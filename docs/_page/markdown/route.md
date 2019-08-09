# Route

`FURO` supports different kinds of routing. We distinguish between deeplink (permalink), sub routing and flow events. 

### Building blocks
You need the following building blocks:

| component                 | description                       |
|:--------------------------|:----------------------------------|
| @furo/route/furo-location | observes location and path        | 
| @furo/data/deep-link      | builds static HATEOAS information based on query params  |
| @furo/route/furo-pages    | can activate views based on the current location |

### Deep link (perma link)
Why perma links?
* Fully stateless views
* Less complexity
* No refresh handling

``` html
<deep-link ƒ-qp-in="--pageQueryChanged(*.query)" 
           service="task" 
           @-hts-out="--hts"></deep-link>

<!-- e.g. -->
<entity-agent service="task" 
              ƒ-bind-request-object="--data"
              ƒ-hts-in="--hts"
              ƒ-load="--actionWIRE"
              @-response="--responseWIRE"></entity-agent>
```

**Note:** Each page MUST be accessible with a perma link.

### App flow 

For this kind of routing you need the following building blocks:

| component                        | description                       |
|:---------------------------------|:----------------------------------|
| @furo/route/furo-app-flow-router | app flow manager                  | 
| @furo/route/furo-app-flow        | emits app flow events             |
| @furo/config/furo-config-loader  | can load config files             |
| flowConfig.json                  | flow config definition file       |

``` html
<!-- main-app -->
<furo-config-loader src="custom/flowConfig.json" section="flow"  
                    @-config-loaded="--flowConfigLoaded"></furo-config-loader> 
<furo-app-flow-router ƒ-.config="--flowConfigLoaded" 
                      ƒ-trigger="--flowEvent"></furo-app-flow-router>

<!-- somewhere inside e.g. view, page -->
<furo-app-flow ƒ-emit="--actionWire" event="actionSaved"></furo-app-flow>

```
---

#### flowConfig configuration

```
/**
 *Configuration Array
 *
 * | current   | flow-event-name      | target      | [mapping]          | noHistory          |
 * |:----------|:---------------------|:------------|:-------------------|:-------------------|
 * | view-main | form-complete        | detail-view | element => aufgabe | flag               |
 * | *         | menu-settings-click  | settings    |                    |                    |
 *
 *
 *
 *  [['view-main', 'button-tap', 'detail-view',  'task => id]]
 *  if current is set to view-main and the app-flow-event with name 'button-tap' 
 *  is triggered, current is set to detail-view and data.task from app-flow is mapped to data.id.
 *
 *  Special configurations:
 *
 *  if target is set to HISTORY-BACK the app-flow-event will 
 *  allways set the current to the lastCurrent
 *
 *  [['view-detail', 'button-tap', 'HISTORY-BACK',  'task => id]] will route you back to view-main
 *
 *  You can set a wildcard for "current". If you check the example: menu-settings-click can be triggered
 *  from any current. If there is a "current" with menu-settings-click configured and you are 
 *  there, the wildcard is not used.
 *
 *  Set noHistory if there "current" view should not be listed under _lastCurrents. 
 *  This is used to exclude pages from the back navigation.
 */
```
---

#### Example file
``` json
[
    ["*", "unauthorized", "auth"],
    ["overview", "actionSaved", "detailview"]
]
```

### Subrouting
``` html
<furo-horizontal-flex>
    <a href="/routing/one" title="Go to page one">
        <li><span>Page 1</span></li>
    </a>
    <a href="/routing/two" title="Go to page two">
        <li><span>Page 2</span></li>
    </a>
    <a href="/routing/three" title="Go to page three">
        <li><span>Page 3</span></li>
    </a>
</furo-horizontal-flex>

<!-- location with url regex -->
<furo-location url-space-regex="^/routing" 
               @-location-changed="--pathChanged"></furo-location>
            
<!-- Put your views here -->
<furo-pages ƒ-inject-location="--pathChanged" default="one">
    <view-one name="one"></view-one>
    <view-two name="two"></view-two>
    <view-three name="three"></view-three>
</furo-pages>

```