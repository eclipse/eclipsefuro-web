name: QuotaFailure
type: QuotaFailure
description: |-
    Describes how a quota check failed.

     For example if a daily limit was exceeded for the calling project,
     a service could respond with a QuotaFailure detail containing the project
     id and the description of the quota limit that was exceeded.  If the
     calling project hasn't enabled the service in the developer console, then
     a service could respond with the project id and set `service_disabled`
     to true.

     Also see RetryInfo and Help types for other details about handling a
     quota failure.
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
        type: google.rpc.QuotaFailure.Violation
        description: Describes all quota violations.
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
            label: label.QuotaFailure.violations
            options:
                flags: []
                list: []
            readonly: false
            repeated: true
            typespecific: null
        constraints: {}
