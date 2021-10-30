name: AuthProvider
type: AuthProvider
description: |-
    Configuration for an authentication provider, including support for
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
    id:
        type: string
        description: |-
            The unique identifier of the auth provider. It will be referred to by
             `AuthRequirement.provider_id`.

             Example: "bookstore_auth".
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
            label: label.AuthProvider.id
            options:
                flags: []
                list: []
            readonly: false
            repeated: false
            typespecific: null
        constraints: {}
    issuer:
        type: string
        description: |-
            Identifies the principal that issued the JWT. See
             https://tools.ietf.org/html/draft-ietf-oauth-json-web-token-32#section-4.1.1
             Usually a URL or an email address.

             Example: https://securetoken.google.com
             Example: 1234567-compute@developer.gserviceaccount.com
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
            label: label.AuthProvider.issuer
            options:
                flags: []
                list: []
            readonly: false
            repeated: false
            typespecific: null
        constraints: {}
    jwks_uri:
        type: string
        description: |-
            URL of the provider's public key set to validate signature of the JWT. See
             [OpenID
             Discovery](https://openid.net/specs/openid-connect-discovery-1_0.html#ProviderMetadata).
             Optional if the key set document:
              - can be retrieved from
                [OpenID
                Discovery](https://openid.net/specs/openid-connect-discovery-1_0.html of
                the issuer.
              - can be inferred from the email domain of the issuer (e.g. a Google
              service account).

             Example: https://www.googleapis.com/oauth2/v1/certs
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
            label: label.AuthProvider.jwks_uri
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
            The list of JWT
             [audiences](https://tools.ietf.org/html/draft-ietf-oauth-json-web-token-32#section-4.1.3).
             that are allowed to access. A JWT containing any of these audiences will
             be accepted. When this setting is absent, JWTs with audiences:
               - "https://[service.name]/[google.protobuf.Api.name]"
               - "https://[service.name]/"
             will be accepted.
             For example, if no audiences are in the setting, LibraryService API will
             accept JWTs with the following audiences:
               -
               https://library-example.googleapis.com/google.example.library.v1.LibraryService
               - https://library-example.googleapis.com/

             Example:

                 audiences: bookstore_android.apps.googleusercontent.com,
                            bookstore_web.apps.googleusercontent.com
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
            label: label.AuthProvider.audiences
            options:
                flags: []
                list: []
            readonly: false
            repeated: false
            typespecific: null
        constraints: {}
    authorization_url:
        type: string
        description: |-
            Redirect URL if JWT token is required but not present or is expired.
             Implement authorizationUrl of securityDefinitions in OpenAPI spec.
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
            label: label.AuthProvider.authorization_url
            options:
                flags: []
                list: []
            readonly: false
            repeated: false
            typespecific: null
        constraints: {}
    jwt_locations:
        type: google.api.JwtLocation
        description: |-
            Defines the locations to extract the JWT.

             JWT locations can be either from HTTP headers or URL query parameters.
             The rule is that the first match wins. The checking order is: checking
             all headers first, then URL query parameters.

             If not specified,  default to use following 3 locations:
                1) Authorization: Bearer
                2) x-goog-iap-jwt-assertion
                3) access_token query parameter

             Default locations can be specified as followings:
                jwt_locations:
                - header: Authorization
                  value_prefix: "Bearer "
                - header: x-goog-iap-jwt-assertion
                - query: access_token
        __proto:
            number: 6
            oneof: ""
        __ui:
            component: ""
            flags: []
            noinit: false
            noskip: false
        meta:
            default: ""
            hint: ""
            label: label.AuthProvider.jwt_locations
            options:
                flags: []
                list: []
            readonly: false
            repeated: true
            typespecific: null
        constraints: {}
