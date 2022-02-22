name: ProjectMembersService
version: 1.0.0
description: The members of a project
lifecycle:
    deprecated: false
    info: This version is still valid
__proto:
    package: projectmemberservice
    targetfile: service.proto
    imports:
        - person/person.proto
        - google/api/annotations.proto
        - projectmemberservice/reqmsgs.proto
        - google/protobuf/empty.proto
    options:
        go_package: /projectmemberservice
        java_multiple_files: "true"
        java_outer_classname: ServiceProto
        java_package: com.example.tutorial.projectmemberservice
services:
    Unsubscribe:
        description: Custom method to unsubscribe a member, complete PersonEntity is expected
        data:
            request: person.PersonEntity
            response: person.PersonCollection
            bodyfield: body
        deeplink:
            description: 'Unsubscribe: POST /api/projects/{prj}/members/{prs}:unsubscribe person.PersonEntity , person.PersonCollection #Custom method to unsubscribe a member, complete PersonEntity is expected'
            href: /api/projects/{prj}/members/{prs}:unsubscribe
            method: POST
            rel: unsubscribe
        query: {}
        rpc_name: UnsubscribeProjectMember
    List:
        description: Get a collection with PersonEntities
        data:
            request: google.protobuf.Empty
            response: person.PersonCollection
            bodyfield: body
        deeplink:
            description: 'List: GET /api/members google.protobuf.Empty , person.PersonCollection #Get a collection with PersonEntities'
            href: /api/members
            method: GET
            rel: list
        query:
            q:
                constraints: {}
                description: Query term to search a member
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
        rpc_name: ListMembers
