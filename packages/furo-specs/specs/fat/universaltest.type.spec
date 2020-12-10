name: universaltest
type: Universaltest
description: oneof experiment spec for testing
__proto:
    package: universaltest
    targetfile: universaltest.proto
    imports:
        - furo/fat/fat.proto
        - google/protobuf/wrappers.proto
    options: {}
fields:
    id:
        type: string
        description: Identity of a universaltes type
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
    scalar_string:
        type: string
        description: field of a scalar string for the Universaltest
        __proto:
            number: 2
            oneof: ""
        __ui: null
        meta:
            default: ""
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
            oneof: ""
        __ui: null
        meta:
            default: ""
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
            oneof: ""
        __ui: null
        meta:
            default: ""
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
            oneof: ""
        __ui: null
        meta:
            default: ""
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
            oneof: ""
        __ui: null
        meta:
            default: ""
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
            oneof: ""
        __ui: null
        meta:
            default: ""
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
            oneof: ""
        __ui: null
        meta:
            default: ""
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
            oneof: ""
        __ui: null
        meta:
            default: ""
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
            oneof: ""
        __ui: null
        meta:
            default: ""
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
            oneof: ""
        __ui: null
        meta:
            default: ""
            hint: ""
            label: fat bool
            options: null
            readonly: false
            repeated: true
            typespecific: null
        constraints: {}
