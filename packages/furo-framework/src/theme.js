/**
 * We differ themeing and styling. *Themes* are in regular a rewrite of the components css and can contain style vars. We do not use mixins as long they are not "standard". *Styles* are used to set style vars like `--primary-color`. They give you the possibility to configure your themes in a simple way. Components which are using theming, give you *full control* over the css.
 *
 * It is recommended to keep the original style vars when writing a theme set, this gives you the possibility to change themes, without the need to style them again.
 *
 * ## register a themeset
 * You have to register the desired themeset, before your app starts. Otherwise the default themeset will be applied.
 * The best way is to do it in your `index.html`.
 *
 * ```
 *<script type="module">
 *import {Init,Sys, Theme} from "@furo/framework";
 *import {MyThemeset} from "./custom/themeset"
 *Theme.registerThemeset(MyThemeset);
 *...
 *```

 *
 *## Apply themeing your components
 *Applying a theme to a component can be achieved by:
 *
 *```
 *import {Theme} from "@furo/framework/src/theme"
 *
 *
 * // @private
 * // @return {CSSResult}
 *static get styles() {
 *
 *return Theme.getThemeForComponent(this.name) || css`
 *    :host {
 *        height: 100%;
 *    }
 *    side-navigation {
 *        background-color: var(--nav-color);
 *    }
 *`
 *}
 *
 *```
 *
 *to apply theming to your main app:
 *
 *```js
 *import {Theme} from "@furo/framework/src/theme"
 *
 *
 *
 * // @private
 * // @return {CSSResult}
 * static get styles() {
 *    let theme = Theme.getThemeForComponent(this.name);
 *    if (theme) {
 *        return [theme, Styling.theme]
 *    } else {
 *        // language=CSS
 *        return [css`
 *            :host {
 *                display: block;
 *                height: 100vh;
 *                overflow: hidden;
 *            }
 *        `, Styling.theme]
 *    }
 * }
 *
 *```
 *
 *## Writing a themeset
 *
 * If you want to know, how to write a themeset, just visit the [Guide](https://furo.pro/guide/md/theming/) or look at the
 * [example](https://github.com/veith/FuroBaseComponents/blob/master/packages/furo-framework/themes/default_theme.js).
 *
 *
 */
export class Theme {
  /**
   * Get the theme for the component if it exists
   * @param componentName
   * @return {*}
   */
  static getThemeForComponent(componentName) {
    return this.theme[componentName];
  }

  /**
   * Register a themeset
   * @param theme
   */
  static registerThemeset(theme) {
    this.theme = theme;
  }
}

Theme.theme = {};
