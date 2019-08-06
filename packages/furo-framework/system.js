import {Env} from "@furo/framework/environment";

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

}

/**
 * Todo Describe and explain SYS
 *
 */
export class Sys {
  static setLocale(locale) {
    //todo: checks
    console.log("Set locale from", Env.locale)
    Env.locale = locale;
    console.log("to", Env.locale)
  }
}
