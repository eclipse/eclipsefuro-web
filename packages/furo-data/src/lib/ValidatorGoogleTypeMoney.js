/**
 * A class to validate constraints on type <code>google.type.Money</code
 *
 * @class
 * @private
 * @author TheNorstroems
 */
export class ValidatorGoogleTypeMoney {
  /**
   * checks field constraints
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
            if (field.units && field.units._value !== null && field.nanos._value !== null) {
              const amount = Number(`${field.units._value}.${field.nanos._value}`);
              if (amount < parseFloat(constraint.is)) {
                const NODE = {};
                NODE.message = constraint.message;
                NODE.name = constraintName;
                NODE.node = field;
                reject(NODE);
              }
            }
            break;
          /**
           * the max constraint
           */
          case 'max':
            if (field.units && field.units._value !== null && field.nanos._value !== null) {
              const amount = Number(`${field.units._value}.${field.nanos._value}`);
              if (amount > parseFloat(constraint.is)) {
                const NODE = {};
                NODE.message = constraint.message;
                NODE.name = constraintName;
                NODE.node = field;
                reject(NODE);
              }
            }
            break;
          /**
           * step
           */
          case 'step':
            if (field.units && field.units._value !== null && field.nanos._value !== null) {
              const amount = Number(`${field.units._value}.${field.nanos._value}`);
              // step check is (value - min)%is == 0
              const modulo = parseFloat(constraint.is);
              let min = 0;
              if (field._constraints.min && field._constraints.min.is) {
                min = parseFloat(field._constraints.min.is);
              }

              if ((min - amount) % modulo !== 0) {
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
            if (ValidatorGoogleTypeMoney.isEmpty(field)) {
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

  /**
   * checks if type money is empty
   * @param field
   * @return boolean
   */
  static isEmpty(field) {
    const filterFloat = value => {
      if (/^(-|\+)?([0-9]+(\.[0-9]+)?|Infinity)$/.test(value)) return Number(value);
      return NaN;
    };

    if (field.units && field.units._value !== null && field.nanos._value !== null) {
      const amount = Number(`${field.units._value}.${field.nanos._value}`);
      return !filterFloat(amount);
    }
    return true;
  }
}
