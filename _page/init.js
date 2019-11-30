// -- initialize application env, theme, api

import  {Init,Iconset} from "@furo/framework/furo.js";
import {Services, Types} from "@furo/specs/build/data_environment.js"

Init.registerApiServices(Services);
Init.registerApiTypes(Types);

//Attention: Styling is defined in main-stage
import {FuroBaseIcons} from "@furo/icon/iconsets/baseIcons";
import {MapsIcons} from "@furo/icon/iconsets/mapsIcons";
import {PlacesIcons} from "@furo/icon/iconsets/placesIcons";
import {CommunicationIcons} from "@furo/icon/iconsets/communicationIcons";
import {NotificationIcons} from "@furo/icon/iconsets/notificationIcons";
import {FuroDocIcons} from "./assets/iconset";
import {AvIcons} from "@furo/icon/iconsets/avIcons";
import {DeviceIcons} from "@furo/icon/iconsets/deviceIcons";
import {EditorIcons} from "@furo/icon/iconsets/editorIcons";
import {SocialIcons} from "@furo/icon/iconsets/socialIcons";
import {HardwareIcons} from "@furo/icon/iconsets/hardwareIcons";
import {ImageIcons} from "@furo/icon/iconsets/imageIcons";


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
