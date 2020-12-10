name: TreeService
version: 0.0.1
description: service specs for the tree api
lifecycle:
    deprecated: false
    info: This version is still valid
__proto:
    package: treeservice
    targetfile: service.proto
    imports:
        - tree/tree.proto
        - google/protobuf/empty.proto
    options:
        go_package: /treeservice
services:
    List:
        description: The List method takes zero or more parameters as input, and returns a TreeCollection of TreeEntity that match the input parameters.
        data:
            request: ""
            response: tree.TreeCollection
            bodyfield: ""
        deeplink:
            description: Describe_the_query_params_if_you_have
            href: /mockdata/trees
            method: GET
            rel: list
        query:
            q:
                constraints: {}
                description: Query term to search a tree
                meta:
                    default: ""
                    hint: ""
                    label: Search
                    options: null
                    readonly: false
                    repeated: false
                    typespecific: null
                type: string
        rpc_name: ListTrees
    Create:
        description: Creates a new Tree
        data:
            request: tree.Tree
            response: tree.TreeEntity
            bodyfield: ""
        deeplink:
            description: ""
            href: /mockdata/trees
            method: POST
            rel: create
        query: {}
        rpc_name: CreateTree
    Get:
        description: The Get method takes zero or more parameters, and returns a TreeEntity which contains a Tree
        data:
            request: ""
            response: tree.TreeEntity
            bodyfield: ""
        deeplink:
            description: ""
            href: /mockdata/trees/{tre}/get.json
            method: GET
            rel: self
        query: {}
        rpc_name: GetTree
    Update:
        description: Updates a Tree, partial updates are supported
        data:
            request: tree.Tree
            response: tree.TreeEntity
            bodyfield: ""
        deeplink:
            description: ""
            href: /mockdata/trees/{tre}
            method: PATCH
            rel: update
        query: {}
        rpc_name: UpdateTree
    Delete:
        description: Delete a Tree
        data:
            request: google.protobuf.Empty
            response: google.protobuf.Empty
            bodyfield: ""
        deeplink:
            description: ""
            href: /mockdata/trees/{tre}
            method: DELETE
            rel: delete
        query: {}
        rpc_name: DeleteTree
