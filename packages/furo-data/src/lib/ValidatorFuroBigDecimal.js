/**
 * A class to validate constraints on type of <code>google.protobuf.BoolValue</code>
 *
 * @class
 * @private
 * @author Eclipse Furo Web
 */
export class ValidatorFuroBigDecimal {
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

        let val;
        if (field.unscaled_value._value != null) {
          val = field.unscaled_value._value * 10 ** -field.scale._value;
        }

        switch (constraintName.toLowerCase()) {
          /**
           * the required constraint
           */
          case 'required':
            if (field.unscaled_value._value == null) {
              const NODE = {};
              NODE.message = constraint.message;
              NODE.name = constraintName;
              NODE.node = field;
              reject(NODE);
            }
            break;
          /**
           * the min constraint
           */
          case 'min':
            if (val !== undefined && val < parseFloat(constraint.is)) {
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
            if (val !== undefined && val > parseFloat(constraint.is)) {
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
            // step check is (value - min)%is == 0
            // eslint-disable-next-line no-case-declarations
            let step = parseFloat(constraint.is);
            if (field.scale._value !== 0) {
              step *= 10 ** field.scale._value;
            }

            // step check is (value - min)%is == 0
            // eslint-disable-next-line no-case-declarations
            let modulo = step;
            // eslint-disable-next-line no-case-declarations
            let valueToProove = field.unscaled_value._value;
            // eslint-disable-next-line no-case-declarations
            let f = 1; // factor

            // float can not calculate modulo propperly on fractions, so we scale up the numbers
            if (modulo < 1) {
              f = 1 / modulo;
              modulo = 1;
              valueToProove *= f;
            }
            // eslint-disable-next-line no-case-declarations
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

            break;
          default:
        }
      }
      // all constraint checks are valid
      resolve(field);
    });
  }
}
