name: ConfigChange
type: ConfigChange
description: |-
    Output generated from semantically comparing two versions of a service
     configuration.

     Includes detailed information about a field that have changed with
     applicable advice about potential consequences for the change, such as
     backwards-incompatibility.
__proto:
    package: google.api
    targetfile: config_change.proto
    imports: []
    options:
        go_package: google.golang.org/genproto/googleapis/api/configchange;configchange
        java_multiple_files: "true"
        java_outer_classname: ConfigChangeProto
        java_package: com.google.api
        objc_class_prefix: GAPI
fields:
    element:
        type: string
        description: |-
            Object hierarchy path to the change, with levels separated by a '.'
             character. For repeated fields, an applicable unique identifier field is
             used for the index (usually selector, name, or id). For maps, the term
             'key' is used. If the field has no unique identifier, the numeric index
             is used.
             Examples:
             - visibility.rules[selector=="google.LibraryService.ListBooks"].restriction
             - quota.metric_rules[selector=="google"].metric_costs[key=="reads"].value
             - logging.producer_destinations[0]
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
            label: label.ConfigChange.element
            options:
                flags: []
                list: []
            readonly: false
            repeated: false
            typespecific: null
        constraints: {}
    old_value:
        type: string
        description: |-
            Value of the changed object in the old Service configuration,
             in JSON format. This field will not be populated if ChangeType == ADDED.
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
            label: label.ConfigChange.old_value
            options:
                flags: []
                list: []
            readonly: false
            repeated: false
            typespecific: null
        constraints: {}
    new_value:
        type: string
        description: |-
            Value of the changed object in the new Service configuration,
             in JSON format. This field will not be populated if ChangeType == REMOVED.
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
            label: label.ConfigChange.new_value
            options:
                flags: []
                list: []
            readonly: false
            repeated: false
            typespecific: null
        constraints: {}
    change_type:
        type: unknown
        description: The type for this change, either ADDED, REMOVED, or MODIFIED.
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
            label: label.ConfigChange.change_type
            options:
                flags: []
                list: []
            readonly: false
            repeated: false
            typespecific: null
        constraints: {}
    advices:
        type: google.api.Advice
        description: |-
            Collection of advice provided for this change, useful for determining the
             possible impact of this change.
        __proto:
            number: 5
            oneof: ""
        __ui:
            component: ""
            flags: []
            noinit: false
            noskip: false
        meta:
            default: ""
            hint: ""
            label: label.ConfigChange.advices
            options:
                flags: []
                list: []
            readonly: false
            repeated: true
            typespecific: null
        constraints: {}
