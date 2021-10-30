name: any
type: Any
description: "Furo annotated type wrapper message for `any`. \n// Any contains an arbitrary serialized protocol buffer message along with a\n// URL that describes the type of the serialized message. https://github.com/protocolbuffers/protobuf/blob/master/src/google/protobuf/any.proto"
lifecycle: null
__proto:
    package: furo.fat
    targetfile: fat.proto
    imports: []
    options:
        cc_enable_arenas: "true"
        csharp_namespace: Furo.Fat
        go_package: github.com/theNorstroem/FuroBaseSpecs/dist/pb/furo/fat;fatpb
        java_multiple_files: "true"
        java_outer_classname: FatProto
        java_package: pro.furo.fat
        objc_class_prefix: FPB
fields:
    value:
        type: bytes
        description: The JSON representation for `AnyValue` is a JSON string? The client uses type `ArrayBuffer` for the value field.
        __proto:
            number: 1
        __ui:
            component: ""
            flags: []
            noinit: false
            noskip: false
        meta:
            default: ""
            placeholder: ""
            hint: ""
            label: ""
            options:
                flags: []
                list: []
            readonly: false
            repeated: false
            typespecific: null
        constraints: {}
    labels:
        type: map<string,bool>
        description: Labels / flags for the value, something like unspecified, empty, confidential, absent,... Can be used for AI, UI, Business Logic,...
        __proto:
            number: 2
        __ui:
            component: ""
            flags: []
            noinit: false
            noskip: false
        meta:
            default: ""
            placeholder: ""
            hint: ""
            label: ""
            options:
                flags: []
                list: []
            readonly: false
            repeated: false
            typespecific: null
        constraints: {}
    attributes:
        type: map<string,string>
        description: 'Attributes for a value, something like confidential-msg: you are not allowed to see this value '
        __proto:
            number: 3
        __ui:
            component: ""
            flags: []
            noinit: false
            noskip: false
        meta:
            default: ""
            placeholder: ""
            hint: ""
            label: ""
            options:
                flags: []
                list: []
            readonly: false
            repeated: false
            typespecific: null
        constraints: {}
