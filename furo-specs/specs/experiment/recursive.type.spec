name: Recursive
type: Recursive
description: recursive type for testing
lifecycle: null
__proto:
    package: experiment
    targetfile: experiment.proto
    imports: []
    options:
        go_package: github.com/eclipse/eclipsefuro-web/furo-specs/dist/pb/experiment;experimentpb
        java_multiple_files: "true"
        java_outer_classname: ExperimentProto
        java_package: com.example.tutorial.experiment
fields:
    id:
        type: string
        description: Identity
        __proto:
            number: 1
        __ui: null
        meta:
            default: ""
            placeholder: ""
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
        __ui: null
        meta:
            default: ""
            placeholder: ""
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
        __ui: null
        meta:
            default: ""
            placeholder: ""
            hint: ""
            label: Recursio
            options: null
            readonly: false
            repeated: false
            typespecific: null
        constraints: {}
