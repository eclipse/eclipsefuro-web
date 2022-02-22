name: BadRequest
type: BadRequest
description: |-
    Describes violations in a client request. This error type focuses on the
     syntactic aspects of the request.
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
    field_violations:
        type: google.rpc.BadRequest.FieldViolation
        description: Describes all violations in a client request.
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
            label: label.BadRequest.field_violations
            options:
                flags: []
                list: []
            readonly: false
            repeated: true
            typespecific: null
        constraints: {}
