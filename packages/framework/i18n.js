import {Env} from "./environment"

/**
 * Todo Describe and explain
 *
 */
export class i18n {

    static registerResBundle(bundle) {
        this.resbundle = bundle;
    }

    static t(key) {

        if (i18n.resbundle === undefined) {
            console.warn('There is no resouce bundle registered. Please register with i18.registerResBundle(RESBUNDLE).');
            return key;
        }

        let b = i18n.resbundle[Env.locale];

        if (b === undefined) {
            console.warn('No resource bundle with locale ' + Env.locale + ' exists.');
            return key + '**';
        }

        const res = key.split('.').reduce((acc, part) => acc && acc[part], b);
        return (res ? res : key + '**');
    }


    static n(key, num) {

        return key + "*" + num;
    }
}
