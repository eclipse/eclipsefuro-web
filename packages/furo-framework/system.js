import {Env} from "./environment";
import {i18n} from "@furo/framework/furo.js";

/**
 * Todo Describe and explain
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
 * Todo Describe and explain SYS
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
