name: AuthenticationRule
type: AuthenticationRule
description: |-
    Authentication rules for the service.

     By default, if a method has any authentication requirements, every request
     must include a valid credential matching one of the requirements.
     It's an error to include more than one kind of credential in a single
     request.

     If a method doesn't have any auth requirements, request credentials will be
     ignored.
__proto:
    package: google.api
    targetfile: auth.proto
    imports: []
    options:
        go_package: google.golang.org/genproto/googleapis/api/serviceconfig;serviceconfig
        java_multiple_files: "true"
        java_outer_classname: AuthProto
        java_package: com.google.api
        objc_class_prefix: GAPI
fields:
    selector:
        type: string
        description: |-
            Selects the methods to which this rule applies.

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
            label: label.AuthenticationRule.selector
            options:
                flags: []
                list: []
            readonly: false
            repeated: false
            typespecific: null
        constraints: {}
    oauth:
        type: google.api.OAuthRequirements
        description: The requirements for OAuth credentials.
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
            label: label.AuthenticationRule.oauth
            options:
                flags: []
                list: []
            readonly: false
            repeated: false
            typespecific: null
        constraints: {}
    allow_without_credential:
        type: bool
        description: |-
            If true, the service accepts API keys without any other credential.
             This flag only applies to HTTP and gRPC requests.
        __proto:
            number: 5
            oneof: ""
        __ui:
            component: ""
            flags: []
            noinit: false
            noskip: false
        meta:
            default: ""
            hint: ""
            label: label.AuthenticationRule.allow_without_credential
            options:
                flags: []
                list: []
            readonly: false
            repeated: false
            typespecific: null
        constraints: {}
    requirements:
        type: google.api.AuthRequirement
        description: Requirements for additional authentication providers.
        __proto:
            number: 7
            oneof: ""
        __ui:
            component: ""
            flags: []
            noinit: false
            noskip: false
        meta:
            default: ""
            hint: ""
            label: label.AuthenticationRule.requirements
            options:
                flags: []
                list: []
            readonly: false
            repeated: true
            typespecific: null
        constraints: {}
