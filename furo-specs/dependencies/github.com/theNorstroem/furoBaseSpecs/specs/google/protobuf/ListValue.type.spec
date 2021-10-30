name: ListValue
type: ListValue
description: |-
    `ListValue` is a wrapper around a repeated field of values.

     The JSON representation for `ListValue` is JSON array.
__proto:
    package: google.protobuf
    targetfile: struct.proto
    imports: []
    options:
        cc_enable_arenas: "true"
        csharp_namespace: Google.Protobuf.WellKnownTypes
        go_package: google.golang.org/protobuf/types/known/structpb
        java_multiple_files: "true"
        java_outer_classname: StructProto
        java_package: com.google.protobuf
        objc_class_prefix: GPB
fields:
    values:
        type: google.protobuf.Value
        description: Repeated field of dynamically typed values.
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
            label: label.ListValue.values
            options:
                flags: []
                list: []
            readonly: false
            repeated: true
            typespecific: null
        constraints: {}
