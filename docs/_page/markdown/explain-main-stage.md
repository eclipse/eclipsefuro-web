# The main-stage

The main stage is the ... for your application.

<furo-demo-snippet no-demo="Demo is disabled to avoid recursion!" flow style="height:600px">
<template>
      <furo-vertical-flex>
        <header-toolbar></header-toolbar>    
        <!-- When the location changes, furo pages will set the active page to pathSegments[0] -->   
        <furo-pages flex ƒ-inject-location="--locationChanged" default="home">
          <view-home name="home"></view-home>
          <view-guide name="guide"></view-guide>
          <view-api name="api"></view-api>
        </furo-pages>       
      </furo-vertical-flex>
      <!-- watch the address bar for changes -->
      <furo-location @-location-changed="--locationChanged"></furo-location>
</template>
</furo-demo-snippet>  



