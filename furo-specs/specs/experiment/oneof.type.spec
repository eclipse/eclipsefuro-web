name: Oneof
type: Oneof
description: oneof experiment spec for testing
lifecycle: null
__proto:
    package: experiment
    targetfile: experiment.proto
    imports:
        - google/protobuf/field_mask.proto
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
    enumexample:
        type: int32
        description: skalar in a group of complex
        __proto:
            number: 29
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
    display_name:
        type: string
        description: Localized String representation of a experiment
        __proto:
            number: 2
            oneof: aaa
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
            oneof: bbb
        __ui: null
        meta:
            default: Default Description
            placeholder: ""
            hint: ""
            label: Description
            options: null
            readonly: false
            repeated: false
            typespecific: null
        constraints: {}
    furo_data_checkbox_input:
        type: bool
        description: field for furo_data_checkbox_input for testing
        __proto:
            number: 4
            oneof: aaa
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
    furo_data_text_input:
        type: string
        description: field for furo_data_text_input for testing
        __proto:
            number: 5
            oneof: bbb
        __ui: null
        meta:
            default: ""
            placeholder: ""
            hint: hint
            label: text_input
            options: null
            readonly: false
            repeated: false
            typespecific: null
        constraints:
            max:
                is: "15"
                message: 15 characters maximum
            min:
                is: "3"
                message: at least 3 characters
            pattern:
                is: ^a.*
                message: must start with a
            required:
                is: "true"
                message: furo_data_text_input is required
    furo_data_file_input:
        type: string
        description: field for testing file type
        __proto:
            number: 22
        __ui: null
        meta:
            default: ""
            placeholder: ""
            hint: ""
            label: Choose a file
            options: null
            readonly: false
            repeated: true
            typespecific: null
        constraints:
            required:
                is: "true"
                message: furo_data_file_input is required
    update_mask:
        type: google.protobuf.FieldMask
        description: Contains a field_mask which fields of the targeted resource are going to be updated
        __proto:
            number: 23
            oneof: complex
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
    other_mask:
        type: google.protobuf.FieldMask
        description: for oneof test purposes only
        __proto:
            number: 24
            oneof: complex
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
    value:
        type: bool
        description: skalar in a group of complex
        __proto:
            number: 25
            oneof: complex
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
