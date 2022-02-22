name: DoubleValue
type: DoubleValue
description: |-
    Wrapper message for `double`.

     The JSON representation for `DoubleValue` is JSON number.
__proto:
    package: google.protobuf
    targetfile: wrappers.proto
    imports: []
    options:
        cc_enable_arenas: "true"
        csharp_namespace: Google.Protobuf.WellKnownTypes
        go_package: google.golang.org/protobuf/types/known/wrapperspb
        java_multiple_files: "true"
        java_outer_classname: WrappersProto
        java_package: com.google.protobuf
        objc_class_prefix: GPB
fields:
    value:
        type: double
        description: The double value.
        __proto:
            number: 1
            oneof: ""
        __ui:
            component: ""
            flags: []
            noinit: false
            noskip: false
        meta:
            default: ""
            hint: ""
            label: label.DoubleValue.value
            options:
                flags: []
                list: []
            readonly: false
            repeated: false
            typespecific: null
        constraints: {}
