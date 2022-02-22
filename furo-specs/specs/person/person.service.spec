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
        - google/api/annotations.proto
        - personservice/reqmsgs.proto
    options:
        go_package: /personservice
        java_multiple_files: "true"
        java_outer_classname: ServiceProto
        java_package: com.example.tutorial.personservice
services:
    List:
        description: The List method takes zero or more parameters as input, and returns a PersonCollection of PersonEntity that match the input parameters.
        data:
            request: google.protobuf.Empty
            response: person.PersonCollection
            bodyfield: body
        deeplink:
            description: 'List: GET /mockdata/persons/list.json google.protobuf.Empty , person.PersonCollection #The List method takes zero or more parameters as input, and returns a PersonCollection of PersonEntity that match the input parameters.'
            href: /mockdata/persons/list.json
            method: GET
            rel: list
        query:
            q:
                constraints: {}
                description: Query term to search a person
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
        rpc_name: ListPersons
    Create:
        description: Creates a new Person
        data:
            request: person.Person
            response: person.PersonEntity
            bodyfield: body
        deeplink:
            description: 'Create: GET /mockdata/persons/create.json person.Person , person.PersonEntity #Creates a new Person'
            href: /mockdata/persons/create.json
            method: GET
            rel: create
        query: {}
        rpc_name: CreatePerson
    Get:
        description: The Get method takes zero or more parameters, and returns a PersonEntity which contains a Person
        data:
            request: google.protobuf.Empty
            response: person.PersonEntity
            bodyfield: body
        deeplink:
            description: 'Get: GET /mockdata/persons/{prs}/get.json google.protobuf.Empty , person.PersonEntity #The Get method takes zero or more parameters, and returns a PersonEntity which contains a Person'
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
            bodyfield: body
        deeplink:
            description: 'Update: PATCH /mockdata/persons/{prs}/update.json person.Person , person.PersonEntity #Updates a Person, partial updates are supported'
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
            bodyfield: body
        deeplink:
            description: 'Delete: GET /mockdata/persons/{prs}/delete.json google.protobuf.Empty , google.protobuf.Empty #Delete a Person'
            href: /mockdata/persons/{prs}/delete.json
            method: GET
            rel: delete
        query: {}
        rpc_name: DeletePerson
