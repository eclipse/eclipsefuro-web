name: Link
type: Link
description: |-
    Describes a URL link.
__proto:
    package: google.rpc.Help
    targetfile: error_details.proto
    imports:
        - google/protobuf/duration.proto
    options:
        go_package: google.golang.org/genproto/googleapis/rpc/errdetails;errdetails
        java_multiple_files: "true"
        java_outer_classname: ErrorDetailsProto
        java_package: com.google.rpc
        objc_class_prefix: RPC
fields:
    description:
        type: string
        description: Describes what the link offers.
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
            label: label.Help.links
            options:
                flags: []
                list: []
            readonly: false
            repeated: false
            typespecific: null
        constraints: {}
    url:
        type: string
        description: The URL of the link.
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
            label: label.Help.links
            options:
                flags: []
                list: []
            readonly: false
            repeated: false
            typespecific: null
        constraints: {}
