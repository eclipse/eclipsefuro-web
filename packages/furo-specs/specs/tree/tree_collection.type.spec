name: tree_collection
type: TreeCollection
description: TreeCollection with repeated TreeEntity
__proto:
    package: tree
    targetfile: tree.proto
    imports:
        - furo/furo.proto
    options: {}
fields:
    meta:
        type: furo.Meta
        description: Meta for the response
        __proto:
            number: 2
            oneof: ""
        __ui: null
        meta: null
        constraints: {}
    links:
        type: furo.Link
        description: Hateoas links
        __proto:
            number: 3
            oneof: ""
        __ui: null
        meta:
            default: ""
            hint: ""
            label: ""
            options: null
            readonly: false
            repeated: true
            typespecific: null
        constraints: {}
    entities:
        type: tree.TreeEntity
        description: Contains a tree.TreeEntity repeated
        __proto:
            number: 4
            oneof: ""
        __ui: null
        meta:
            default: ""
            hint: ""
            label: ""
            options: null
            readonly: false
            repeated: true
            typespecific: null
        constraints: {}
