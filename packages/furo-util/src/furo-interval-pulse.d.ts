/**
 * `furo-interval-pulse`
 *
 * Pulses a tick event every `interval` ms duration and every `takt` a tock event is also fired.
 *
 *
 * @fires {Number} tick - Fired on every interval with the position of the pulse starting at 0.
 * @fires {Number} tock - Fired nth interval defined by takt.
 *
 * @summary trigger an event in intervals
 * @customElement
 * @appliesMixin FBP
 */
export class FuroIntervalPulse extends LitElement {
    static get properties(): {
        /**
         * Duration of a tact in ms.
         *
         * @type Number
         */
        interval: number;
        /**
         * Number of ticks per tact.
         *
         * @type Number
         */
        takt: number;
        /**
         * Starts interval automatically
         *
         * @type Boolean
         */
        auto: boolean;
    };
    static get styles(): import("lit").CSSResult;
    interval: number;
    takt: number;
    /**
     * Starts the pulsing.
     */
    start(): void;
    _intervalObject: NodeJS.Timeout;
    /**
     * Stops the pulsing.
     */
    stop(): void;
}
import { LitElement } from 'lit';
