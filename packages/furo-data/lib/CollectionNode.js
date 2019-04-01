import {EventTreeNode, NodeEvent} from "./EventTreeNode";

export class CollectionNode extends EventTreeNode {

    constructor(parentNode, type, specs) {
        super(parentNode);
        this.__specdefinitions = specs;
        this._spec = this.__specdefinitions[type];

        this.data = [];
    }

    injectRaw(rawResponse) {

        //daten aktualisieren
        this.data = rawResponse.data;
        this.dispatchNodeEvent(new NodeEvent("data-changed", this.data));

    }

    _templateMe(template, data) {
        const pattern = /\{(.*?)\}/g;
        return template.replace(pattern, (match, token) => data[token]);
    }


}
