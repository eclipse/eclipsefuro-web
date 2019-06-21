// -- initialize application env, theme, api

import {Init} from "@furo/framework/furo.js";
import {Iconset} from "@furo/framework/furo.js";
import {FuroBaseIcons} from "../iconsets/baseIcons";
import {DeviceIcons} from "../iconsets/deviceIcons";
import {AvIcons} from "../iconsets/avIcons";
import {CommunicationIcons} from "../iconsets/communicationIcons"
import {EditorIcons} from "../iconsets/editorIcons";
import {SocialIcons} from "../iconsets/socialIcons";
import {PlacesIcons} from "../iconsets/placesIcons";
import {NotificationIcons} from "../iconsets/notificationIcons";
import {MapsIcons} from "../iconsets/mapsIcons";
import {HardwareIcons} from "../iconsets/hardwareIcons";
import {ImageIcons} from "../iconsets/imageIcons";
Iconset.registerIconset("default", FuroBaseIcons);
Iconset.registerIconset("av", AvIcons);
Iconset.registerIconset("com", CommunicationIcons);
Iconset.registerIconset("device", DeviceIcons);
Iconset.registerIconset("editor", EditorIcons);
Iconset.registerIconset("social", SocialIcons);
Iconset.registerIconset("places", PlacesIcons);
Iconset.registerIconset("notify", NotificationIcons);
Iconset.registerIconset("map", MapsIcons);
Iconset.registerIconset("hardware", HardwareIcons);
Iconset.registerIconset("image", ImageIcons);
