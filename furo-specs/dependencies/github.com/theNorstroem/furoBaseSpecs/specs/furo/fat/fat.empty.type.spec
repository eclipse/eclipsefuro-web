name: empty
type: Empty
description: Furo annotated type wrapper message for `empty`. Empty has no values and only contains the labels and attributes
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
