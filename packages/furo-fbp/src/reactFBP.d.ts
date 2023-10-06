import { LitElement } from "lit";
import "./vizConnector";
/**
 * Adds fbp support for react
 *
 * # Usage
 * ```html
 * export default function Home() {
 *   React.useEffect(() => {
 *     import ("@furo/fbp/src/reactFBP")
 *   }, [])
 *
 *
 *   return (
 *         <react-fbp>
 *           <button at-click="--buttonClicked" fn-remove="--buttonClicked">remove me</button>
 *         </react-fbp>
 *      )
 * }
 * ```
 */
export default class ReactFBP extends LitElement {
    constructor();
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
