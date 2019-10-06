import {Env} from "./environment";
import {i18n} from "./furo.js";

/**
 * The init class is used to init your *Env*, the API services and the API types.
 *
 * Use the init package in the init phase of your application
 *
 * ## example init
 *
 *
 * ```javascript
 * // -- initialize application env, theme, api
 * import  {Init,Iconset} from "@furo/framework/furo.js";
 * import {Services, Types} from "@furo/specs/build/data_environment.js"
 * Init.registerApiServices(Services);
 * Init.registerApiTypes(Types);
 * //Attention: Styling is defined in main-stage
 * import {FuroBaseIcons} from "@furo/layout/iconsets/baseIcons";
 * import {MapsIcons} from "@furo/layout/iconsets/mapsIcons";
 * import {PlacesIcons} from "@furo/layout/iconsets/placesIcons";
 * import {CommunicationIcons} from "@furo/layout/iconsets/communicationIcons";
 * import {NotificationIcons} from "@furo/layout/iconsets/notificationIcons";
 * import {FuroDocIcons} from "./assets/iconset";
 * import {AvIcons} from "@furo/layout/iconsets/avIcons";
 * import {DeviceIcons} from "@furo/layout/iconsets/deviceIcons";
 * import {EditorIcons} from "@furo/layout/iconsets/editorIcons";
 * import {SocialIcons} from "@furo/layout/iconsets/socialIcons";
 * import {HardwareIcons} from "@furo/layout/iconsets/hardwareIcons";
 * import {ImageIcons} from "@furo/layout/iconsets/imageIcons";
 *
 *
 * Iconset.registerIconset("furo", FuroDocIcons);
 * Iconset.registerIconset("default", FuroBaseIcons);
 * Iconset.registerIconset("av", AvIcons);
 * Iconset.registerIconset("communication", CommunicationIcons);
 * Iconset.registerIconset("device", DeviceIcons);
 * Iconset.registerIconset("editor", EditorIcons);
 * Iconset.registerIconset("social", SocialIcons);
 * Iconset.registerIconset("places", PlacesIcons);
 * Iconset.registerIconset("notification", NotificationIcons);
 * Iconset.registerIconset("map", MapsIcons);
 * Iconset.registerIconset("hardware", HardwareIcons);
 * Iconset.registerIconset("image", ImageIcons);

 * ```
 *
 */
export class Init {

    static registerEnv(section, data) {
        Env[section] = data;
    }

    static registerApiServices(services) {
        Env.api.services = services
    }

    static registerApiTypes(types) {
        Env.api.specs = types
    }

    /**
     *
     * @param locale
     */
    static translateStaticTypeMessages(locale) {
        // read from original spec to apply locale
        if(this._raw_spec){
            Env.api.specs = JSON.parse(this._raw_spec);
        }else{
            this._raw_spec = JSON.stringify(Env.api.specs);
        }

        for (let type in Env.api.specs) {
            for (let field in Env.api.specs[type].fields) {
                // translate static meta messagess
                if (Env.api.specs[type].fields[field].meta) {

                    // translate static label text
                    if (Env.api.specs[type].fields[field].meta.label) {
                        Env.api.specs[type].fields[field].meta.label = i18n.t(Env.api.specs[type].fields[field].meta.label);
                    }
                    // translate static hint text
                    if (Env.api.specs[type].fields[field].meta.hint) {
                        Env.api.specs[type].fields[field].meta.hint = i18n.t(Env.api.specs[type].fields[field].meta.hint);
                    }

                }
                if (Env.api.specs[type].fields[field].constraints) {
                    for (let attr in Env.api.specs[type].fields[field].constraints) {
                        if (Env.api.specs[type].fields[field].constraints.hasOwnProperty(attr)) {
                            if (Env.api.specs[type].fields[field].constraints[attr].message) {
                                Env.api.specs[type].fields[field].constraints[attr].message = i18n.t(Env.api.specs[type].fields[field].constraints[attr].message);
                            }
                        }
                    }

                }

            }
        }

    }

}

/**
 * Sys allows you to set the locale
 *
 */
export class Sys {
    static setLocale(locale) {
        //todo: checks
        console.log("Set locale from", Env.locale);
        Env.locale = locale;
        Init.translateStaticTypeMessages(Env.locale);
        console.log("to", Env.locale)
    }
}
