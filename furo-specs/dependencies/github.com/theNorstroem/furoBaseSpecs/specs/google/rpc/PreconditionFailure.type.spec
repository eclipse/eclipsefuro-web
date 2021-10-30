name: PreconditionFailure
type: PreconditionFailure
description: |-
    Describes what preconditions have failed.

     For example, if an RPC failed because it required the Terms of Service to be
     acknowledged, it could list the terms of service violation in the
     PreconditionFailure message.
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
    violations:
        type: google.rpc.PreconditionFailure.Violation
        description: Describes all precondition violations.
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
            label: label.PreconditionFailure.violations
            options:
                flags: []
                list: []
            readonly: false
            repeated: true
            typespecific: null
        constraints: {}
