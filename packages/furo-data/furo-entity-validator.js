import {LitElement, html} from 'lit-element';
import {FBP} from "@furo/fbp";

/**
 * `furo-entity-validator` validates a single field and sets the corresponding metas
 *
 *
 * @customElement
 * @demo demo-furo-entity-validator entity validator demo
 * @appliesMixin FBP
 */
class FuroEntityValidator extends FBP(LitElement) {

  constructor() {
    super();
    this.checks = {};
    this._initChecks();


  }

  _initChecks() {
    this.checks.string = {
      min: (field) => {
        let constraint = field._constraints.min;
        if (field._value && field._value.length < constraint.is) {
          if(constraint.message){
            return {"description": constraint.message, constraint: "min"}
          }
          return {"description": "at least " + constraint.is + " characters", constraint: "min"}
        }
        return null;
      },
      max: (field) => {
        let constraint = field._constraints.max;
        if (field._value && field._value.length > constraint.is) {
          if(constraint.message){
            return {"description": constraint.message, constraint: "max"}
          }
          return {"description": "maximal " + constraint.is + " characters", constraint: "max"}
        }
        return null;
      },
      required: field => {
        let constraint = field._constraints.required;
        if ( !field._value || ( field._value && field._value.length === 0)) {
          if(constraint.message) {
            return {"description": constraint.message, constraint: "mandatory"}
          }
          return {"description": "field required", constraint: "mandatory"}
        }
        return null;
      },
      pattern: (field) => {
        let constraint = field._constraints.pattern;
        if (field._value && constraint.is) {
          let reg = new RegExp(constraint.is);
          if(!field._value.match(reg)) {
            if(constraint.message) {
              return {"description": constraint.message, constraint: "pattern"}
            }
            return {"description": "pattern not match", constraint: "pattern"}
          }
        }
        return null;
      }
    };

    this.checks.int = {
      min: (field) => {
        let constraint = field._constraints.min;
        if (field._value && field._value < constraint.is) {
          return {"description": "Mindestens " + constraint.is + " Zeichen", constraint: "min"}
        }
        return null;
      },
      max: (field) => {
        let constraint = field._constraints.max;
        if (field._value && field._value > constraint.is) {
          if(constraint.message){
            return {"description": constraint.message, constraint: "max"}
          }
          return {"description": "Maximal " + constraint.is + " Zeichen", constraint: "max"}
        }
        return null;
      }
    };

    this.checks.float = {
      min: (field) => {
        let constraint = field._constraints.min;
        if (field._value && field._value < constraint.is) {
          return {"description": "Mindestens " + constraint.is + " Zeichen", constraint: "min"}
        }
        return null;
      },
      max: (field) => {
        let constraint = field._constraints.max;
        if (field._value && field._value > constraint.is) {
          if(constraint.message){
            return {"description": constraint.message, constraint: "max"}
          }
          return {"description": "Maximal " + constraint.is + " Zeichen", constraint: "max"}
        }
        return null;
      }
    };
  }


  bindData(fields) {
    let self = this;
    // this.validator ist hier wegen dem hoisting...
    this.validator = (e) => {
      let field = e.target;
      let type = field._spec.type;

      // nur prüfen wenn field constraints  und checker existieren
      if (field._constraints && this.checks[type]) {
        let err;
        for (let constraint in field._constraints) {
          if (this.checks[type][constraint]) {
            err = this.checks[type][constraint](field);
          }
          if (err) {
            field._setInvalid(err);
            // bei erstem fehler aufhören
            return
          } else {
            // nur zurücksetzen wenn das field ungültig war
            if (!field._isValid) {
              field._clearInvalidity();
            }
          }
        }


      }
    };

    fields.addEventListener('field-value-changed', this.validator);
    //fields.addEventListener('branch-value-changed', this.validator);
    this._FBPTriggerWire('--dataInjected', fields);

    /** TODO: eventqueue wie in FBP aufbauen??
     setTimeout(()=>{
      //check all field on init
      fields.__childNodes.map(e=>{
        let field = {target:e};
        this.validator(field)
      });
    },16);
     */
  }


}

window.customElements.define('furo-entity-validator', FuroEntityValidator);
