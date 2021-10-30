name: AuthRequirement
type: AuthRequirement
description: |-
    User-defined authentication requirements, including support for
     [JSON Web Token
     (JWT)](https://tools.ietf.org/html/draft-ietf-oauth-json-web-token-32).
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
    provider_id:
        type: string
        description: |-
            [id][google.api.AuthProvider.id] from authentication provider.

             Example:

                 provider_id: bookstore_auth
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
            label: label.AuthRequirement.provider_id
            options:
                flags: []
                list: []
            readonly: false
            repeated: false
            typespecific: null
        constraints: {}
    audiences:
        type: string
        description: |-
            NOTE: This will be deprecated soon, once AuthProvider.audiences is
             implemented and accepted in all the runtime components.

             The list of JWT
             [audiences](https://tools.ietf.org/html/draft-ietf-oauth-json-web-token-32#section-4.1.3).
             that are allowed to access. A JWT containing any of these audiences will
             be accepted. When this setting is absent, only JWTs with audience
             "https://[Service_name][google.api.Service.name]/[API_name][google.protobuf.Api.name]"
             will be accepted. For example, if no audiences are in the setting,
             LibraryService API will only accept JWTs with the following audience
             "https://library-example.googleapis.com/google.example.library.v1.LibraryService".

             Example:

                 audiences: bookstore_android.apps.googleusercontent.com,
                            bookstore_web.apps.googleusercontent.com
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
            label: label.AuthRequirement.audiences
            options:
                flags: []
                list: []
            readonly: false
            repeated: false
            typespecific: null
        constraints: {}
