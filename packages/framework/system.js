import {Env} from "./environment";

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

export class Sys {
  static setLocale(locale) {
    //todo: checks
    console.log("Set locale from", Env.locale)
    Env.locale = locale;
    console.log("to", Env.locale)
  }
}
