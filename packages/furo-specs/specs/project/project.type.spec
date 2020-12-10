name: project
type: Project
description: Project description
__proto:
    package: project
    targetfile: project.proto
    imports:
        - google/protobuf/field_mask.proto
        - google/type/date.proto
        - google/type/money.proto
        - person/person.proto
    options: {}
fields:
    id:
        type: string
        description: Identity of a project
        __proto:
            number: 1
            oneof: ""
        __ui: null
        meta:
            default: ""
            hint: ""
            label: Id
            options: null
            readonly: true
            repeated: false
            typespecific: null
        constraints: {}
    display_name:
        type: string
        description: Localized String representation of a project
        __proto:
            number: 2
            oneof: ""
        __ui: null
        meta:
            default: ""
            hint: ""
            label: Project
            options: null
            readonly: true
            repeated: false
            typespecific: null
        constraints: {}
    start:
        type: google.type.Date
        description: Start date of the project
        __proto:
            number: 3
            oneof: ""
        __ui: null
        meta:
            default: ""
            hint: ""
            label: Project start
            options: null
            readonly: false
            repeated: false
            typespecific: null
        constraints: {}
    end:
        type: google.type.Date
        description: Prospective end date of the project
        __proto:
            number: 4
            oneof: ""
        __ui: null
        meta:
            default: ""
            hint: ""
            label: Project end
            options: null
            readonly: false
            repeated: false
            typespecific: null
        constraints: {}
    description:
        type: string
        description: Short project description
        __proto:
            number: 5
            oneof: ""
        __ui: null
        meta:
            default: ""
            hint: ""
            label: Description
            options: null
            readonly: false
            repeated: false
            typespecific: null
        constraints: {}
    members:
        type: person.Person
        description: List of project members
        __proto:
            number: 6
            oneof: ""
        __ui: null
        meta:
            default: ""
            hint: ""
            label: Project members
            options: null
            readonly: false
            repeated: true
            typespecific: null
        constraints: {}
    cost_limit:
        type: google.type.Money
        description: Project cost limit
        __proto:
            number: 7
            oneof: ""
        __ui:
            component: ""
            flags:
                - align-right
            noinit: false
            noskip: false
        meta:
            default: ""
            hint: ""
            label: Cost limit
            options: null
            readonly: false
            repeated: false
            typespecific: null
        constraints:
            max:
                is: "25000"
                message: max 25000
            required:
                is: "true"
                message: is required
    update_mask:
        type: google.protobuf.FieldMask
        description: Contains a field_mask which fields of the targeted resource are going to be updated
        __proto:
            number: 8
            oneof: ""
        __ui: null
        meta:
            default: ""
            hint: ""
            label: ""
            options: null
            readonly: false
            repeated: false
            typespecific: null
        constraints: {}
