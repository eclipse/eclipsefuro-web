name: AuthService
version: 0.0.1
description: service specs for the auth api
lifecycle:
    deprecated: false
    info: This version is still valid
__proto:
    package: authservice
    targetfile: authservice.proto
    imports:
        - auth/auth.proto
        - google/protobuf/empty.proto
    options:
        go_package: /authservice
services:
    List:
        description: The List method takes zero or more parameters as input, and returns a AuthCollection of AuthEntity that match the input parameters.
        data:
            request: ""
            response: auth.AuthCollection
            bodyfield: ""
        deeplink:
            description: Describe_the_query_params_if_you_have
            href: /api/auths
            method: GET
            rel: list
        query:
            q:
                constraints: {}
                description: Query term to search a auth
                meta:
                    default: ""
                    hint: ""
                    label: Search
                    options: null
                    readonly: false
                    repeated: false
                    typespecific: null
                type: string
        rpc_name: ListAuths
    Create:
        description: Creates a new Auth
        data:
            request: auth.Auth
            response: auth.AuthEntity
            bodyfield: ""
        deeplink:
            description: ""
            href: /api/auths
            method: POST
            rel: create
        query: {}
        rpc_name: CreateAuth
    Get:
        description: The Get method takes zero or more parameters, and returns a AuthEntity which contains a Auth
        data:
            request: ""
            response: auth.AuthEntity
            bodyfield: ""
        deeplink:
            description: ""
            href: /api/auths/{uid}
            method: GET
            rel: self
        query: {}
        rpc_name: GetAuth
    Update:
        description: Updates a Auth, partial updates are supported
        data:
            request: auth.Auth
            response: auth.AuthEntity
            bodyfield: ""
        deeplink:
            description: ""
            href: /api/auths/{uid}
            method: PATCH
            rel: update
        query: {}
        rpc_name: UpdateAuth
    Delete:
        description: Logout ala delete a auth session
        data:
            request: google.protobuf.Empty
            response: google.protobuf.Empty
            bodyfield: ""
        deeplink:
            description: ""
            href: /api/auth
            method: DELETE
            rel: delete
        query: {}
        rpc_name: Logout
