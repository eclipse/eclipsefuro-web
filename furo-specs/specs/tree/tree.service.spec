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
        - google/api/annotations.proto
        - treeservice/reqmsgs.proto
    options:
        go_package: /treeservice
        java_multiple_files: "true"
        java_outer_classname: ServiceProto
        java_package: com.example.tutorial.treeservice
services:
    List:
        description: The List method takes zero or more parameters as input, and returns a TreeCollection of TreeEntity that match the input parameters.
        data:
            request: google.protobuf.Empty
            response: tree.TreeCollection
            bodyfield: body
        deeplink:
            description: 'List: GET /mockdata/trees google.protobuf.Empty , tree.TreeCollection #The List method takes zero or more parameters as input, and returns a TreeCollection of TreeEntity that match the input parameters.'
            href: /mockdata/trees
            method: GET
            rel: list
        query:
            q:
                constraints: {}
                description: Query term to search a tree
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
        rpc_name: ListTrees
    Create:
        description: Creates a new Tree
        data:
            request: tree.Tree
            response: tree.TreeEntity
            bodyfield: body
        deeplink:
            description: 'Create: POST /mockdata/trees tree.Tree , tree.TreeEntity #Creates a new Tree'
            href: /mockdata/trees
            method: POST
            rel: create
        query: {}
        rpc_name: CreateTree
    Get:
        description: The Get method takes zero or more parameters, and returns a TreeEntity which contains a Tree
        data:
            request: google.protobuf.Empty
            response: tree.TreeEntity
            bodyfield: body
        deeplink:
            description: 'Get: GET /mockdata/trees/{tre}/get.json google.protobuf.Empty , tree.TreeEntity #The Get method takes zero or more parameters, and returns a TreeEntity which contains a Tree'
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
            bodyfield: body
        deeplink:
            description: 'Update: PATCH /mockdata/trees/{tre} tree.Tree , tree.TreeEntity #Updates a Tree, partial updates are supported'
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
            bodyfield: body
        deeplink:
            description: 'Delete: DELETE /mockdata/trees/{tre} google.protobuf.Empty , google.protobuf.Empty #Delete a Tree'
            href: /mockdata/trees/{tre}
            method: DELETE
            rel: delete
        query: {}
        rpc_name: DeleteTree
