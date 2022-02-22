name: integer_property
type: IntegerProperty
description: Integer type with embedded meta
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
    data:
        type: int32
        description: Integer data part
        __proto:
            number: 1
        __ui: null
        meta: null
        constraints:
            step:
                is: "1"
                message: ""
