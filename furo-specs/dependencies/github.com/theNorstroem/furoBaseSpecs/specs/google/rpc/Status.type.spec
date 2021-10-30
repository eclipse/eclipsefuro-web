name: Status
type: Status
description: |-
    The `Status` type defines a logical error model that is suitable for
     different programming environments, including REST APIs and RPC APIs. It is
     used by [gRPC](https://github.com/grpc). Each `Status` message contains
     three pieces of data: error code, error message, and error details.

     You can find out more about this error model and how to work with it in the
     [API Design Guide](https://cloud.google.com/apis/design/errors).
__proto:
    package: google.rpc
    targetfile: status.proto
    imports:
        - google/protobuf/any.proto
    options:
        cc_enable_arenas: "true"
        go_package: google.golang.org/genproto/googleapis/rpc/status;status
        java_multiple_files: "true"
        java_outer_classname: StatusProto
        java_package: com.google.rpc
        objc_class_prefix: RPC
fields:
    code:
        type: int32
        description: The status code, which should be an enum value of [google.rpc.Code][google.rpc.Code].
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
            label: label.Status.code
            options:
                flags: []
                list: []
            readonly: false
            repeated: false
            typespecific: null
        constraints: {}
    message:
        type: string
        description: |-
            A developer-facing error message, which should be in English. Any
             user-facing error message should be localized and sent in the
             [google.rpc.Status.details][google.rpc.Status.details] field, or localized by the client.
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
            label: label.Status.message
            options:
                flags: []
                list: []
            readonly: false
            repeated: false
            typespecific: null
        constraints: {}
    details:
        type: google.protobuf.Any
        description: |-
            A list of messages that carry the error details.  There is a common set of
             message types for APIs to use.
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
            label: label.Status.details
            options:
                flags: []
                list: []
            readonly: false
            repeated: true
            typespecific: null
        constraints: {}
