// -- initialize application env, theme, api

import {Init} from "@furo/framework/furo.js";
import {FuroBaseIcons} from "../iconsets/baseIcons";
import {DeviceIcons} from "../iconsets/deviceIcons";
import {AvIcons} from "../iconsets/avIcons";
import {CommunicationIcons} from "../iconsets/communicationIcons"
import {Iconset} from "@furo/framework/furo.js";
Iconset.registerIconset("default", FuroBaseIcons);
Iconset.registerIconset("av", AvIcons);
Iconset.registerIconset("com", CommunicationIcons);
Iconset.registerIconset("device", DeviceIcons);
