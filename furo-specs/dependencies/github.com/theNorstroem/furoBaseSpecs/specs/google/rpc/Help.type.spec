name: Help
type: Help
description: |-
    Provides links to documentation or for performing an out of band action.

     For example, if a quota check failed with an error indicating the calling
     project hasn't enabled the accessed service, this can contain a URL pointing
     directly to the right place in the developer console to flip the bit.
__proto:
    package: google.rpc
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
    links:
        type: google.rpc.Help.Link
        description: URL(s) pointing to additional information on handling the current error.
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
            repeated: true
            typespecific: null
        constraints: {}
