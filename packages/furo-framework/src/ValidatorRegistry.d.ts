/**
 * This is used by the FieldNode to validate against specified constraints.
 * Scalar values must not be registered.
 */
export class ValidatorRegistry {
    /**
     * Register a validator for a specific type.
     *
     * @param typename {String}
     * @param ValidatorClass {Class}
     */
    static register(typename: string, ValidatorClass: any): void;
    /**
     * Receive a validator for a specific complex type
     *
     * @param typename {String}
     * @returns {*|boolean}
     */
    static getValidator(typename: string): any | boolean;
}
