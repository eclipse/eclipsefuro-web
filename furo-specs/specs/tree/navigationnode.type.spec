name: Navigationnode
type: Navigationnode
description: Item of the navigationtree
lifecycle: null
__proto:
    package: tree
    targetfile: tree.proto
    imports:
        - furo/furo.proto
    options:
        go_package: github.com/eclipse/eclipsefuro-web/furo-specs/dist/pb/tree;treepb
        java_multiple_files: "true"
        java_outer_classname: TreeProto
        java_package: com.example.tutorial.tree
fields:
    id:
        type: string
        description: Id of the node
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
        description: String representation of the node
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
        description: description of the node
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
    icon:
        type: string
        description: icon of the node
        __proto:
            number: 5
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
    panel:
        type: string
        description: Which panel (i.e. view, edit, display) opens the node type (which is defined in property link)
        __proto:
            number: 6
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
    key_words:
        type: string
        description: key words of the node
        __proto:
            number: 7
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
    has_error:
        type: bool
        description: if node has error
        __proto:
            number: 8
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
    open:
        type: bool
        description: node is open or not
        __proto:
            number: 9
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
    link:
        type: furo.Link
        description: Deeplink information of this node
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
    is_group_label:
        type: bool
        description: This node is a group label
        __proto:
            number: 11
        __ui: null
        meta:
            default: "false"
            placeholder: ""
            hint: ""
            label: ""
            options: null
            readonly: false
            repeated: false
            typespecific: null
        constraints: {}
    children:
        type: tree.Navigationnode
        description: Children of this node
        __proto:
            number: 12
        __ui: null
        meta:
            default: ""
            placeholder: ""
            hint: ""
            label: ""
            options: null
            readonly: false
            repeated: true
            typespecific: null
        constraints: {}
