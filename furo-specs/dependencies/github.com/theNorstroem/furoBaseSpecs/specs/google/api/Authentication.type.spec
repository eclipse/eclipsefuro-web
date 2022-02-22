name: Authentication
type: Authentication
description: |-
    `Authentication` defines the authentication configuration for an API.

     Example for an API targeted for external use:

         name: calendar.googleapis.com
         authentication:
           providers:
           - id: google_calendar_auth
             jwks_uri: https://www.googleapis.com/oauth2/v1/certs
             issuer: https://securetoken.google.com
           rules:
           - selector: "*"
             requirements:
               provider_id: google_calendar_auth
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
    rules:
        type: google.api.AuthenticationRule
        description: |-
            A list of authentication rules that apply to individual API methods.

             **NOTE:** All service configuration rules follow "last one wins" order.
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
            label: label.Authentication.rules
            options:
                flags: []
                list: []
            readonly: false
            repeated: true
            typespecific: null
        constraints: {}
    providers:
        type: google.api.AuthProvider
        description: Defines a set of authentication providers that a service supports.
        __proto:
            number: 4
            oneof: ""
        __ui:
            component: ""
            flags: []
            noinit: false
            noskip: false
        meta:
            default: ""
            hint: ""
            label: label.Authentication.providers
            options:
                flags: []
                list: []
            readonly: false
            repeated: true
            typespecific: null
        constraints: {}
