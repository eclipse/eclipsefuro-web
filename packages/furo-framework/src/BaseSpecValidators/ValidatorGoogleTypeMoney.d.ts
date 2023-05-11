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
    static validateConstraints(field: any): Promise<unknown>;
    /**
     * checks if type money is empty
     * @param field
     * @return boolean
     */
    static isEmpty(field: any): boolean;
}
