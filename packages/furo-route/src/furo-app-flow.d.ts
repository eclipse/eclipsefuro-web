/**
 * `furo-app-flow` triggers the flow events for the `app-flow-router`.
 *
 * @fires {data} app-flow -  App-flow event with app-flow object will be fired when you trigger the `emit` function.
 *
 * @summary Application Flow => routing
 * @customElement
 * @appliesMixin FBP
 */
export class FuroAppFlow extends LitElement {
    static get properties(): {
        /**
         * Name of your app-flow event object
         *
         * i.e. 'task-clicked', 'wizard-step1-completed',...
         *
         * @type String
         */
        event: string;
    };
    /**
     * Deprecated, use the setQp method instead
     */
    static set qp(arg: any);
    static get styles(): import("lit").CSSResult;
    /**
     * Use this to explicitly set the query params.
     *
     * This is useful if you use the `trigger` method.
     * @param qp {Object} Object with key value pairs
     */
    setQp(qp: any): void;
    _qp: any;
    /**
     * Triggers the flow event (with the qp that was set before)
     */
    trigger(): void;
    /**
     * fire the app-flow event
     * @param {object|QueryParams} QueryParam Object
     */
    emit(queryParams: any): Event;
}
import { LitElement } from 'lit';
