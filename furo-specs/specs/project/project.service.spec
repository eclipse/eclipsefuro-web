name: ProjectService
version: 0.0.1
description: service specs for the project api
lifecycle:
    deprecated: false
    info: This version is still valid
__proto:
    package: projectservice
    targetfile: service.proto
    imports:
        - project/project.proto
        - google/protobuf/empty.proto
        - google/api/annotations.proto
        - projectservice/reqmsgs.proto
    options:
        go_package: /projectservice
        java_multiple_files: "true"
        java_outer_classname: ServiceProto
        java_package: com.example.tutorial.projectservice
services:
    List:
        description: The List method takes zero or more parameters as input, and returns a ProjectCollection of ProjectEntity that match the input parameters.
        data:
            request: google.protobuf.Empty
            response: project.ProjectCollection
            bodyfield: body
        deeplink:
            description: 'List: GET /mockdata/projects/list.json google.protobuf.Empty , project.ProjectCollection #The List method takes zero or more parameters as input, and returns a ProjectCollection of ProjectEntity that match the input parameters.'
            href: /mockdata/projects/list.json
            method: GET
            rel: list
        query:
            q:
                constraints: {}
                description: Query term to search a project
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
        rpc_name: ListProjects
    Create:
        description: Creates a new Project
        data:
            request: project.Project
            response: project.ProjectEntity
            bodyfield: body
        deeplink:
            description: 'Create: GET /mockdata/projects/create.json project.Project , project.ProjectEntity #Creates a new Project'
            href: /mockdata/projects/create.json
            method: GET
            rel: create
        query: {}
        rpc_name: CreateProject
    Get:
        description: The Get method takes zero or more parameters, and returns a ProjectEntity which contains a Project
        data:
            request: google.protobuf.Empty
            response: project.ProjectEntity
            bodyfield: body
        deeplink:
            description: 'Get: GET /mockdata/projects/{prj}/get.json google.protobuf.Empty , project.ProjectEntity #The Get method takes zero or more parameters, and returns a ProjectEntity which contains a Project'
            href: /mockdata/projects/{prj}/get.json
            method: GET
            rel: self
        query: {}
        rpc_name: GetProject
    Update:
        description: Updates a Project, partial updates are supported
        data:
            request: project.Project
            response: project.ProjectEntity
            bodyfield: body
        deeplink:
            description: 'Update: GET /mockdata/projects/{prj}/update.json project.Project , project.ProjectEntity #Updates a Project, partial updates are supported'
            href: /mockdata/projects/{prj}/update.json
            method: GET
            rel: update
        query: {}
        rpc_name: UpdateProject
    Delete:
        description: Delete a Project
        data:
            request: google.protobuf.Empty
            response: google.protobuf.Empty
            bodyfield: body
        deeplink:
            description: 'Delete: GET /mockdata/projects/{prj}/delete.json google.protobuf.Empty , google.protobuf.Empty #Delete a Project'
            href: /mockdata/projects/{prj}/delete.json
            method: GET
            rel: delete
        query: {}
        rpc_name: DeleteProject
