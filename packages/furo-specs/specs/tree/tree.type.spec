name: tree
type: Tree
description: Navigation tree type with recursive navigation nodes
__proto:
    package: tree
    targetfile: tree.proto
    imports: []
    options: {}
fields:
    id:
        type: string
        description: Id of the tree
        __proto:
            number: 1
            oneof: ""
        __ui: null
        meta: null
        constraints: {}
    display_name:
        type: string
        description: String representation of the tree
        __proto:
            number: 2
            oneof: ""
        __ui: null
        meta:
            default: ""
            hint: ""
            label: ""
            options: null
            readonly: true
            repeated: false
            typespecific: null
        constraints: {}
    secondary_text:
        type: string
        description: Secondary text of the node
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
            repeated: false
            typespecific: null
        constraints: {}
    description:
        type: string
        description: description of the tree
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
            repeated: false
            typespecific: null
        constraints: {}
    root:
        type: tree.Navigationnode
        description: Rootnode of the tree
        __proto:
            number: 10
            oneof: ""
        __ui: null
        meta:
            default: ""
            hint: ""
            label: ""
            options: null
            readonly: false
            repeated: false
            typespecific: null
        constraints: {}
