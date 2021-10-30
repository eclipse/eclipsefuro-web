name: RetryInfo
type: RetryInfo
description: |-
    Describes when the clients can retry a failed request. Clients could ignore
     the recommendation here or retry when this information is missing from error
     responses.

     It's always recommended that clients should use exponential backoff when
     retrying.

     Clients should wait until `retry_delay` amount of time has passed since
     receiving the error response before retrying.  If retrying requests also
     fail, clients should use an exponential backoff scheme to gradually increase
     the delay between retries based on `retry_delay`, until either a maximum
     number of retries have been reached or a maximum retry delay cap has been
     reached.
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
    retry_delay:
        type: google.protobuf.Duration
        description: Clients should wait at least this long between retrying the same request.
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
            label: label.RetryInfo.retry_delay
            options:
                flags: []
                list: []
            readonly: false
            repeated: false
            typespecific: null
        constraints: {}
