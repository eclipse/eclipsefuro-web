/**
 * A class to validate constraints on type of <code>google.protobuf.[Numeric type]Value, furo.fat.[Numeric type]</code>
 *
 * @class
 * @private
 * @author Eclipse Furo Web
 */
export class ValidatorFuroFatNumeric {
  /**
   *
   * @param field
   * @returns {Promise<unknown>}
   */
  static validateConstraints(field) {
    return new Promise((resolve, reject) => {

      let {type} = field._spec
      if(type === "google.protobuf.Any" && field['@type'] && field['@type']._value){
        type = field['@type']._value;
      }
      // Integer type testing
      switch (type) {
        case 'furo.fat.Int32':
        case 'furo.fat.Int64':
        case 'google.protobuf.Int32Value':
        case 'google.protobuf.Int64Value':
          if (!Number.isInteger(field.value._value)) {
            const NODE = {};
            NODE.message = '';
            NODE.name = '';
            NODE.node = field;
            reject(NODE);
          }
          break;

        case 'furo.fat.Uint32':
        case 'furo.fat.Uint64':
        case 'google.protobuf.UInt64Value':
        case 'google.protobuf.UInt32Value':
          if (!Number.isInteger(field.value._value) || field.value._value < 0) {
            const NODE = {};
            NODE.message = '';
            NODE.name = '';
            NODE.node = field;
            reject(NODE);
          }

          // proove if the value of the enum is specified in the options
          if (
            field._meta.options.list.filter(opt => opt.id === field.value._value)
              .length <= 0
          ) {
            const NODE = {};
            NODE.message = 'out of range';
            NODE.name = '';
            NODE.node = field;
            reject(NODE);
          }

          break;

        default:
      }

      // validate only if they are constraints
      // eslint-disable-next-line guard-for-in,no-restricted-syntax
      for (const constraintName in field._constraints) {
        const constraint = field._constraints[constraintName];

        switch (constraintName.toLowerCase()) {
          /**
           * the min constraint
           */
          case 'min':
            if (field.value._value < parseFloat(constraint.is)) {
              const NODE = {};
              NODE.message = constraint.message;
              NODE.name = constraintName;
              NODE.node = field;
              reject(NODE);
            }
            break;
          /**
           * the max constraint
           */
          case 'max':
            if (field.value._value > parseFloat(constraint.is)) {
              const NODE = {};
              NODE.message = constraint.message;
              NODE.name = constraintName;
              NODE.node = field;
              reject(NODE);
            }
            break;
          /**
           * step
           */
          case 'step':
          {
            // step check is (value - min)%is == 0
            let modulo = parseFloat(constraint.is);
            let valueToProove = parseFloat(field.value._value);
            let f = 1; // factor

            // float can not calculate modulo propperly on fractions
            if (modulo < 1) {
              f = 1 / modulo;
              modulo = 1;
              valueToProove *= f;
            }
            let min = 0;
            if (field._constraints.min && field._constraints.min.is) {
              min = f * parseFloat(field._constraints.min.is);
            }

            if ((min - valueToProove) % modulo !== 0) {
              const NODE = {};
              NODE.message = constraint.message;
              NODE.name = constraintName;
              NODE.node = field;
              reject(NODE);
            }
          }
            break;
          /**
           * the pattern constraint
           */
          case 'pattern':
            if (
              field.value._value == null ||
              !field.value._value.match(new RegExp(constraint.is))
            ) {
              const NODE = {};
              NODE.message = constraint.message;
              NODE.name = constraintName;
              NODE.node = field;
              reject(NODE);
            }
            break;
          /**
           * the required constraint
           */
          case 'required':
            if (field.value._value == null) {
              const NODE = {};
              NODE.message = constraint.message;
              NODE.name = constraintName;
              NODE.node = field;
              reject(NODE);
            }
            break;
          default:
        }
      }
      // all constraint checks are valid
      resolve(field);
    });
  }
}
