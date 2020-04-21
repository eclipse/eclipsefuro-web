// -- initialize application env, theme, api

import  {Init,Iconset} from "@furo/framework/src/furo.js"
import {Services, Types} from "@furo/specs/build/data_environment.js"

Init.registerApiServices(Services);
Init.registerApiTypes(Types);

//Attention: Styling is defined in main-stage
import {FuroBaseIcons} from "@furo/icon/assets/iconsets/baseIcons"
import {MapsIcons} from "@furo/icon/assets/iconsets/mapsIcons"
import {PlacesIcons} from "@furo/icon/assets/iconsets/placesIcons"
import {CommunicationIcons} from "@furo/icon/assets/iconsets/communicationIcons"
import {NotificationIcons} from "@furo/icon/assets/iconsets/notificationIcons"
import {FuroDocIcons} from "./assets/iconset";
import {AvIcons} from "@furo/icon/assets/iconsets/avIcons"
import {DeviceIcons} from "@furo/icon/assets/iconsets/deviceIcons"
import {EditorIcons} from "@furo/icon/assets/iconsets/editorIcons"
import {SocialIcons} from "@furo/icon/assets/iconsets/socialIcons"
import {HardwareIcons} from "@furo/icon/assets/iconsets/hardwareIcons"
import {ImageIcons} from "@furo/icon/assets/iconsets/imageIcons"


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
