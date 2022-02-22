name: string_option_property
type: StringOptionProperty
description: String type to use in property
lifecycle: null
__proto:
    package: furo
    targetfile: property.proto
    imports: []
    options:
        cc_enable_arenas: "true"
        csharp_namespace: Furo.Property
        go_package: github.com/theNorstroem/FuroBaseSpecs/dist/pb/furo/property;propertypb
        java_multiple_files: "true"
        java_outer_classname: PropertyProto
        java_package: pro.furo.property
        objc_class_prefix: FPB
fields:
    display_name:
        type: string
        description: String representation of val
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
        description: The value, Id is used to make working with data-inputs easier
        __proto:
            number: 2
        __ui: null
        meta: null
        constraints: {}
