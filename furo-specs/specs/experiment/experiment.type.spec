name: Experiment
type: Experiment
description: experiment spec for testing
lifecycle: null
__proto:
    package: experiment
    targetfile: experiment.proto
    imports:
        - furo/property.proto
        - furo/type/type.proto
        - google/protobuf/any.proto
        - google/protobuf/field_mask.proto
        - google/protobuf/timestamp.proto
        - google/type/date.proto
        - google/type/money.proto
        - google/type/timeofday.proto
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
    furo_data_textarea_input:
        type: string
        description: field for furo_data_textarea_input for testing
        __proto:
            number: 6
        __ui: null
        meta:
            default: ""
            placeholder: ""
            hint: hint
            label: textarea_input
            options: null
            readonly: false
            repeated: false
            typespecific: null
        constraints: {}
    furo_data_time_input:
        type: string
        description: field for furo-data-time-input for testing
        __proto:
            number: 7
        __ui: null
        meta:
            default: ""
            placeholder: ""
            hint: hint
            label: time-input
            options: null
            readonly: false
            repeated: false
            typespecific: null
        constraints:
            max:
                is: "19:00"
                message: to 19:00
            min:
                is: "05:00"
                message: From 05:00
            step:
                is: "5"
                message: step 5
    furo_data_range_input:
        type: float
        description: field for furo-data-range-input for testing
        __proto:
            number: 8
        __ui: null
        meta:
            default: ""
            placeholder: ""
            hint: hint
            label: range-input
            options: null
            readonly: false
            repeated: false
            typespecific: null
        constraints:
            max:
                is: "50"
                message: to 50
            min:
                is: "20"
                message: From 20
            step:
                is: "2.5"
                message: step 2.5
    furo_data_number_input:
        type: float
        description: field for furo-data-number-input for testing
        __proto:
            number: 9
        __ui: null
        meta:
            default: ""
            placeholder: ""
            hint: hint
            label: number-input
            options: null
            readonly: false
            repeated: false
            typespecific: null
        constraints:
            max:
                is: "555"
                message: to 555
            min:
                is: "1"
                message: from 1
            step:
                is: "3"
                message: step 3
    furo_data_color_input:
        type: string
        description: field for furo-data-color-input for testing
        __proto:
            number: 10
        __ui: null
        meta:
            default: ""
            placeholder: ""
            hint: hint
            label: color-input
            options: null
            readonly: false
            repeated: false
            typespecific: null
        constraints: {}
    furo_data_password_input:
        type: string
        description: field for furo-data-password-input for testing
        __proto:
            number: 11
        __ui: null
        meta:
            default: ""
            placeholder: ""
            hint: hint
            label: password-input
            options: null
            readonly: false
            repeated: false
            typespecific: null
        constraints:
            max:
                is: "15"
                message: max 15
            min:
                is: "6"
                message: min 6
    furo_data_search_input:
        type: string
        description: field for furo-search-input for testing
        __proto:
            number: 12
        __ui: null
        meta:
            default: ""
            placeholder: ""
            hint: hint
            label: ' search'
            options: null
            readonly: false
            repeated: false
            typespecific: null
        constraints:
            max:
                is: "15"
                message: max 15
            min:
                is: "1"
                message: min 1
            pattern:
                is: a.*
                message: must start with a
    furo_data_date_input:
        type: string
        description: field for furo-data-date-input for testing
        __proto:
            number: 13
        __ui: null
        meta:
            default: ""
            placeholder: ""
            hint: hint
            label: date-input
            options: null
            readonly: false
            repeated: false
            typespecific: null
        constraints:
            max:
                is: "2099-12-31"
                message: The latest date to accept is 2099-12-31
            min:
                is: "1800-01-01"
                message: The earliest date to accept is 1800-01-01
            step:
                is: "5"
                message: step 5
    furo_data_bool_icon:
        type: bool
        description: field for furo-data-bool-icon for testing
        __proto:
            number: 14
        __ui: null
        meta:
            default: ""
            placeholder: ""
            hint: hint
            label: bool-icon input
            options: null
            readonly: false
            repeated: false
            typespecific: null
        constraints: {}
    the_any_type:
        type: google.protobuf.Any
        description: field for testing any
        __proto:
            number: 15
        __ui: null
        meta:
            default: ""
            placeholder: ""
            hint: hint
            label: can be anything
            options: null
            readonly: false
            repeated: false
            typespecific: null
        constraints: {}
    type_with_options:
        type: string
        description: field for testing static options
        __proto:
            number: 16
        __ui: null
        meta:
            default: ""
            placeholder: ""
            hint: Choose one
            label: String options
            options:
                flags: []
                list:
                    - '@type': type.googleapis.com/furo.Optionitem
                      display_name: option_1
                      id: option_1
                      selected: true
                    - '@type': type.googleapis.com/furo.Optionitem
                      display_name: option_2
                      id: option_2
                      selected: true
                    - '@type': type.googleapis.com/furo.Optionitem
                      display_name: option_3
                      id: option_3
                      selected: true
            readonly: false
            repeated: false
            typespecific: null
        constraints: {}
    type_property:
        type: furo.Property
        description: field for testing property
        __proto:
            number: 17
        __ui: null
        meta:
            default: ""
            placeholder: ""
            hint: ""
            label: Additional fields
            options: null
            readonly: false
            repeated: true
            typespecific: null
        constraints: {}
    furo_data_date_input_google:
        type: google.type.Date
        description: field for furo-data-date-input for testing
        __proto:
            number: 18
        __ui: null
        meta:
            default: ""
            placeholder: ""
            hint: hint
            label: google-date-input
            options: null
            readonly: false
            repeated: false
            typespecific: null
        constraints:
            max:
                is: "2099-12-31"
                message: The latest date to accept is 2099-12-31
            min:
                is: "1800-01-01"
                message: The earliest date to accept is 1800-01-01
            step:
                is: "2"
                message: step 2
    single_type_property:
        type: furo.Property
        description: field for testing property
        __proto:
            number: 19
        __ui: null
        meta:
            default: ""
            placeholder: ""
            hint: ""
            label: Additional fields
            options: null
            readonly: false
            repeated: false
            typespecific: null
        constraints: {}
    repstring:
        type: string
        description: repeated string
        __proto:
            number: 20
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
    furo_data_money_input:
        type: google.type.Money
        description: field for testing money type
        __proto:
            number: 21
        __ui: null
        meta:
            default: ""
            placeholder: ""
            hint: google.type.Money
            label: Amount
            options:
                flags: []
                list: []
            readonly: false
            repeated: false
            typespecific: null
        constraints:
            max:
                is: "999999"
                message: amount maximal 999999
            min:
                is: "0"
                message: amount can not be negative
            required:
                is: "true"
                message: furo_data_money_input is required
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
    google_timestamp:
        type: google.protobuf.Timestamp
        description: goolge timestamp
        __proto:
            number: 24
        __ui: null
        meta:
            default: ""
            placeholder: ""
            hint: ""
            label: google timestamp
            options: null
            readonly: false
            repeated: false
            typespecific: null
        constraints: {}
    double:
        type: double
        description: double type
        __proto:
            number: 25
        __ui: null
        meta:
            default: ""
            placeholder: ""
            hint: ""
            label: double
            options: null
            readonly: false
            repeated: false
            typespecific: null
        constraints: {}
    int64:
        type: int64
        description: double type
        __proto:
            number: 26
        __ui: null
        meta:
            default: ""
            placeholder: ""
            hint: ""
            label: int64
            options: null
            readonly: false
            repeated: false
            typespecific: null
        constraints: {}
    furo_type_date:
        type: furo.type.Date
        description: furo date
        __proto:
            number: 27
        __ui: null
        meta:
            default: ""
            placeholder: ""
            hint: ""
            label: furo date
            options: null
            readonly: false
            repeated: false
            typespecific: null
        constraints: {}
    google_timeofday:
        type: google.type.TimeOfDay
        description: google TimeOfDay
        __proto:
            number: 28
        __ui: null
        meta:
            default: ""
            placeholder: ""
            hint: ""
            label: google TimeOfDay
            options: null
            readonly: false
            repeated: false
            typespecific: null
        constraints: {}
    furo_type_money:
        type: furo.type.Money
        description: furo Money
        __proto:
            number: 29
        __ui: null
        meta:
            default: ""
            placeholder: ""
            hint: ""
            label: furo Money
            options: null
            readonly: false
            repeated: false
            typespecific: null
        constraints: {}
