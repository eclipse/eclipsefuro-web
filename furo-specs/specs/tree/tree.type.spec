name: Tree
type: Tree
description: Navigation tree type with recursive navigation nodes
lifecycle: null
__proto:
    package: tree
    targetfile: tree.proto
    imports: []
    options:
        go_package: github.com/eclipse/eclipsefuro-web/furo-specs/dist/pb/tree;treepb
        java_multiple_files: "true"
        java_outer_classname: TreeProto
        java_package: com.example.tutorial.tree
fields:
    id:
        type: string
        description: Id of the tree
        __proto:
            number: 1
        __ui: null
        meta:
            default: ""
            placeholder: ""
            hint: ""
            label: ""
            options: null
            readonly: false
            repeated: false
            typespecific: null
        constraints: {}
    display_name:
        type: string
        description: String representation of the tree
        __proto:
            number: 2
        __ui: null
        meta:
            default: ""
            placeholder: ""
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
        __ui: null
        meta:
            default: ""
            placeholder: ""
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
        __ui: null
        meta:
            default: ""
            placeholder: ""
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
        __ui: null
        meta:
            default: ""
            placeholder: ""
            hint: ""
            label: ""
            options: null
            readonly: false
            repeated: false
            typespecific: null
        constraints: {}
