/**
 * A class to validate constraints on numeric types
 *
 * @class
 * @private
 * @author TheNorstroems
 */
export class ValidatorNumericTypes {
  /**
   *
   * @param field
   * @returns {Promise<unknown>}
   */
  static validateConstraints(field) {
    return new Promise((resolve, reject) => {
      // validate only if they are constraints
      // eslint-disable-next-line guard-for-in,no-restricted-syntax
      for (const constraintName in field._constraints) {
        const constraint = field._constraints[constraintName];

        switch (constraintName.toLowerCase()) {
          /**
           * the min constraint
           */
          case 'min':
            if (field._value < parseFloat(constraint.is)) {
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
            if (field._value > parseFloat(constraint.is)) {
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
            let valueToProove = parseFloat(field._value);
            let f = 1; // factor

            // float can not calculate modulo propperly on fractions
            if (modulo < 1) {
              f = 1 / modulo
              modulo = 1
              valueToProove *= f ;
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
            if (field._value == null || !field._value.match(new RegExp(constraint.is))) {
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
            if (field._value == null) {
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
