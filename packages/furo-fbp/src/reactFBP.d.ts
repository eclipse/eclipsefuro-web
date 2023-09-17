import { LitElement } from "lit";
import "./vizConnector";
export default class ReactFBP extends LitElement {
    private fbphandle;
    private vizRoot;
    /**
     * @private
     */
    connectedCallback(): void;
    viz(): void;
    /**
     * Activate the tracer
     */
    trace(): void;
    /**
     * @private
     */
    render(): import("lit").TemplateResult<1>;
}
declare global {
    namespace JSX {
        interface IntrinsicElements {
            "react-fbp": any;
        }
    }
}
