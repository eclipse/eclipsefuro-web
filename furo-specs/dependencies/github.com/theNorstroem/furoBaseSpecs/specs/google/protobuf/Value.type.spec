name: Value
type: Value
description: |-
    `Value` represents a dynamically typed value which can be either
     null, a number, a string, a boolean, a recursive struct value, or a
     list of values. A producer of value is expected to set one of that
     variants, absence of any variant indicates an error.

     The JSON representation for `Value` is JSON value.
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
    null_value:
        type: unknown
        description: Represents a null value.
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
            label: label.Value.null_value
            options:
                flags: []
                list: []
            readonly: false
            repeated: false
            typespecific: null
        constraints: {}
    number_value:
        type: double
        description: Represents a double value.
        __proto:
            number: 2
            oneof: ""
        __ui:
            component: ""
            flags: []
            noinit: false
            noskip: false
        meta:
            default: ""
            hint: ""
            label: label.Value.number_value
            options:
                flags: []
                list: []
            readonly: false
            repeated: false
            typespecific: null
        constraints: {}
    string_value:
        type: string
        description: Represents a string value.
        __proto:
            number: 3
            oneof: ""
        __ui:
            component: ""
            flags: []
            noinit: false
            noskip: false
        meta:
            default: ""
            hint: ""
            label: label.Value.string_value
            options:
                flags: []
                list: []
            readonly: false
            repeated: false
            typespecific: null
        constraints: {}
    bool_value:
        type: bool
        description: Represents a boolean value.
        __proto:
            number: 4
            oneof: ""
        __ui:
            component: ""
            flags: []
            noinit: false
            noskip: false
        meta:
            default: ""
            hint: ""
            label: label.Value.bool_value
            options:
                flags: []
                list: []
            readonly: false
            repeated: false
            typespecific: null
        constraints: {}
    struct_value:
        type: google.protobuf.Struct
        description: Represents a structured value.
        __proto:
            number: 5
            oneof: ""
        __ui:
            component: ""
            flags: []
            noinit: false
            noskip: false
        meta:
            default: ""
            hint: ""
            label: label.Value.struct_value
            options:
                flags: []
                list: []
            readonly: false
            repeated: false
            typespecific: null
        constraints: {}
    list_value:
        type: google.protobuf.ListValue
        description: Represents a repeated `Value`.
        __proto:
            number: 6
            oneof: ""
        __ui:
            component: ""
            flags: []
            noinit: false
            noskip: false
        meta:
            default: ""
            hint: ""
            label: label.Value.list_value
            options:
                flags: []
                list: []
            readonly: false
            repeated: false
            typespecific: null
        constraints: {}
