// -- initialize application env, theme, api

//import {Init, Env} from "@furo/framework/furo.js";
//import {Theme} from "@furo/framework/theme.js";
//import {Services, Types} from "@furo/spec/baseTypes.js"


import {Iconset} from "@furo/framework/furo.js";
import {FuroBaseIcons} from "@furo/layout/iconsets/baseIcons";
import {MapsIcons} from "@furo/layout/iconsets/mapsIcons";
import {PlacesIcons} from "@furo/layout/iconsets/placesIcons";
import {CommunicationIcons} from "@furo/layout/iconsets/communicationIcons";
import {NotificationIcons} from "@furo/layout/iconsets/notificationIcons";
import {FuroDocIcons} from "./assets/iconset";

Iconset.registerIconset("default", FuroBaseIcons);
Iconset.registerIconset("maps", MapsIcons);
Iconset.registerIconset("places", PlacesIcons);
Iconset.registerIconset("furo", FuroDocIcons);
Iconset.registerIconset("communication", CommunicationIcons);
Iconset.registerIconset("notification", NotificationIcons);
