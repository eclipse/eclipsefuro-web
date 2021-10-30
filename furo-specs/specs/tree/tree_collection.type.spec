name: TreeCollection
type: TreeCollection
description: TreeCollection with repeated TreeEntity
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
    meta:
        type: furo.Meta
        description: Meta for the response
        __proto:
            number: 2
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
    links:
        type: furo.Link
        description: Hateoas links
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
            repeated: true
            typespecific: null
        constraints: {}
    entities:
        type: tree.TreeEntity
        description: Contains a tree.TreeEntity repeated
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
            repeated: true
            typespecific: null
        constraints: {}
