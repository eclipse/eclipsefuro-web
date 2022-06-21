/**
 * A class to validate constraints on type <code>furo.Reference</code
 *
 * @class
 * @private
 * @author Eclipse FuroWeb
 */
export class ValidatorFuroReference {
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
           * the required constraint
           */
          case 'required':
            if (field.id._value === undefined || field.id._value.length <= 0) {
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
