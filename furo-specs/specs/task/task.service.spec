name: TaskService
version: 0.0.1
description: service specs for the task api
lifecycle:
    deprecated: false
    info: This version is still valid
__proto:
    package: taskservice
    targetfile: service.proto
    imports:
        - task/task.proto
        - google/protobuf/empty.proto
        - google/api/annotations.proto
        - taskservice/reqmsgs.proto
    options:
        go_package: /taskservice
        java_multiple_files: "true"
        java_outer_classname: ServiceProto
        java_package: com.example.tutorial.taskservice
services:
    List:
        description: The List method takes zero or more parameters as input, and returns a TaskCollection of TaskEntity that match the input parameters.
        data:
            request: google.protobuf.Empty
            response: task.TaskCollection
            bodyfield: body
        deeplink:
            description: 'List: GET /mockdata/tasks/list.json google.protobuf.Empty , task.TaskCollection #The List method takes zero or more parameters as input, and returns a TaskCollection of TaskEntity that match the input parameters.'
            href: /mockdata/tasks/list.json
            method: GET
            rel: list
        query:
            q:
                constraints: {}
                description: Query term to search a {{.name}}
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
            fields:
                constraints: {}
                description: Partial representation (comma separated list of field names), ?fields=
                meta:
                    default: ""
                    placeholder: ""
                    hint: Comma separated list of field names
                    label: Fields
                    options: null
                    readonly: false
                    repeated: false
                    typespecific: null
                type: string
            order_by:
                constraints: {}
                description: Specifies the result ordering for List requests. The default sorting order is ascending, ?order_by=foo desc,bar
                meta:
                    default: ""
                    placeholder: ""
                    hint: The default sorting order is ascending
                    label: Sorting Order
                    options: null
                    readonly: false
                    repeated: false
                    typespecific: null
                type: string
            filter:
                constraints: {}
                description: The response message will be filtered by the fields before being sent back to the client, filter=[['id','eq','1']]
                meta:
                    default: ""
                    placeholder: ""
                    hint: ""
                    label: Filter
                    options: null
                    readonly: false
                    repeated: false
                    typespecific: null
                type: string
            page_size:
                constraints: {}
                description: "Use this field to specify the maximum number of results to be returned by the server. \n    //The server may further constrain the maximum number of results returned in a single page. \n    //If the page_size is 0, the server will decide the number of results to be returned. page_size=15"
                meta:
                    default: ""
                    placeholder: ""
                    hint: If the page_size is 0, the server will decide the number of results to be returned.
                    label: Page Size
                    options: null
                    readonly: false
                    repeated: false
                    typespecific: null
                type: string
            view:
                constraints: {}
                description: allows the client to specify which view of the resource it wants to receive in the response. view=BASIC
                meta:
                    default: ""
                    placeholder: ""
                    hint: Should be a enum type. MUST be named view
                    label: View
                    options: null
                    readonly: false
                    repeated: false
                    typespecific: null
                type: string
        rpc_name: ListTasks
    Create:
        description: Creates a new Task
        data:
            request: task.Task
            response: task.TaskEntity
            bodyfield: body
        deeplink:
            description: 'Create: GET /mockdata/tasks/create.json task.Task , task.TaskEntity #Creates a new Task'
            href: /mockdata/tasks/create.json
            method: GET
            rel: create
        query: {}
        rpc_name: CreateTask
    Get:
        description: The Get method takes zero or more parameters, and returns a TaskEntity which contains a Task
        data:
            request: google.protobuf.Empty
            response: task.TaskEntity
            bodyfield: body
        deeplink:
            description: 'Get: GET /mockdata/tasks/{tsk}/get.json google.protobuf.Empty , task.TaskEntity #The Get method takes zero or more parameters, and returns a TaskEntity which contains a Task'
            href: /mockdata/tasks/{tsk}/get.json
            method: GET
            rel: self
        query: {}
        rpc_name: GetTask
    Update:
        description: Updates a Task, partial updates are not supported
        data:
            request: task.Task
            response: task.TaskEntity
            bodyfield: body
        deeplink:
            description: 'Update: GET /mockdata/tasks/{tsk}/update.json task.Task , task.TaskEntity #Updates a Task, partial updates are not supported'
            href: /mockdata/tasks/{tsk}/update.json
            method: GET
            rel: update
        query: {}
        rpc_name: UpdateTask
    Delete:
        description: Delete a Task
        data:
            request: google.protobuf.Empty
            response: google.protobuf.Empty
            bodyfield: body
        deeplink:
            description: 'Delete: GET /mockdata/tasks/{tsk}/delete.json google.protobuf.Empty , google.protobuf.Empty #Delete a Task'
            href: /mockdata/tasks/{tsk}/delete.json
            method: GET
            rel: delete
        query: {}
        rpc_name: DeleteTask
