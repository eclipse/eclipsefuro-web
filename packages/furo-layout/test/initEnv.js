// -- initialize application env, theme, api

import {Init} from "@furo/framework/furo.js";
import {FuroBaseIcons} from "../iconsets/baseIcons";
import {AvIcons} from "../iconsets/avIcons";
import {Iconset} from "@furo/framework/furo.js";
Iconset.registerIconset("default", FuroBaseIcons);
Iconset.registerIconset("av", AvIcons);
