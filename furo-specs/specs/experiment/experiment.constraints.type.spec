name: Constraints
type: Constraints
description: Test the Constraints
lifecycle: null
__proto:
    package: experiment
    targetfile: experiment.proto
    imports:
        - google/type/date.proto
        - google/type/money.proto
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
        constraints:
            required:
                is: "true"
                message: id is required
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
        constraints:
            max:
                is: "12"
                message: maximal 12
            pattern:
                is: ^a.*
                message: must start with a
            required:
                is: "true"
                message: display_name is required
    number:
        type: int32
        description: Short experiment description
        __proto:
            number: 3
        __ui: null
        meta:
            default: "1"
            placeholder: ""
            hint: ""
            label: Valid values are 6,9,12
            options: null
            readonly: false
            repeated: false
            typespecific: null
        constraints:
            max:
                is: "12"
                message: maximal 12
            min:
                is: "6"
                message: Minimal number 6
            step:
                is: "3"
                message: step 3
    text:
        type: string
        description: Localized String representation of a experiment
        __proto:
            number: 4
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
        constraints:
            max:
                is: "12"
                message: maximal 12
            min:
                is: "6"
                message: minimal 6
            pattern:
                is: ^a.*
                message: must start with a
            required:
                is: "true"
                message: text is required
    date:
        type: google.type.Date
        description: Well Known Type Date
        __proto:
            number: 5
        __ui: null
        meta:
            default: ""
            placeholder: ""
            hint: ""
            label: Date
            options: null
            readonly: false
            repeated: false
            typespecific: null
        constraints:
            max:
                is: "9999-12-31"
                message: max 31.12.9999
            min:
                is: "2020-01-01"
                message: min 01.01.2020
            required:
                is: "true"
                message: date is required
            step:
                is: "30"
                message: step 30 days
    money:
        type: google.type.Money
        description: Well Known Type Money
        __proto:
            number: 6
        __ui: null
        meta:
            default: ""
            placeholder: ""
            hint: ""
            label: Money
            options: null
            readonly: false
            repeated: false
            typespecific: null
        constraints:
            max:
                is: "100000.00"
                message: max amount 100000.00
            min:
                is: "1200.50"
                message: min amount 1200.50
            required:
                is: "true"
                message: money is required
            step:
                is: "1000.00"
                message: only in steps of 1000
    float:
        type: float
        description: Float values
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
        constraints:
            max:
                is: "12"
                message: maximal 12
            step:
                is: "0.01"
                message: step 0.01
