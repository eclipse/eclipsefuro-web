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
 * import  {Init,Iconset} from "@furo/framework/src/furo.js";
 * import {Services, Types} from "@furo/specs/build/data_environment.js"
 * Init.registerApiServices(Services);
 * Init.registerApiTypes(Types);
 * //Attention: Styling is defined in main-stage
 * import {FuroBaseIcons} from "@furo/icon/assets/iconsets/baseIcons";
 * import {MapsIcons} from "@furo/icon/assets/iconsets/mapsIcons";
 * import {PlacesIcons} from "@furo/icon/assets/iconsets/placesIcons";
 * import {CommunicationIcons} from "@furo/icon/assets/iconsets/communicationIcons";
 * import {NotificationIcons} from "@furo/icon/assets/iconsets/notificationIcons";
 * import {FuroDocIcons} from "./assets/iconset";
 * import {AvIcons} from "@furo/icon/assets/iconsets/avIcons";
 * import {DeviceIcons} from "@furo/icon/assets/iconsets/deviceIcons";
 * import {EditorIcons} from "@furo/icon/assets/iconsets/editorIcons";
 * import {SocialIcons} from "@furo/icon/assets/iconsets/socialIcons";
 * import {HardwareIcons} from "@furo/icon/assets/iconsets/hardwareIcons";
 * import {ImageIcons} from "@furo/icon/assets/iconsets/imageIcons";
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
    static registerEnv(section: any, data: any): void;
    static registerApiServices(services: any): void;
    static registerApiTypes(types: any): void;
    /**
     * Register a validator for a specific type.
     *
     * @param typename {String}
     * @param ValidatorClass {Class}
     */
    static registerCustomValidator(typename: string, ValidatorClass: any): void;
    /**
     * Add a single type spec to the registry
     *
     * Attention: If the name already exist, the old entry is overwritten.
     * @param typename
     * @param spec
     */
    static addApiTypeSpec(typename: any, spec: any): void;
    /**
     * Add a single service spec to the registry
     *
     * Attention: If the name already exist, the old entry is overwritten.
     * @param servicename
     * @param spec
     */
    static addApiServiceSpec(servicename: any, spec: any): void;
    /**
     * Apply the prefix to all service deeplinks and to all furo.Reference types with defaults
     * @param prefix
     */
    static applyCustomApiPrefixToServicesAndTypes(): void;
    /**
     * Translates spec content like meta.label, hints
     */
    static translateStaticTypeMessages(): void;
}
/**
 * Sys allows you to set the locale
 *
 */
export class Sys {
    static setLocale(locale: any): void;
}
