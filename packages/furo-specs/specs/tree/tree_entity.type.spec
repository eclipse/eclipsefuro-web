name: tree_entity
type: TreeEntity
description: TreeEntity with Tree
__proto:
    package: tree
    targetfile: tree.proto
    imports:
        - furo/furo.proto
    options: {}
fields:
    data:
        type: tree.Tree
        description: contains a tree.Tree
        __proto:
            number: 1
            oneof: ""
        __ui: null
        meta: null
        constraints: {}
    links:
        type: furo.Link
        description: Hateoas links
        __proto:
            number: 2
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
    meta:
        type: furo.Meta
        description: Meta for the response
        __proto:
            number: 3
            oneof: ""
        __ui: null
        meta: null
        constraints: {}
