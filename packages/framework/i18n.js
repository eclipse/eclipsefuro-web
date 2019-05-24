import {Env} from "./environment"

export class i18n {

  static registerResBundle(bundle){
    this.resbundle = bundle;
  }

  static t(key) {
    return this.resbundle[Env.locale][key] || key + "**"
  }


  static n(key, num) {

    return key + "*" + num;
  }
}
