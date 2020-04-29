/**
 * A class to validate constraints on type <code>google.type.Date</code
 *
 * @class
 * @private
 * @author TheNorstroems
 */
export class ValidatorGoogleTypeDate {
  /**
   * checks constraints
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
            if (ValidatorGoogleTypeDate.createDateFromType(field) < Date.parse(constraint.is)) {
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
            if (ValidatorGoogleTypeDate.createDateFromType(field) > Date.parse(constraint.is)) {
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
            if (ValidatorGoogleTypeDate.isEmpty(field)) {
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
   * checks if type date is empty
   * @param field
   * @return boolean
   */
  static isEmpty(field) {
    return field.year._value === null || field.month._value === null || field.day._value === null;
  }

  /**
   * creates a JS Date from google.type.Date struct
   * @private
   * @param field
   * @returns {Date}
   */
  static createDateFromType(field) {
    const checkDate = new Date(
      field.year._value ? field.year._value : 0,
      field.month._value ? field.month._value - 1 : 0,
      field.day._value ? field.day._value : 0,
    );
    return checkDate;
  }
}
