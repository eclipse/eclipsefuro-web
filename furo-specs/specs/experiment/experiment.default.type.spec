name: Default
type: Default
description: Test the default value
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
        description: Identity of a experiment
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
        description: Localized String representation of a experiment
        __proto:
            number: 2
        __ui: null
        meta:
            default: ""
            placeholder: ""
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
        __ui: null
        meta:
            default: Ein text per default
            placeholder: ""
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
        __ui: null
        meta:
            default: Ein text per default
            placeholder: ""
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
        __ui: null
        meta:
            default: ""
            placeholder: ""
            hint: Hint
            label: checkbox_input
            options: null
            readonly: false
            repeated: false
            typespecific: null
        constraints: {}
