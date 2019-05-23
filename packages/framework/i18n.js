
export class i18n {

  static registerResBundle(bundle){
    this.resbundle = bundle;
  }

  static t(key) {
    return this.resbundle[Furo.env.locale][key] || key + "**"
  }


  static n(key, num) {

    return key + "*" + num;
  }
}
