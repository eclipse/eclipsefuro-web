/**
 * Handler of a single key, this class is used by FuroFeatureToggle
 * @private
 */
export class KeyState {
    constructor(initialState: any);
    /**
     * create with false state
     * @private
     */
    private _state;
    /**
     * Additional data
     * Used for custom-add and custom-remove
     * @type {{}}
     * @private
     */
    private _data;
    /**
     * @private
     */
    private _appenders;
    /**
     * @private
     */
    private _removers;
    /**
     * @private
     */
    private _showers;
    /**
     * @private
     */
    private _hiders;
    /**
     * @private
     */
    private _disablers;
    /**
     * @private
     */
    private _enablers;
    /**
     * @private
     */
    private _customAdders;
    /**
     * @private
     */
    private _customRemovers;
    /**
     * @private
     */
    private _callbacks;
    /**
     * register appender
     * @private
     * @param original {domnode} original dom node
     */
    private registerAppender;
    /**
     * register remover
     * @private
     * @param original {domnode} original dom node
     */
    private registerRemover;
    /**
     * shower
     * @private
     * @param element {domnode} original dom node
     */
    private registerShower;
    /**
     * @private
     * @param element {domnode} original dom node
     */
    private registerHider;
    /**
     * @private
     * @param element {domnode} original dom node
     */
    private registerEnabler;
    /**
     * @private
     * @param element {domnode} original dom node
     */
    private registerDisabler;
    /**
     * @private
     * @param element {domnode} original dom node
     */
    private registerCustomAdder;
    /**
     * @private
     * @param element {domnode} original dom node
     */
    private registerCustomRemover;
    /**
     * register a callback on a key
     * @param cb {function(boolean)}
     * @private
     */
    private registerCallback;
    /**
     * @private
     * @param newstate
     */
    private set state(arg);
    /**
     * @private
     * @return {*}
     */
    private get state();
}
