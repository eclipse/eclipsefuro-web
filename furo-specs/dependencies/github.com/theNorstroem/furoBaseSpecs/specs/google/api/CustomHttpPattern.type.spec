name: CustomHttpPattern
type: CustomHttpPattern
description: A custom pattern is used for defining custom HTTP verb.
__proto:
    package: google.api
    targetfile: http.proto
    imports: []
    options:
        cc_enable_arenas: "true"
        go_package: google.golang.org/genproto/googleapis/api/annotations;annotations
        java_multiple_files: "true"
        java_outer_classname: HttpProto
        java_package: com.google.api
        objc_class_prefix: GAPI
fields:
    kind:
        type: string
        description: The name of this custom HTTP verb.
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
            label: label.CustomHttpPattern.kind
            options:
                flags: []
                list: []
            readonly: false
            repeated: false
            typespecific: null
        constraints: {}
    path:
        type: string
        description: The path matched by this custom verb.
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
            label: label.CustomHttpPattern.path
            options:
                flags: []
                list: []
            readonly: false
            repeated: false
            typespecific: null
        constraints: {}
