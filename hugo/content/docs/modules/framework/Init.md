---
title: Init
description: 
weight: 100
---

# Init

**@furo/framework** <small>v2.0.0-rc.3</small>
<br>`import '@furo/framework/src/src/system.js';`<small>
<br>exports *Init* js
<br>exports *Sys* js</small>


****

The init class is used to init your *Env*, the API services and the API types.

Use the init package in the init phase of your application

## example init


```javascript
// -- initialize application env, theme, api
import  {Init,Iconset} from "@furo/framework/src/furo.js";
import {Services, Types} from "@furo/specs/build/data_environment.js"
Init.registerApiServices(Services);
Init.registerApiTypes(Types);
//Attention: Styling is defined in main-stage
import {FuroBaseIcons} from "@furo/icon/assets/iconsets/baseIcons";
import {MapsIcons} from "@furo/icon/assets/iconsets/mapsIcons";
import {PlacesIcons} from "@furo/icon/assets/iconsets/placesIcons";
import {CommunicationIcons} from "@furo/icon/assets/iconsets/communicationIcons";
import {NotificationIcons} from "@furo/icon/assets/iconsets/notificationIcons";
import {FuroDocIcons} from "./assets/iconset";
import {AvIcons} from "@furo/icon/assets/iconsets/avIcons";
import {DeviceIcons} from "@furo/icon/assets/iconsets/deviceIcons";
import {EditorIcons} from "@furo/icon/assets/iconsets/editorIcons";
import {SocialIcons} from "@furo/icon/assets/iconsets/socialIcons";
import {HardwareIcons} from "@furo/icon/assets/iconsets/hardwareIcons";
import {ImageIcons} from "@furo/icon/assets/iconsets/imageIcons";


Iconset.registerIconset("furo", FuroDocIcons);
Iconset.registerIconset("default", FuroBaseIcons);
Iconset.registerIconset("av", AvIcons);
Iconset.registerIconset("communication", CommunicationIcons);
Iconset.registerIconset("device", DeviceIcons);
Iconset.registerIconset("editor", EditorIcons);
Iconset.registerIconset("social", SocialIcons);
Iconset.registerIconset("places", PlacesIcons);
Iconset.registerIconset("notification", NotificationIcons);
Iconset.registerIconset("map", MapsIcons);
Iconset.registerIconset("hardware", HardwareIcons);
Iconset.registerIconset("image", ImageIcons);

```

## Attributes and Properties
{{% api "_Init-properties.md" %}}












## Methods
{{% api "_Init-methods.md" %}}


### **registerEnv**
<small>**registerEnv**(*section* `` *data* `` ) ⟹ `void`</small>



- <small>section </small>
- <small>data </small>
<br><br>

### **registerApiServices**
<small>**registerApiServices**(*services* `` ) ⟹ `void`</small>



- <small>services </small>
<br><br>

### **registerApiTypes**
<small>**registerApiTypes**(*types* `` ) ⟹ `void`</small>



- <small>types </small>
<br><br>

### **addApiTypeSpec**
<small>**addApiTypeSpec**(*typename* `` *spec* `` ) ⟹ `void`</small>

Add a single type spec to the registry

Attention: If the name already exist, the old entry is overwritten.

- <small>typename </small>
- <small>spec </small>
<br><br>

### **addApiServiceSpec**
<small>**addApiServiceSpec**(*servicename* `` *spec* `` ) ⟹ `void`</small>

Add a single service spec to the registry

Attention: If the name already exist, the old entry is overwritten.

- <small>servicename </small>
- <small>spec </small>
<br><br>

### **applyCustomApiPrefixToServicesAndTypes**
<small>**applyCustomApiPrefixToServicesAndTypes**(*prefix* `` ) ⟹ `void`</small>

Apply the prefix to all service deeplinks and to all furo.Reference types with defaults

- <small>prefix </small>
<br><br>

### **translateStaticTypeMessages**
<small>**translateStaticTypeMessages**() ⟹ `void`</small>

Translates spec content like meta.label, hints

<br><br>
