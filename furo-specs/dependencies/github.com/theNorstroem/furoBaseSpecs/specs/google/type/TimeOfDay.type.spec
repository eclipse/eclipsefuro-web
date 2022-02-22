name: TimeOfDay
type: TimeOfDay
description: |-
    Represents a time of day. The date and time zone are either not significant
     or are specified elsewhere. An API may chose to allow leap seconds. Related
     types are [google.type.Date][google.type.Date] and `google.protobuf.Timestamp`.
__proto:
    package: google.type
    targetfile: timeofday.proto
    imports: []
    options:
        go_package: google.golang.org/genproto/googleapis/type/timeofday;timeofday
        java_multiple_files: "true"
        java_outer_classname: TimeOfDayProto
        java_package: com.google.type
        objc_class_prefix: GTP
fields:
    hours:
        type: int32
        description: |-
            Hours of day in 24 hour format. Should be from 0 to 23. An API may choose
             to allow the value "24:00:00" for scenarios like business closing time.
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
            label: label.TimeOfDay.hours
            options:
                flags: []
                list: []
            readonly: false
            repeated: false
            typespecific: null
        constraints: {}
    minutes:
        type: int32
        description: Minutes of hour of day. Must be from 0 to 59.
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
            label: label.TimeOfDay.minutes
            options:
                flags: []
                list: []
            readonly: false
            repeated: false
            typespecific: null
        constraints: {}
    seconds:
        type: int32
        description: |-
            Seconds of minutes of the time. Must normally be from 0 to 59. An API may
             allow the value 60 if it allows leap-seconds.
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
            label: label.TimeOfDay.seconds
            options:
                flags: []
                list: []
            readonly: false
            repeated: false
            typespecific: null
        constraints: {}
    nanos:
        type: int32
        description: Fractions of seconds in nanoseconds. Must be from 0 to 999,999,999.
        __proto:
            number: 4
            oneof: ""
        __ui:
            component: ""
            flags: []
            noinit: false
            noskip: false
        meta:
            default: ""
            hint: ""
            label: label.TimeOfDay.nanos
            options:
                flags: []
                list: []
            readonly: false
            repeated: false
            typespecific: null
        constraints: {}
