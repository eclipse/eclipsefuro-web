export class FbpBreakpoints {
    static SetBreakpoints(breakpoints: any): void;
    static Breakpoints(): any[];
    /**
     * This will get the DOM Node for a path produced by FBP._getDomPath
     * @param path
     * @return {*}
     * @constructor
     */
    static GetElementByPath(path: any): any;
    /**
     * returns the querySelectorable path of the component.
     *
     * Note: html and body are not included.
     *
     * source inspired from https://stackoverflow.com/a/31281201/2946421
     *
     * Even there is no ::shadow selector in  DOM v1, this works fine for us
     *
     * @return {string}
     * @private
     */
    private static getDomPath;
}
