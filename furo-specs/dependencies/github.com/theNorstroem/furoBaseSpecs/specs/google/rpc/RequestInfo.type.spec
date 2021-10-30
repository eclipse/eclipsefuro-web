name: RequestInfo
type: RequestInfo
description: |-
    Contains metadata about the request that clients can attach when filing a bug
     or providing other forms of feedback.
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
    request_id:
        type: string
        description: |-
            An opaque string that should only be interpreted by the service generating
             it. For example, it can be used to identify requests in the service's logs.
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
            label: label.RequestInfo.request_id
            options:
                flags: []
                list: []
            readonly: false
            repeated: false
            typespecific: null
        constraints: {}
    serving_data:
        type: string
        description: |-
            Any data that was used to serve this request. For example, an encrypted
             stack trace that can be sent back to the service provider for debugging.
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
            label: label.RequestInfo.serving_data
            options:
                flags: []
                list: []
            readonly: false
            repeated: false
            typespecific: null
        constraints: {}
