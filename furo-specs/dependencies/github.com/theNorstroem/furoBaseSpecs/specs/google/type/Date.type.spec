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
__proto:
    package: google.type
    targetfile: date.proto
    imports: []
    options:
        cc_enable_arenas: "true"
        go_package: google.golang.org/genproto/googleapis/type/date;date
        java_multiple_files: "true"
        java_outer_classname: DateProto
        java_package: com.google.type
        objc_class_prefix: GTP
fields:
    year:
        type: int32
        description: |-
            Year of date. Must be from 1 to 9999, or 0 if specifying a date without
             a year.
        __proto:
            number: 1
            oneof: ""
        __ui:
            component: ""
            flags: []
            noinit: false
            noskip: false
        meta:
            default: ""
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
            oneof: ""
        __ui:
            component: ""
            flags: []
            noinit: false
            noskip: false
        meta:
            default: ""
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
            oneof: ""
        __ui:
            component: ""
            flags: []
            noinit: false
            noskip: false
        meta:
            default: ""
            hint: ""
            label: label.Date.day
            options:
                flags: []
                list: []
            readonly: false
            repeated: false
            typespecific: null
        constraints: {}
