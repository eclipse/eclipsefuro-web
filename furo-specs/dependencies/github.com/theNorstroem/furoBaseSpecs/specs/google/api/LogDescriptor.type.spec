name: LogDescriptor
type: LogDescriptor
description: |-
    A description of a log type. Example in YAML format:

         - name: library.googleapis.com/activity_history
           description: The history of borrowing and returning library items.
           display_name: Activity
           labels:
           - key: /customer_id
             description: Identifier of a library customer
__proto:
    package: google.api
    targetfile: log.proto
    imports:
        - google/api/label.proto
    options:
        go_package: google.golang.org/genproto/googleapis/api/serviceconfig;serviceconfig
        java_multiple_files: "true"
        java_outer_classname: LogProto
        java_package: com.google.api
        objc_class_prefix: GAPI
fields:
    name:
        type: string
        description: |-
            The name of the log. It must be less than 512 characters long and can
             include the following characters: upper- and lower-case alphanumeric
             characters [A-Za-z0-9], and punctuation characters including
             slash, underscore, hyphen, period [/_-.].
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
            label: label.LogDescriptor.name
            options:
                flags: []
                list: []
            readonly: false
            repeated: false
            typespecific: null
        constraints: {}
    labels:
        type: google.api.LabelDescriptor
        description: |-
            The set of labels that are available to describe a specific log entry.
             Runtime requests that contain labels not specified here are
             considered invalid.
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
            label: label.LogDescriptor.labels
            options:
                flags: []
                list: []
            readonly: false
            repeated: true
            typespecific: null
        constraints: {}
    description:
        type: string
        description: |-
            A human-readable description of this log. This information appears in
             the documentation and can contain details.
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
            label: label.LogDescriptor.description
            options:
                flags: []
                list: []
            readonly: false
            repeated: false
            typespecific: null
        constraints: {}
    display_name:
        type: string
        description: |-
            The human-readable name for this log. This information appears on
             the user interface and should be concise.
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
            label: label.LogDescriptor.display_name
            options:
                flags: []
                list: []
            readonly: false
            repeated: false
            typespecific: null
        constraints: {}
