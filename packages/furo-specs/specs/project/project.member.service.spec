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
    options:
        go_package: /projectmemberservice
services:
    Unsubscribe:
        description: Custom method to unsubscribe a member, complete PersonEntity is expected
        data:
            request: person.PersonEntity
            response: person.PersonCollection
            bodyfield: ""
        deeplink:
            description: '{prs} stands for person'
            href: /api/projects/{prj}/members/{prs}:unsubscribe
            method: POST
            rel: unsubscibe
        query: {}
    List:
        description: Get a collection with PersonEntities
        data:
            request: ""
            response: person.PersonCollection
            bodyfield: ""
        deeplink:
            description: ""
            href: /api/members
            method: GET
            rel: list
        query:
            q:
                constraints: {}
                description: Query term to search a member
                meta:
                    default: ""
                    hint: ""
                    label: Search
                    options: null
                    readonly: false
                    repeated: false
                    typespecific: null
                type: string
        rpc_name: ListMembers
