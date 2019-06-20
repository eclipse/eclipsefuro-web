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
 */
export class Iconset {

    // register an icon set
    static registerIconset(setName, icons) {

        this[setName] = icons;
        console.info("iconset `"+setName+"` registed");
    }

    // get icon svg via icon set name and icon name
    static get(setName, iconName) {

        // default fallback icon `report problem`
        let icon = '<g><path d="M1 21h22L12 2 1 21zm12-3h-2v-2h2v2zm0-4h-2v-4h2v4z"></path></g>';

        if(this[setName] === undefined ) {

            console.warn("iconset `"+setName+"` not exist");
        }
        else if( this[setName][iconName] === undefined) {

            console.warn("icon `"+iconName+"` in iconset `"+setName+"` not exist");
        }
        else {

            icon = this[setName][iconName];
        }

        return icon;
    }

}