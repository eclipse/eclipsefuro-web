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

  static getThemeForComponent() {
    return false
  }

  static registerThemeset(theme) {

  }

  static setLocale(locale) {
    //todo: checks
    this.env.locale = locale;
  }

}
