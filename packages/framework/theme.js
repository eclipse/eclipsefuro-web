import {css} from 'lit-element/lib/css-tag';

/**
 * Todo Describe and explain
 *
 */
export class Theme {

  static getThemeForComponent(componentName) {
    return this.theme[componentName];
  }

  static registerThemeset(theme) {
    this.theme = theme;
  }
}
Theme.theme = {};
