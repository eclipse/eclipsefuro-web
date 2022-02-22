name: Advice
type: Advice
description: |-
    Generated advice about this change, used for providing more
     information about how a change will affect the existing service.
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
    description:
        type: string
        description: |-
            Useful description for why this advice was applied and what actions should
             be taken to mitigate any implied risks.
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
            label: label.Advice.description
            options:
                flags: []
                list: []
            readonly: false
            repeated: false
            typespecific: null
        constraints: {}
