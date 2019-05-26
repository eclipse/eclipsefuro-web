/**
 * Todo Describe and explain env
 *
 */
export class Env {

}

// default Env
Env._acceptLanguage = window.navigator.languages.map((e,i)=>{if(i===0){e = e.substr(0,2)}; return e + ";q=" + Math.max(0.1,(1 - (i+1)/10))});
Env._acceptLanguage.unshift(window.navigator.language);

Env.api = {"headers": [["Accept-Language", Env._acceptLanguage.join(",")]], "services": {}, "specs": {}};
Env.locale = window.navigator.language;
