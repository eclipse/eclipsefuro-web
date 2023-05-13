export class ConfigTree extends EventTreeNode {
    constructor(parentNode: any, fieldName: any);
    _name: any;
    __value: any;
    set _value(arg: any);
    get _value(): any;
}
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
import { EventTreeNode } from '@furo/framework/src/EventTreeNode.js';
