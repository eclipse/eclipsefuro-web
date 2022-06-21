export class ValidatorGoogleProtobufTimestamp{

  /**
   * checks field constraints
   * @param field
   * @returns {Promise<unknown>}
   */
  static validateConstraints(field) {
    return new Promise((resolve, reject) => {

      // eslint-disable-next-line guard-for-in
      for (const constraintName in field._constraints) {
        const constraint = field._constraints[constraintName];

        switch (constraintName.toLowerCase()) {
          /**
           * the required constraint
           */
          case 'required':
            if (field._value === null) {
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
