

import {Init, i18n} from "@furo/framework/furo.js";
import {Services, Types} from "@furo/specs/build/data_environment.js"
import {Translations} from "./translations.js";
import {Env} from "@furo/framework/furo";

Init.registerApiServices(Services);
Init.registerApiTypes(Types);
i18n.registerResBundle(Translations);

