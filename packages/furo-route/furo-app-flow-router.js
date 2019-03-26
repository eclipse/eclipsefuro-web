import {PolymerElement} from '@polymer/polymer';
/**
 * `app-flow-router`
 *
 *
 * `app-flow`
 *
 * Use this component with iron-page to implement application flow
 *
 * <app-flow-router id="flow" current="{{page}}" config="[[conf]]" data="{{qp}}"></app-flow-router>
 * <iron-pages selected="[[page]]" ...
 *
 * this.$.flow.check(eventDataFromAppFlow) ...script
 *
 *
 *
 * @customElement
 * @polymer
 * @demo demo/index.html
 */
class FuroAppFlowRouter extends PolymerElement {


  constructor(){
    super()
  }

  static get properties() {
    return {

      /**
       *Configuration Array
       *
       * | current   | flow-event-name      | target      | [mapping]          |
       * |:----------|:---------------------|:------------|:-------------------|
       * | view-main | form-complete        | detail-view | element => aufgabe |
       * | *         | menu-settings-click  | settings    |                    |
       *
       *
       *
       *  [['view-main', 'button-tap', 'detail-view',  'task => id]]
       *  if current is set to view-main and the app-flow-event with name 'button-tap' is triggered, current is set to detail-view and data.task from app-flow is mapped to data.id.
       *
       *  Special configurations:
       *
       *  if target is set to HISTORY-BACK the app-flow-event will allways set the current to the lastCurrent
       *
       *  [['view-detail', 'button-tap', 'HISTORY-BACK',  'task => id]] will route you back to view-main
       *
       *  You can set a wildcard for "current". If you check the example: menu-settings-click can be triggered from any current. If there is a "current" with menu-settings-click configured and you are there, the wildcard is not used.
       */

      config: {
        type: Array,
        observer: '_initConf'
      },

      /**
       * Name of the current selection
       */
      current: {
        type: String,
        notify: true
      },
      /**
       * mapped or raw data from app-flow event.
       *
       */
      data: {
        type: Object,
        notify: true
      },

      /**
       * List of current selections
       * is needed to automate the history-back app-flow
       * @private
       */
      _lastCurrents: {
        type: Array,
        value: function () {
          return [];
        }
      }
    };
  }

  /**
   * build internal config for faster access
   */
  _initConf(configArray) {
    if (configArray) {
      this._configObject = {};
      let self = this;
      // build config object for faster checks
      configArray.forEach(function (config) {
        self._configObject[config[0] + config[1]] = {target: config[2], mapping: config[3]};
      });
    }
  };

  /**
   * Process a flow event
   * @param flowEvent
   */
  check(flowEvent) {
    let current = this.current;
    let self = this;
    if (!this._configObject) {
      throw new TypeError('Attribute config for app-flow-router used in "' + this.dataHost.is + '" is not set ');
    } else {
      let conf = this._configObject[this.current + flowEvent.event];
      if (!conf) {
        //try with wildcard as current
        conf = this._configObject['*' + flowEvent.event];
      }
      if (conf) {

        // set new target
        if (conf.target === 'HISTORY-BACK') {
          if (this._lastCurrents.length >= 1) {
            this.set('current', this._lastCurrents[this._lastCurrents.length - 1]);
            this.pop('_lastCurrents');
          }
        } else {
          this.push('_lastCurrents', this.current);
          this.set('current', conf.target);
        }

        // compute mappings
        if (conf.mapping !== false) {
          if (conf.mapping == undefined || conf.mapping == '') {
            this.set('data', flowEvent.data);
          } else {
            // map event data to mappings
            let mappings = conf.mapping.split(',').map(function (cnf) {
              return cnf.split('=>').map(function (c) {
                return c.trim();
              })
            });
            let data = {};
            mappings.forEach(function (mapping) {
              let source = mapping[0];
              let target = mapping[1];
              data[target] = flowEvent.data[source];

            });
            this.set('data', data);
          }
        }
      } else {
        console.warn('no route config found for source: * | ' + this.current + ' and event:' + flowEvent.event);
      }
    }
  };
}

window.customElements.define('furo-app-flow-router', FuroAppFlowRouter);
