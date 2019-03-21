import {EventTreeNode, NodeEvent} from "./EventTreeNode";

export class CollectionNode extends EventTreeNode {

    constructor(parentNode, type, specs) {
        super(parentNode);
        this.__specdefinitions = specs;
        this._spec = this.__specdefinitions[type];

        this.dataAsArray = {rows: []};
        this.data = [];
    }

    injectRaw(rawResponse) {

        //daten aktualisieren
        this.data = rawResponse.data;
        this.dispatchNodeEvent(new NodeEvent("data-changed", this.data));
        this._updateDataTable(this.data);

    }

    _templateMe(template, data) {
        const pattern = /\{(.*?)\}/g;
        return template.replace(pattern, (match, token) => data[token]);
    }

    _updateDataTable(response) {
        let _rows = [];

        if (response) {
            response.forEach((r) => {
                let rowInfo = {
                    fields: [],
                    entity: {}
                };
                for (let f in r.data) {

                    let field = {};
                    if (r.meta && r.meta.fields && r.meta.fields[f]) {
                        field.name = f;
                        field.meta = r.meta.fields[f].meta;
                        field.value = r.data[f];
                    } else {
                        field.name = f;
                        field.meta = {label: f};
                        field.value = r.data[f];
                    }

                    if (this._spec.fields[f].type.startsWith('vnd.')) {
                        if (this._spec.fields[f].toString && this._spec.fields[f].toString.template) {

                            const template = this._spec.fields[f].toString.template;
                            let tmp = this._templateMe(template, field.value);
                            field.value.toString = function () {
                                return tmp;
                            };
                        }
                    }

                    rowInfo.fields.push(field);
                    rowInfo.entity = r;
                }
                _rows.push(rowInfo);
            });

            this.dataAsArray.rows = _rows;
            this.dispatchNodeEvent(new NodeEvent("dataAsArray-changed", this.dataAsArray));
        }
    }

}
