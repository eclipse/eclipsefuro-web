name: person_entity
type: PersonEntity
description: PersonEntity with Person
__proto:
    package: person
    targetfile: person.proto
    imports:
        - furo/furo.proto
    options: {}
fields:
    data:
        type: person.Person
        description: contains a person.Person
        __proto:
            number: 1
            oneof: ""
        __ui: null
        meta: null
        constraints: {}
    links:
        type: furo.Link
        description: Hateoas links
        __proto:
            number: 2
            oneof: ""
        __ui: null
        meta:
            default: ""
            hint: ""
            label: ""
            options: null
            readonly: false
            repeated: true
            typespecific: null
        constraints: {}
    meta:
        type: furo.Meta
        description: Meta for the response
        __proto:
            number: 3
            oneof: ""
        __ui: null
        meta: null
        constraints: {}
