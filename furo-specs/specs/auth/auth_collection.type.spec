name: AuthCollection
type: AuthCollection
description: AuthCollection with repeated AuthEntity
lifecycle: null
__proto:
    package: auth
    targetfile: auth.proto
    imports:
        - furo/furo.proto
    options:
        go_package: github.com/eclipse/eclipsefuro-web/furo-specs/dist/pb/auth;authpb
        java_multiple_files: "true"
        java_outer_classname: AuthProto
        java_package: com.example.tutorial.auth
fields:
    meta:
        type: furo.Meta
        description: Meta for the response
        __proto:
            number: 2
        __ui: null
        meta:
            default: ""
            placeholder: ""
            hint: ""
            label: ""
            options: null
            readonly: false
            repeated: false
            typespecific: null
        constraints: {}
    links:
        type: furo.Link
        description: Hateoas links
        __proto:
            number: 3
        __ui: null
        meta:
            default: ""
            placeholder: ""
            hint: ""
            label: ""
            options: null
            readonly: false
            repeated: true
            typespecific: null
        constraints: {}
    entities:
        type: auth.AuthEntity
        description: Contains a auth.AuthEntity repeated
        __proto:
            number: 4
        __ui: null
        meta:
            default: ""
            placeholder: ""
            hint: ""
            label: ""
            options: null
            readonly: false
            repeated: true
            typespecific: null
        constraints: {}
