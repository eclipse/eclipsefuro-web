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
          case 'min': {
            const minDate = new Date(constraint.is);
            minDate.setHours(0, 0, 0, 0);
            if (ValidatorGoogleTypeDate.createDateFromType(field) < minDate) {
              const NODE = {};
              NODE.message = constraint.message;
              NODE.name = constraintName;
              NODE.node = field;
              reject(NODE);
            }
            break;
          }
          /**
           * the max constraint
           */
          case 'max': {
            const maxDate = new Date(constraint.is);
            maxDate.setHours(0, 0, 0, 0);

            if (ValidatorGoogleTypeDate.createDateFromType(field) > maxDate) {
              const NODE = {};
              NODE.message = constraint.message;
              NODE.name = constraintName;
              NODE.node = field;
              reject(NODE);
            }
            break;
          }
          /**
           * step
           */
          case 'step':
            {
              const date = ValidatorGoogleTypeDate.createDateFromType(field);
              const msToDayDividend = 8.64e7;
              // step check is (value - min)%is == 0
              const modulo = Number.parseInt(constraint.is, 10);
              const minDate = ValidatorGoogleTypeDate.createDateFromConstraint(
                field._constraints
              );

              if (((date - minDate) / msToDayDividend) % modulo !== 0) {
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
              field._value == null ||
              !field._value.match(new RegExp(constraint.is))
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
            if (ValidatorGoogleTypeDate.isEmpty(field) || field.day._value === 0) {
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
    return (
      field.year._value === null ||
      field.month._value === null ||
      field.day._value === null
    );
  }

  /**
   * creates a JS UTC Date from google.type.Date struct
   * @private
   * @param field
   * @returns {Date}
   */
  static createDateFromType(field) {
    return new Date(
      Date.UTC(
        field.year._value ? field.year._value : 0,
        field.month._value ? field.month._value - 1 : 0,
        field.day._value ? field.day._value : 0,
        0,
        0,
        0,
        0
      )
    );
  }

  /**
   * creates a JS midnight UTC Date from furo/specs constraints
   * @private
   * @param field
   * @returns {Date}
   */
  static createDateFromConstraint(constraints) {
    if (constraints.min && constraints.min.is) {
      return new Date(`${constraints.min.is}T00:00:00Z`);
    }
    return 0;
  }
}
