import {Init, Env, i18n,Sys} from "@furo/framework/furo.js";
import {Services, Types} from "@furo/specs/build/data_environment.js"
import {Translations} from "./translations.js";

Env.api = {"headers": [["Accept-Language", Env._acceptLanguage.join(",")]], "services": {}, "specs": {}};

Init.registerApiServices(Services);
Init.registerApiTypes(Types);
i18n.registerResBundle(Translations);

Init.translateStaticTypeMessages(Env.locale);

export class Tst {
    static getEnv() {
        return Env;
    }
    static getSys() {
        return Sys;
    }
}
