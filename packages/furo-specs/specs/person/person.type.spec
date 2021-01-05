name: person
type: Person
description: Person message type
__proto:
    package: person
    targetfile: person.proto
    imports:
        - google/protobuf/field_mask.proto
    options: {}
fields:
    id:
        type: string
        description: Identity of a person
        __proto:
            number: 1
            oneof: ""
        __ui: null
        meta:
            default: ""
            hint: ""
            label: Person
            options: null
            readonly: true
            repeated: false
            typespecific: null
        constraints: {}
    display_name:
        type: string
        description: Localized String representation of a person
        __proto:
            number: 2
            oneof: ""
        __ui: null
        meta:
            default: ""
            hint: ""
            label: Person
            options: null
            readonly: true
            repeated: false
            typespecific: null
        constraints: {}
    name:
        type: string
        description: Name of a person
        __proto:
            number: 3
            oneof: ""
        __ui: null
        meta:
            default: ""
            hint: ""
            label: Name
            options: null
            readonly: false
            repeated: false
            typespecific: null
        constraints:
            required:
                is: "true"
                message: you must enter a name
    first_name:
        type: string
        description: First name of a person
        __proto:
            number: 4
            oneof: ""
        __ui:
            component: furo-data-text-input
            flags: []
            noinit: false
            noskip: false
        meta:
            default: ""
            hint: ""
            label: First name
            options: null
            readonly: false
            repeated: false
            typespecific: null
        constraints: {}
    phone_nr:
        type: string
        description: Internal phone number
        __proto:
            number: 5
            oneof: ""
        __ui: null
        meta:
            default: ""
            hint: ""
            label: Phone No
            options: null
            readonly: false
            repeated: false
            typespecific: null
        constraints: {}
    skills:
        type: string
        description: List of main skills of a person
        __proto:
            number: 6
            oneof: ""
        __ui: null
        meta:
            default: ""
            hint: ""
            label: Skills
            options: null
            readonly: false
            repeated: true
            typespecific: null
        constraints: {}
    update_mask:
        type: google.protobuf.FieldMask
        description: Contains a field_mask which fields of the targeted resource are going to be updated
        __proto:
            number: 7
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
    sex:
        type: string
        description: sex
        __proto:
            number: 8
            oneof: ""
        __ui: null
        meta:
            default: ""
            hint: ""
            label: "sex"
            options:
                list:
                    - '@type': type.googleapis.com/furo.Optionitem
                      display_name: person.type.sex.unknown.label
                      id: unknown
                      selected: false
                    - '@type': type.googleapis.com/furo.Optionitem
                      display_name: person.type.sex.female.label
                      id: female
                      selected: true
                    - '@type': type.googleapis.com/furo.Optionitem
                      display_name: person.type.sex.male.label
                      id: male
                      selected: false
            readonly: false
            repeated: false
            typespecific: null
        constraints: {}
