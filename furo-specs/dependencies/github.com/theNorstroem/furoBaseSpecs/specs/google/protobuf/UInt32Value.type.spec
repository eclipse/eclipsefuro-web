name: UInt32Value
type: UInt32Value
description: |-
    Wrapper message for `uint32`.

     The JSON representation for `UInt32Value` is JSON number.
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
        type: uint32
        description: The uint32 value.
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
            label: label.UInt32Value.value
            options:
                flags: []
                list: []
            readonly: false
            repeated: false
            typespecific: null
        constraints: {}
