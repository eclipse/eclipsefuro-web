import {PolymerElement} from '@polymer/polymer';
import * as Path from '@polymer/polymer/lib/utils/path.js';

/**
 * `app-flow`
 *
 * is a helper component for firing  app-flow events with an app-flow object.
 * Sends all public properties from current component with the event.
 *
 * @customElement
 * @polymer
 * @summary Fires flow events for the router
 * @demo demo/index.html
 */

// to ensure that data is of type AppFlow
function TypeAppFlow(name) {
  this.event = name;
  this.data = {};
  this.append = function (key, value) {
    this.data[key] = value;
  }
}

class AppFlow extends (PolymerElement) {

  constructor(){
    super()
  }

  static get properties() {
    return {

      /**
       * Name of your app-flow event object
       *
       * i.e. 'task-clicked', 'wizard-step1-completed',...
       */
      eventName: {
        type: String
      },

      /**
       * If you want to send a selection properties or send private properties with the app-flow event.
       * Enter a comma separated list of your properties.
       *
       * 'firstName, _enabled, lastName, context.subprop'
       */
      propertiesToSend: {
        type: String
      },
      /**
       * Set a custom property name for the data passed as an argument. Default is __wiredData
       */
      argName: {
        type: String,
        value: '__wiredData'
      }
    };
  }


  _findHost(node){
    if(node.host){
      return node.host;
    } else {
      return this._findHost(node.parentNode);
    }
  }

  /**
   * fire the app-flow event
   * @param wiredData: data that is passed to the function is stored in the data object as __wiredData
   */
  emit(wiredData) {

    var data = new TypeAppFlow(this.eventName);

    var host = this._findHost(this);

    data.data[this.argName] = wiredData;


    if (this.propertiesToSend) {
      // send selected properties
      var props = this.propertiesToSend.split(',');
      props = props.map(function (p) {
        return p.trim();
      });
      for (prop in props) {
        data.append(props[prop], Path.get(host,props[prop]));
      }
    } else {

      // send all configured properties

      for (var prop in host.constructor.properties) {
        host.hasOwnProperty(prop)
        {
          // exclude private props
          if (prop[0] !== '_') {
            data.append(prop, host[prop]);
          }
        }
      }
    }

    /**
     * @event app-flow
     *
     * App-flow event with app-flow object will be fired when you trigger the `emit` function.
     * detail payload: data
     */
    let customEvent = new Event('app-flow', {composed: true, bubbles: true});
    customEvent.detail = data;
    this.dispatchEvent(customEvent);
  }

}

window.customElements.define('app-flow', AppFlow);
