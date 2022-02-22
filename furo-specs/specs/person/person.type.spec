name: Person
type: Person
description: Person message type
lifecycle: null
__proto:
    package: person
    targetfile: person.proto
    imports:
        - google/protobuf/field_mask.proto
    options:
        go_package: github.com/eclipse/eclipsefuro-web/furo-specs/dist/pb/person;personpb
        java_multiple_files: "true"
        java_outer_classname: PersonProto
        java_package: com.example.tutorial.person
fields:
    id:
        type: string
        description: Identity of a person
        __proto:
            number: 1
        __ui: null
        meta:
            default: ""
            placeholder: ""
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
        __ui: null
        meta:
            default: ""
            placeholder: ""
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
        __ui: null
        meta:
            default: ""
            placeholder: ""
            hint: ""
            label: Name
            options: null
            readonly: false
            repeated: false
            typespecific: null
        constraints:
            required:
                is: "true"
                message: name is required
    first_name:
        type: string
        description: First name of a person
        __proto:
            number: 4
        __ui:
            component: furo-data-text-input
            flags: []
            noinit: false
            noskip: false
        meta:
            default: ""
            placeholder: ""
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
        __ui: null
        meta:
            default: ""
            placeholder: ""
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
        __ui: null
        meta:
            default: ""
            placeholder: ""
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
    sex:
        type: string
        description: sex
        __proto:
            number: 8
        __ui: null
        meta:
            default: female
            placeholder: ""
            hint: ""
            label: sex
            options:
                flags: []
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
