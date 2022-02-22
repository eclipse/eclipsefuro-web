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
        - google/api/annotations.proto
        - authservice/reqmsgs.proto
    options:
        go_package: /authservice
        java_multiple_files: "true"
        java_outer_classname: AuthserviceProto
        java_package: com.example.tutorial.authservice
services:
    List:
        description: The List method takes zero or more parameters as input, and returns a AuthCollection of AuthEntity that match the input parameters.
        data:
            request: google.protobuf.Empty
            response: auth.AuthCollection
            bodyfield: body
        deeplink:
            description: 'List: GET /api/auths google.protobuf.Empty , auth.AuthCollection #The List method takes zero or more parameters as input, and returns a AuthCollection of AuthEntity that match the input parameters.'
            href: /api/auths
            method: GET
            rel: list
        query:
            q:
                constraints: {}
                description: Query term to search a auth
                meta:
                    default: ""
                    placeholder: ""
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
            bodyfield: body
        deeplink:
            description: 'Create: POST /api/auths auth.Auth , auth.AuthEntity #Creates a new Auth'
            href: /api/auths
            method: POST
            rel: create
        query: {}
        rpc_name: CreateAuth
    Get:
        description: The Get method takes zero or more parameters, and returns a AuthEntity which contains a Auth
        data:
            request: google.protobuf.Empty
            response: auth.AuthEntity
            bodyfield: body
        deeplink:
            description: 'Get: GET /api/auths/{uid} google.protobuf.Empty , auth.AuthEntity #The Get method takes zero or more parameters, and returns a AuthEntity which contains a Auth'
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
            bodyfield: body
        deeplink:
            description: 'Update: PATCH /api/auths/{uid} auth.Auth , auth.AuthEntity #Updates a Auth, partial updates are supported'
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
            bodyfield: body
        deeplink:
            description: 'Delete: DELETE /api/auth google.protobuf.Empty , google.protobuf.Empty #Logout ala delete a auth session'
            href: /api/auth
            method: DELETE
            rel: delete
        query: {}
        rpc_name: Logout
