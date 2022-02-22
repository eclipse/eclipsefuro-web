---
weight: 10
title: "Application Flow"
---

# Application flow / Event driven routing

For this kind of routing you need the following building blocks:

| component                        | description                       |
|:---------------------------------|:----------------------------------|
| @furo/route/src/furo-app-flow-router | app flow manager
| @furo/route/src/furo-app-flow        | emits app flow events
| @furo/config/src/furo-config-loader  | can load config files
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
