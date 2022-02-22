name: fieldconstraint
type: FieldConstraint
description: a single fieldconstraint
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
    is:
        type: string
        description: the constraint value as string, even it is a number
        __proto:
            number: 1
        __ui: null
        meta:
            default: ""
            placeholder: ""
            hint: the constraint value as string, even it is a number
            label: is
            options: null
            readonly: false
            repeated: false
            typespecific: null
        constraints: {}
    message:
        type: string
        description: The message to display on constraint violation
        __proto:
            number: 2
        __ui: null
        meta:
            default: ""
            placeholder: ""
            hint: ""
            label: message
            options: null
            readonly: false
            repeated: false
            typespecific: null
        constraints: {}
