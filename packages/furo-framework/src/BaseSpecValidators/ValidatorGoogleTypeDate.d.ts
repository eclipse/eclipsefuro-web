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
    static validateConstraints(field: any): Promise<unknown>;
    /**
     * checks if type date is empty
     * @param field
     * @return boolean
     */
    static isEmpty(field: any): boolean;
    /**
     * creates a JS UTC Date from google.type.Date struct
     * @private
     * @param field
     * @returns {Date}
     */
    private static createDateFromType;
    /**
     * creates a JS midnight UTC Date from furo/specs constraints
     * @private
     * @param field
     * @returns {Date}
     */
    private static createDateFromConstraint;
}
