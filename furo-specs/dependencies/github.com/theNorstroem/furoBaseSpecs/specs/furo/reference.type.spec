name: reference
type: Reference
description: reference
lifecycle: null
__proto:
    package: furo
    targetfile: furo.proto
    imports: []
    options:
        cc_enable_arenas: "true"
        csharp_namespace: Furo
        go_package: github.com/theNorstroem/FuroBaseSpecs/dist/pb/furo;furopb
        java_multiple_files: "true"
        java_outer_classname: FuroProto
        java_package: pro.furo
        objc_class_prefix: FPB
fields:
    display_name:
        type: string
        description: String representation of the reference
        __proto:
            number: 1
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
    id:
        type: string
        description: Id of the reference
        __proto:
            number: 2
        __ui: null
        meta: null
        constraints: {}
    link:
        type: furo.Link
        description: Hateoas link
        __proto:
            number: 3
        __ui: null
        meta: null
        constraints: {}
