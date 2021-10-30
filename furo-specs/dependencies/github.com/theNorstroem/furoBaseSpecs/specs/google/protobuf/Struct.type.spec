name: Struct
type: Struct
description: |-
    `Struct` represents a structured data value, consisting of fields
     which map to dynamically typed values. In some languages, `Struct`
     might be supported by a native representation. For example, in
     scripting languages like JS a struct is represented as an
     object. The details of that representation are described together
     with the proto support for the language.

     The JSON representation for `Struct` is JSON object.
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
    fields:
        type: map<string,google.protobuf.Value>
        description: Unordered map of dynamically typed values.
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
            label: label.Struct.fields
            options:
                flags: []
                list: []
            readonly: false
            repeated: false
            typespecific: null
        constraints: {}
