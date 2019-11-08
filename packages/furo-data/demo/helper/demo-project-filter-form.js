import {LitElement, html, css} from 'lit-element';
import {FBP} from "@furo/fbp";
import "@furo/data-input";
import "@furo/form";
import "@furo/util";

/**
 * `demo-project-filter-form`
 * Desc
 *
 * @summary
 * @customElement
 * @demo demodemo-project-filter-form Sample
 * @appliesMixin FBP
 */
class DemoProjectFilterForm extends FBP(LitElement) {

    constructor() {
        super();

    }

  /**
   * flow is ready lifecycle method
   */
  _FBPReady() {
    super._FBPReady();
    this._FBPTraceWires();
  }

    bindData(data) {
        this._FBPTriggerWire('--entity', data);

        data.data.description.addEventListener('field-value-changed', (v) => {
            this._FBPTriggerWire('--defaultChanged', v.detail._value);
        });

    }

    static get styles() {
        // language=CSS
        return [
            css`
                :host {
                    display: block;
                }

                :host([hidden]) {
                    display: none;
                }
            `
        ];
    }

    /**
     * @private
     * @returns {TemplateResult|TemplateResult}
     */
    render() {
        // language=HTML
        return html`
            <!-- filter input form, options from ProjectfilterService -->
            <furo-card header-text="Filter options">
                <furo-form-layouter>
                    <!-- Short project description  -->
                    <furo-data-text-input condensed
                                          ƒ-bind-data="--entity(*.data.description)"
                                          @-value-changed="--defaultChanged"></furo-data-text-input>
                </furo-form-layouter>

                <furo-form-layouter two>
                    <!-- Start date of the project  -->
                    <furo-data-date-input condensed
                                          ƒ-bind-data="--entity(*.data.start)"
                                          @-value-changed="--startChanged"></furo-data-date-input>
                    <!-- Prospective end date of the project  -->
                    <furo-data-date-input condensed
                                          ƒ-bind-data="--entity(*.data.end)"
                                          @-value-changed="--endChanged"></furo-data-date-input>
                </furo-form-layouter>

                <furo-form-layouter>
                    <!-- Project cost limit  -->
                    <furo-data-money-input condensed
                                           ƒ-bind-data="--entity(*.data.cost_limit)"
                                           @-value-changed="--costlimitChanged"></furo-data-money-input>
                </furo-form-layouter>

                <furo-button-bar slot="action">
                    <furo-empty-spacer></furo-empty-spacer>
                    <furo-button label="Create Filter" @-click=""></furo-button>
                    <furo-button primary label="Search/Filter" @-click=""></furo-button>
                </furo-button-bar>
            </furo-card>

            <!-- filter container with filter definitions @-filter-changed give you the current filter array -->
            <furo-filter-container>
                <furo-filter-and>
                    <furo-filter-field field="description" is="in" ƒ-.value="--defaultChanged"></furo-filter-field>
                    <furo-filter-field field="start" is="gte" ƒ-.value="--startChanged"></furo-filter-field>
                    <furo-filter-field field="end" is="lte" ƒ-.value="--endChanged"></furo-filter-field>
                    <furo-filter-field field="cost_limit" is="eq" ƒ-.value="--costlimitChanged"></furo-filter-field>
                </furo-filter-and>
            </furo-filter-container>
        `;
    }

}

window.customElements.define('demo-project-filter-form', DemoProjectFilterForm);
