name: Universaltest
type: Universaltest
description: oneof experiment spec for testing
lifecycle: null
__proto:
    package: universaltest
    targetfile: universaltest.proto
    imports:
        - furo/fat/fat.proto
        - google/protobuf/wrappers.proto
    options:
        go_package: github.com/eclipse/eclipsefuro-web/furo-specs/dist/pb/universaltest;universaltestpb
        java_multiple_files: "true"
        java_outer_classname: UniversaltestProto
        java_package: com.example.tutorial.universaltest
fields:
    id:
        type: string
        description: Identity of a universaltes type
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
    scalar_string:
        type: string
        description: field of a scalar string for the Universaltest
        __proto:
            number: 2
        __ui: null
        meta:
            default: ""
            placeholder: ""
            hint: ""
            label: skalar string
            options: null
            readonly: false
            repeated: false
            typespecific: null
        constraints: {}
    wrapper_string:
        type: google.protobuf.StringValue
        description: field of a wrapper string for the Universaltest
        __proto:
            number: 3
        __ui: null
        meta:
            default: ""
            placeholder: ""
            hint: ""
            label: wrapper string
            options: null
            readonly: false
            repeated: false
            typespecific: null
        constraints: {}
    fat_string:
        type: furo.fat.String
        description: field of a fat string for the Universaltest
        __proto:
            number: 4
        __ui: null
        meta:
            default: ""
            placeholder: ""
            hint: ""
            label: fat string
            options: null
            readonly: false
            repeated: false
            typespecific: null
        constraints: {}
    scalar_int32:
        type: int32
        description: field of a scalar int32 for the Universaltest
        __proto:
            number: 5
        __ui: null
        meta:
            default: ""
            placeholder: ""
            hint: ""
            label: skalar int
            options: null
            readonly: false
            repeated: false
            typespecific: null
        constraints: {}
    wrapper_int32:
        type: google.protobuf.Int32Value
        description: field of a wrapper int32 for the Universaltest
        __proto:
            number: 6
        __ui: null
        meta:
            default: ""
            placeholder: ""
            hint: ""
            label: google wrapper int32
            options: null
            readonly: false
            repeated: false
            typespecific: null
        constraints: {}
    fat_int32:
        type: furo.fat.Int32
        description: field of a fat int32 for the Universaltest
        __proto:
            number: 7
        __ui: null
        meta:
            default: ""
            placeholder: ""
            hint: ""
            label: fat int32
            options: null
            readonly: false
            repeated: false
            typespecific: null
        constraints: {}
    fat_string_list:
        type: furo.fat.String
        description: field of a fat string for the Universaltest
        __proto:
            number: 8
        __ui: null
        meta:
            default: ""
            placeholder: ""
            hint: hint message
            label: fat string with options
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
        constraints:
            value.max:
                is: "15"
                message: 15 characters maximum
            value.min:
                is: "3"
                message: at least 3 characters
            value.pattern:
                is: ^a.*
                message: must start with a
            value.required:
                is: "true"
                message: is required
    wrapper_bool:
        type: google.protobuf.BoolValue
        description: field of a wrapper boolean for the Universaltest
        __proto:
            number: 9
        __ui: null
        meta:
            default: ""
            placeholder: ""
            hint: ""
            label: google wrapper boolean
            options: null
            readonly: false
            repeated: false
            typespecific: null
        constraints: {}
    fat_bool:
        type: furo.fat.Bool
        description: field of a fat bool for the Universaltest
        __proto:
            number: 10
        __ui: null
        meta:
            default: ""
            placeholder: ""
            hint: ""
            label: fat bool
            options: null
            readonly: false
            repeated: false
            typespecific: null
        constraints: {}
    fat_string_repeated:
        type: furo.fat.String
        description: field of repeated fat string for the Universaltest
        __proto:
            number: 11
        __ui: null
        meta:
            default: ""
            placeholder: ""
            hint: ""
            label: fat bool
            options: null
            readonly: false
            repeated: true
            typespecific: null
        constraints: {}
    fat_double:
        type: furo.fat.Double
        description: field of furo.fat.double for the Universaltest
        __proto:
            number: 12
        __ui: null
        meta:
            default: ""
            placeholder: ""
            hint: ""
            label: fat double
            options: null
            readonly: false
            repeated: false
            typespecific: null
        constraints: {}
    fat_float:
        type: furo.fat.Float
        description: field of furo.fat.float for the Universaltest
        __proto:
            number: 13
        __ui: null
        meta:
            default: ""
            placeholder: ""
            hint: ""
            label: fat float
            options: null
            readonly: false
            repeated: false
            typespecific: null
        constraints: {}
    fat_int64:
        type: furo.fat.Int64
        description: field of a fat int64 for the Universaltest
        __proto:
            number: 14
        __ui: null
        meta:
            default: ""
            placeholder: ""
            hint: ""
            label: fat int64
            options: null
            readonly: false
            repeated: false
            typespecific: null
        constraints: {}
