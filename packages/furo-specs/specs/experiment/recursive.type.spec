name: recursive
type: Recursive
description: recursive type for testing
__proto:
    package: experiment
    targetfile: experiment.proto
    imports: []
    options: {}
fields:
    id:
        type: string
        description: Identity
        __proto:
            number: 1
            oneof: ""
        __ui: null
        meta:
            default: ""
            hint: ""
            label: Id
            options: null
            readonly: false
            repeated: false
            typespecific: null
        constraints: {}
    display_name:
        type: string
        description: Localized String representation
        __proto:
            number: 2
            oneof: ""
        __ui: null
        meta:
            default: ""
            hint: ""
            label: experiment
            options: null
            readonly: false
            repeated: false
            typespecific: null
        constraints: {}
    recursion:
        type: experiment.Recursive
        description: The recursion
        __proto:
            number: 3
            oneof: ""
        __ui: null
        meta:
            default: ""
            hint: ""
            label: Recursio
            options: null
            readonly: false
            repeated: false
            typespecific: null
        constraints: {}
