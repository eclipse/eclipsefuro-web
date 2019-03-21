import {EventTreeNode, NodeEvent} from "./EventTreeNode";


export class CollectionControls extends EventTreeNode {

  constructor(collectionAgent, type, specs) {
    super();
    this.collectionAgent = collectionAgent;

    this.paginaton= {
              first: false,
             next: true,
             prev: true,
             last: false,
             currentPage: 1,
             pageSize: this.pageSize,
             numOfRecords: 23
           }

           this.filter =  {}
           this.order =  {}
           this.info =  {fields: this.collectionAgent.fields}


  }


}
