/**
 * A class to validate constraints on type of <code>google.protobuf.StringValue, furo.fat.String</code>
 *
 * @class
 * @private
 * @author Eclipse Furo Web
 */
export class ValidatorFuroFatString {
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
        const constraint = field._constraints[constraintName]

        switch (constraintName.toLowerCase()) {
          /**
           * the min constraint
           */
          case 'min':
            if (field.value._value.length < constraint.is) {
              const NODE = {}
              NODE.message = constraint.message
              NODE.name = constraintName
              NODE.node = field
              reject(NODE)
            }
            break
          /**
           * the max constraint
           */
          case 'max':
            if (field.value._value.length > constraint.is) {
              const NODE = {}
              NODE.message = constraint.message
              NODE.name = constraintName
              NODE.node = field
              reject(NODE)
            }
            break
          /**
           * step
           */
          case 'step':
            break
          /**
           * the pattern constraint
           */
          case 'pattern':
            if (
              field.value._value == null ||
              !field.value._value.match(new RegExp(constraint.is))
            ) {
              const NODE = {}
              NODE.message = constraint.message
              NODE.name = constraintName
              NODE.node = field
              reject(NODE)
            }
            break
          /**
           * the required constraint
           */
          case 'required':
            if (field.value._value == null || field.value._value.length === 0) {
              const NODE = {}
              NODE.message = constraint.message
              NODE.name = constraintName
              NODE.node = field
              reject(NODE)
            }
            break
          default:
        }
      }
      // all constraint checks are valid
      resolve(field)
    })
  }
}
