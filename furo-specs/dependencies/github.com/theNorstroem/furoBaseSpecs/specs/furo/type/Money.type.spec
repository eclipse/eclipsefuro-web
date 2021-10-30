name: Money
type: Money
description: Represents an amount of money with its currency type.
lifecycle:
    deprecated: true
    info: "Please switch to google.type.Money"
__proto:
    package: furo.type
    targetfile: type.proto
    imports: []
    options:
        cc_enable_arenas: "true"
        go_package: github.com/theNorstroem/FuroBaseSpecs/dist/pb/furo/type;furotypepb
        java_multiple_files: "true"
        java_outer_classname: FuroTypeProto
        java_package: pro.furo.type
        objc_class_prefix: FPB
fields:
    currency_code:
        type: string
        description: The 3-letter currency code defined in ISO 4217.
        __proto:
            number: 1
        __ui:
            component: ""
            flags: []
            noinit: false
            noskip: false
        meta:
            default: ""
            placeholder: ""
            hint: ""
            label: label.Money.currency_code
            options:
                flags: []
                list: []
            readonly: false
            repeated: false
            typespecific: null
        constraints: {}
    units:
        type: int64
        description: |-
            The whole units of the amount.
             For example if `currencyCode` is `"USD"`, then 1 unit is one US dollar.
        __proto:
            number: 2
        __ui:
            component: ""
            flags: []
            noinit: false
            noskip: false
        meta:
            default: ""
            placeholder: ""
            hint: ""
            label: label.Money.units
            options:
                flags: []
                list: []
            readonly: false
            repeated: false
            typespecific: null
        constraints: {}
    nanos:
        type: int32
        description: |-
            Number of nano (10^-9) units of the amount.
             The value must be between -999,999,999 and +999,999,999 inclusive.
             If `units` is positive, `nanos` must be positive or zero.
             If `units` is zero, `nanos` can be positive, zero, or negative.
             If `units` is negative, `nanos` must be negative or zero.
             For example $-1.75 is represented as `units`=-1 and `nanos`=-750,000,000.
        __proto:
            number: 3
        __ui:
            component: ""
            flags: []
            noinit: false
            noskip: false
        meta:
            default: ""
            placeholder: ""
            hint: ""
            label: label.Money.nanos
            options:
                flags: []
                list: []
            readonly: false
            repeated: false
            typespecific: null
        constraints: {}
    display_name:
        type: string
        description: String representation of the reference
        __proto:
            number: 4
        __ui: null
        meta:
            default: ""
            placeholder: ""
            hint: ""
            label: ""
            options: null
            readonly: true
            repeated: false
            typespecific: null
        constraints: {}
