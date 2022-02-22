name: Project
type: Project
description: Project description
lifecycle: null
__proto:
    package: project
    targetfile: project.proto
    imports:
        - google/protobuf/field_mask.proto
        - google/type/date.proto
        - google/type/money.proto
        - person/person.proto
    options:
        go_package: github.com/eclipse/eclipsefuro-web/furo-specs/dist/pb/project;projectpb
        java_multiple_files: "true"
        java_outer_classname: ProjectProto
        java_package: com.example.tutorial.project
fields:
    id:
        type: string
        description: Identity of a project
        __proto:
            number: 1
        __ui: null
        meta:
            default: ""
            placeholder: ""
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
        __ui: null
        meta:
            default: ""
            placeholder: ""
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
        __ui: null
        meta:
            default: ""
            placeholder: ""
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
        __ui: null
        meta:
            default: ""
            placeholder: ""
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
        __ui: null
        meta:
            default: ""
            placeholder: ""
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
        __ui: null
        meta:
            default: ""
            placeholder: ""
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
        __ui:
            component: ""
            flags:
                - align-right
            noinit: false
            noskip: false
        meta:
            default: ""
            placeholder: ""
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
                message: cost_limit is required
    update_mask:
        type: google.protobuf.FieldMask
        description: Contains a field_mask which fields of the targeted resource are going to be updated
        __proto:
            number: 8
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
