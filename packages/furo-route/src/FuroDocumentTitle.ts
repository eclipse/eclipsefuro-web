import {
  getIconData,
  getIconDataSync,
} from '@ui5/webcomponents-base/dist/asset-registries/Icons.js';
import {IconData} from "@ui5/webcomponents-base/dist/asset-registries/Icons";

type EventType = 'waypoint-pushed' | 'canceled'

interface CustomEventListener {
  (evt: CustomEvent): void;
}


export class FuroDocumentTitle {

  private _prefix: string = '';
  private _documentTitle: string = '';
  private _suffix: string = '';
  private _icon: string | undefined;
  private _inPreStage: boolean = false;
  private __eventListener: Map<string, any[]> = new Map();

  constructor(documentTitle: string, icon?: string, prefix?: string, suffix?: string) {
    this._documentTitle = documentTitle;
    this._icon = icon;

    if (prefix != null) {
      this._prefix = prefix;
    }

    if (suffix != null) {
      this._suffix = suffix;
    }
  }

  get prefix(): string {
    return this._prefix;
  }

  set prefix(value: string) {
    this._prefix = value;
    this._setDocumentTitle();
  }

  get documentTitle(): string {
    return this._documentTitle;
  }

  set documentTitle(value: string) {
    this._documentTitle = value;
    this._setDocumentTitle();
  }

  get suffix(): string {
    return this._suffix;
  }

  set suffix(value: string) {
    this._suffix = value;
    this._setDocumentTitle();
  }

  get icon(): string | undefined {
    return this._icon;
  }

  set icon(value: string | undefined) {
    this._icon = value;
  }

  setWaypoint() {
    /**
     * Waypoints are set in a staging (PreStage) and pushed to the history when
     * something in the url changes.
     */
    this._setDocumentTitle();

    /**
     * This will push the waypoint to the browser history and clear the listeners for cancelation and popstate
     */
    const pushState = () => {
      window.removeEventListener('__beforeReplaceState', pushState, true);
      // eslint-disable-next-line no-use-before-define
      window.removeEventListener('popstate', cancelPre, true);
      window.history.pushState({}, document.title, window.location.href);
      this._inPreStage = false;

      this.dispatchEvent(
        new CustomEvent('waypoint-pushed', {composed: true, bubbles: true})
      );
    };

    /**
     * This will cancel the staged waypoint
     */
    const cancelPre = () => {
      window.removeEventListener('__beforeReplaceState', pushState, true);
      window.removeEventListener('popstate', cancelPre, true);
      this._inPreStage = false;

      this.dispatchEvent(
        new CustomEvent('waypoint-canceled', {composed: true, bubbles: true})
      );
    };

    /**
     * Put the waypoint in to the staging
     */
    if (!this._inPreStage) {
      this._inPreStage = true;
      window.addEventListener('__beforeReplaceState', pushState, true);
      // cancel pre on navigate back
      window.addEventListener('popstate', cancelPre, true);
    }
  }

  /**
   * Set the document title with the currentPage prefix title suffix. Without setting a waypoint.
   *
   */
  activate() {
    this._setDocumentTitle();
  }

  /**
   * Renders the title and set it as document title
   * @private
   */
  async _setDocumentTitle() {
    document.title = this._prefix + this._documentTitle + this._suffix;

    if (this.icon) {
      let link = document.querySelector("link[rel~='icon']") as HTMLLinkElement;
      if (!link) {
        link = document.createElement('link');
        link.rel = 'icon';

        document.getElementsByTagName('head')[0].appendChild(link);
      }
      let iconData: IconData | "ICON_NOT_FOUND" | undefined = getIconDataSync(this.icon);
      if (!iconData) {
        iconData = await getIconData(this.icon);
      }
      if (iconData !== undefined && iconData !== "ICON_NOT_FOUND") {
        const color = getComputedStyle(document.body)
          .getPropertyValue('--sapTextColor')
          .replace('#', '%23');
        link.href = `${
          `data:image/svg+xml;utf8,<svg viewBox="0 0 512 512" fill="${color}" focusable="false" preserveAspectRatio="xMidYMid meet" xmlns="http://www.w3.org/2000/svg">\n` +
          `<g role="presentation"><path d="`
        }${iconData?.pathData}"/></g></svg>`;
      }
    }
  }


  /**
   * Add a handler to a node
   * @param type
   * @param handler
   * @param options
   */
  public addEventListener(type: EventType, handler: CustomEventListener, options?: boolean | AddEventListenerOptions): void {
    if (!this.__eventListener.has(type)) {
      this.__eventListener.set(type, []);
    }
    this.__eventListener.get(type)!.push({cb: handler, options: options});
  }

  public dispatchEvent(event: CustomEvent): void {
    if (
      this.__eventListener.has(event.type) &&
      this.__eventListener.get(event.type)!.length > 0
    ) {
      this.__eventListener.get(event.type)!.forEach((t, i, listenerArray) => {
        t.cb(event);
        if (t.options?.once) {
          // eslint-disable-next-line no-param-reassign
          delete listenerArray[i];
        }
      });
    }
  }


}
