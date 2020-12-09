name: experiment
type: Default
description: Test the default value
__proto:
    package: experiment
    targetfile: experiment.proto
    imports: []
    options: {}
fields:
    id:
        type: string
        description: Identity of a experiment
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
        description: Localized String representation of a experiment
        __proto:
            number: 2
            oneof: ""
        __ui: null
        meta:
            default: ""
            hint: ""
            label: experiment
            options: null
            readonly: true
            repeated: false
            typespecific: null
        constraints: {}
    description:
        type: string
        description: Short experiment description
        __proto:
            number: 3
            oneof: ""
        __ui: null
        meta:
            default: Ein text per default
            hint: ""
            label: Description
            options: null
            readonly: false
            repeated: false
            typespecific: null
        constraints: {}
    repstring:
        type: string
        description: repeated string
        __proto:
            number: 4
            oneof: ""
        __ui: null
        meta:
            default: Ein text per default
            hint: ""
            label: Description
            options: null
            readonly: false
            repeated: true
            typespecific: null
        constraints: {}
    furo_data_checkbox_input:
        type: bool
        description: field for furo_data_checkbox_input for testing
        __proto:
            number: 5
            oneof: ""
        __ui: null
        meta:
            default: ""
            hint: Hint
            label: checkbox_input
            options: null
            readonly: false
            repeated: false
            typespecific: null
        constraints: {}
