name: PersonService
version: 0.0.1
description: service specs for the person api
lifecycle:
    deprecated: false
    info: This version is still valid
__proto:
    package: personservice
    targetfile: service.proto
    imports:
        - person/person.proto
        - google/protobuf/empty.proto
    options:
        go_package: /personservice
services:
    List:
        description: The List method takes zero or more parameters as input, and returns a PersonCollection of PersonEntity that match the input parameters.
        data:
            request: ""
            response: person.PersonCollection
            bodyfield: ""
        deeplink:
            description: Describe_the_query_params_if_you_have
            href: /mockdata/persons/list.json
            method: GET
            rel: list
        query:
            q:
                constraints: {}
                description: Query term to search a person
                meta:
                    default: ""
                    hint: ""
                    label: Search
                    options: null
                    readonly: false
                    repeated: false
                    typespecific: null
                type: string
        rpc_name: ListPersons
    Create:
        description: Creates a new Person
        data:
            request: person.Person
            response: person.PersonEntity
            bodyfield: ""
        deeplink:
            description: ""
            href: /mockdata/persons/create.json
            method: GET
            rel: create
        query: {}
        rpc_name: CreatePerson
    Get:
        description: The Get method takes zero or more parameters, and returns a PersonEntity which contains a Person
        data:
            request: ""
            response: person.PersonEntity
            bodyfield: ""
        deeplink:
            description: ""
            href: /mockdata/persons/{prs}/get.json
            method: GET
            rel: self
        query: {}
        rpc_name: GetPerson
    Update:
        description: Updates a Person, partial updates are supported
        data:
            request: person.Person
            response: person.PersonEntity
            bodyfield: ""
        deeplink:
            description: ""
            href: /mockdata/persons/{prs}/update.json
            method: PATCH
            rel: update
        query: {}
        rpc_name: UpdatePerson
    Delete:
        description: Delete a Person
        data:
            request: google.protobuf.Empty
            response: google.protobuf.Empty
            bodyfield: ""
        deeplink:
            description: ""
            href: /mockdata/persons/{prs}/delete.json
            method: GET
            rel: delete
        query: {}
        rpc_name: DeletePerson
