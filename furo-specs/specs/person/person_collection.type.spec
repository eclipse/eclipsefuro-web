name: PersonCollection
type: PersonCollection
description: PersonCollection with repeated PersonEntity
lifecycle: null
__proto:
    package: person
    targetfile: person.proto
    imports:
        - furo/furo.proto
    options:
        go_package: github.com/eclipse/eclipsefuro-web/furo-specs/dist/pb/person;personpb
        java_multiple_files: "true"
        java_outer_classname: PersonProto
        java_package: com.example.tutorial.person
fields:
    meta:
        type: furo.Meta
        description: Meta for the response
        __proto:
            number: 2
        __ui: null
        meta:
            default: ""
            placeholder: ""
            hint: ""
            label: ""
            options: null
            readonly: false
            repeated: false
            typespecific: null
        constraints: {}
    links:
        type: furo.Link
        description: Hateoas links
        __proto:
            number: 3
        __ui: null
        meta:
            default: ""
            placeholder: ""
            hint: ""
            label: ""
            options: null
            readonly: false
            repeated: true
            typespecific: null
        constraints: {}
    entities:
        type: person.PersonEntity
        description: Contains a person.PersonEntity repeated
        __proto:
            number: 4
        __ui: null
        meta:
            default: ""
            placeholder: ""
            hint: ""
            label: ""
            options: null
            readonly: false
            repeated: true
            typespecific: null
        constraints: {}
