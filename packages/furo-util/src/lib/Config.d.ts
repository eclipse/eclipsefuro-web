/**
 * Config Class for `furo-config`. Not intended for direct usage.
 */
export class Config {
    static append(section: any, obj: any): any;
    /**
     * create nodes a long they are objects
     * @param parent
     * @param section
     * @param obj
     */
    static deepCreate(parent: any, section: any, obj: any): void;
    static watch(section: any, cb: any): void;
}
