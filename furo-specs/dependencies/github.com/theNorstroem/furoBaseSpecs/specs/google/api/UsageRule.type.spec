name: UsageRule
type: UsageRule
description: |-
    Usage configuration rules for the service.

     NOTE: Under development.


     Use this rule to configure unregistered calls for the service. Unregistered
     calls are calls that do not contain consumer project identity.
     (Example: calls that do not contain an API key).
     By default, API methods do not allow unregistered calls, and each method call
     must be identified by a consumer project identity. Use this rule to
     allow/disallow unregistered calls.

     Example of an API that wants to allow unregistered calls for entire service.

         usage:
           rules:
           - selector: "*"
             allow_unregistered_calls: true

     Example of a method that wants to allow unregistered calls.

         usage:
           rules:
           - selector: "google.example.library.v1.LibraryService.CreateBook"
             allow_unregistered_calls: true
__proto:
    package: google.api
    targetfile: usage.proto
    imports: []
    options:
        go_package: google.golang.org/genproto/googleapis/api/serviceconfig;serviceconfig
        java_multiple_files: "true"
        java_outer_classname: UsageProto
        java_package: com.google.api
        objc_class_prefix: GAPI
fields:
    selector:
        type: string
        description: |-
            Selects the methods to which this rule applies. Use '*' to indicate all
             methods in all APIs.

             Refer to [selector][google.api.DocumentationRule.selector] for syntax details.
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
            label: label.UsageRule.selector
            options:
                flags: []
                list: []
            readonly: false
            repeated: false
            typespecific: null
        constraints: {}
    allow_unregistered_calls:
        type: bool
        description: |-
            If true, the selected method allows unregistered calls, e.g. calls
             that don't identify any user or application.
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
            label: label.UsageRule.allow_unregistered_calls
            options:
                flags: []
                list: []
            readonly: false
            repeated: false
            typespecific: null
        constraints: {}
    skip_service_control:
        type: bool
        description: |-
            If true, the selected method should skip service control and the control
             plane features, such as quota and billing, will not be available.
             This flag is used by Google Cloud Endpoints to bypass checks for internal
             methods, such as service health check methods.
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
            label: label.UsageRule.skip_service_control
            options:
                flags: []
                list: []
            readonly: false
            repeated: false
            typespecific: null
        constraints: {}
