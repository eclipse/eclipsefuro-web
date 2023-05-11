export class ScalarTypeHelper {
    static defaultForType(type: any): false | "" | 0;
    static indeterminateDefault(): any;
    /**
     * checks if a type is numeric (usefull when you want to compare min or max constraints)
     * @param type
     * @return {boolean}
     */
    static isNumericType(type: any): boolean;
    /**
     * checks if a type is scalar
     * @param type
     * @return {boolean}
     */
    static isScalarType(type: any): boolean;
}
