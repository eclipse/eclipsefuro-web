---
weight: 7
title: "Sub routing"
---

# Sub Routing
For applications which just have one view, routing is not needed. As soon you need multiple views, routing is needed. 

Even in a small *todo app* you will quickly have more than one view  (list, create, details,...). Having the possibility
to display only one of them at a time, is a nice feature.

> Routing is just the procedure to display a view based on some conditions. 
> The most known condition for routing, is the path URL of your app.
> *Another well known condition could also be a tab bar, this variant is mostly used
> to display different sub parts of a view/page.*

## Example
Lets assume the following structure for a simple application:

```
todo-app
├── View List            //app.com/                     <view-list>
├── View Create          //app.com/create               <view-create>
└── View Details         //app.com/detail?tsk=999       <view-detail> 
    ├── Tab what         //app.com/detail/what?tsk=999 
    ├── Tab when         //app.com/detail/when?tsk=999 
    └── Tab who          //app.com/detail/who?tsk=999 
```



## Building blocks
You need the following building blocks to implement the example:

| component                                                                | description                       |
|:-------------------------------------------------------------------------|:----------------------------------|
| [@furo/route/src/furo-location](/docs/modules/furo-route/furo-location/) | observes location and path
| [@furo/route/src/furo-pages](/docs/modules/furo-route/furo-pages/)       | can activate views based on the current location


## Implementation

*app-shell*
```html
<furo-location
  @-location-changed="--pathChanged"></furo-location>

<furo-pages 
  ƒ-inject-location="--pathChanged" 
  default="list">
    <view-list name="list"></view-list>
    <view-create name="create"></view-create>
    <view-detail name="detail"></view-detail>
</furo-pages>
```

*view-detail*
```html
<h1>Title</h1>
<furo-pages 
  ƒ-inject-location="--pathChanged" 
  default="when">
    <panel-detail-what name="what"></panel-detail-what>
    <panel-detail-when name="when"></panel-detail-when>
    <panel-detail-who  name="who"></panel-detail-who>
</furo-pages>

<furo-location
  url-space-regex="^/detail"
  @-location-changed="--pathChanged"></furo-location>
```

### Summary
The `furo-location` component in `view-detail` will only listen to URLs that begins with "/details" because
the attribute `url-space-regex="^/detail"` is set. 
