name: auth_entity
type: AuthEntity
description: AuthEntity with Auth
__proto:
    package: auth
    targetfile: auth.proto
    imports:
        - furo/furo.proto
    options: {}
fields:
    data:
        type: auth.Auth
        description: contains a auth.Auth
        __proto:
            number: 1
            oneof: ""
        __ui: null
        meta: null
        constraints: {}
    links:
        type: furo.Link
        description: Hateoas links
        __proto:
            number: 2
            oneof: ""
        __ui: null
        meta:
            default: ""
            hint: ""
            label: ""
            options: null
            readonly: false
            repeated: true
            typespecific: null
        constraints: {}
    meta:
        type: furo.Meta
        description: Meta for the response
        __proto:
            number: 3
            oneof: ""
        __ui: null
        meta: null
        constraints: {}
