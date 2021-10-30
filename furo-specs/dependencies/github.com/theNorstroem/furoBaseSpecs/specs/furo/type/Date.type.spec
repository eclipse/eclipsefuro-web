name: Date
type: Date
description: |-
    Represents a whole calendar date, e.g. date of birth. The time of day and
     time zone are either specified elsewhere or are not significant. The date
     is relative to the Proleptic Gregorian Calendar. The day may be 0 to
     represent a year and month where the day is not significant, e.g. credit card
     expiration date. The year may be 0 to represent a month and day independent
     of year, e.g. anniversary date. Related types are [google.type.TimeOfDay][google.type.TimeOfDay]
     and `google.protobuf.Timestamp`.
lifecycle:
    deprecated: true
    info: "Please switch to google.type.Date"
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
    year:
        type: int32
        description: |-
            Year of date. Must be from 1 to 9999, or 0 if specifying a date without
             a year.
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
            label: label.Date.year
            options:
                flags: []
                list: []
            readonly: false
            repeated: false
            typespecific: null
        constraints: {}
    month:
        type: int32
        description: Month of year. Must be from 1 to 12.
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
            label: label.Date.month
            options:
                flags: []
                list: []
            readonly: false
            repeated: false
            typespecific: null
        constraints: {}
    day:
        type: int32
        description: |-
            Day of month. Must be from 1 to 31 and valid for the year and month, or 0
             if specifying a year/month where the day is not significant.
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
            label: label.Date.day
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
