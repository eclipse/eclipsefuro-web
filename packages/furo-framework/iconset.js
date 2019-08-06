/**
 * `Iconset` class , works together with `furo-icon`
 *
 * to use furo-icon you should
 * first import a svg set of icons and register it to Iconset
 *
 * the set of icons can be defined in a iconSetName.js file which has content like this:
 *     export const iconSetName = {
 *          "iconName":"<g><path d='M12 xx.... z'></path></g>",
 *          "left-arrow":"<g><path d='M12 xx.... z'></path></g>"
 *          ...
 *     };
 * then import the iconset and register it
 * import {iconSetName} from "./iconSetName";
 * import {Iconset} from "@furo/framework/furo.js";
 * Iconset.registerIconset( "iconSetName", iconSetName);
 *
 * after registering you can use those icons in furo-icon in any other component
 * <furo-icon icon="iconSetName:iconName" ></furo-icon>
 *
 * if you has default iconset imported, you can use icon without set name:
 * <furo-icon icon="iconName" ></furo-icon>
 *
 */
export class Iconset {

    // register an icon set
    static registerIconset(setName, icons) {

        this[setName] = icons;
    }

    // get icon svg via icon set name and icon name
    static get(setName, iconName) {

        // default fallback icon `report problem`
        let icon = '<g></g>';
        if(this[setName] && this[setName][iconName]) {
            icon = this[setName][iconName];
        }

        return icon;
    }

}
