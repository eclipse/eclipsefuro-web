name: Usage
type: Usage
description: Configuration controlling usage of a service.
__proto:
    package: google.api
    targetfile: usage.proto
    imports: []
    options:
        go_package: google.golang.org/genproto/googleapis/api/serviceconfig;serviceconfig
        java_multiple_files: "true"
        java_outer_classname: UsageProto
        java_package: com.google.api
        objc_class_prefix: GAPI
fields:
    requirements:
        type: string
        description: |-
            Requirements that must be satisfied before a consumer project can use the
             service. Each requirement is of the form <service.name>/<requirement-id>;
             for example 'serviceusage.googleapis.com/billing-enabled'.
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
            label: label.Usage.requirements
            options:
                flags: []
                list: []
            readonly: false
            repeated: true
            typespecific: null
        constraints: {}
    rules:
        type: google.api.UsageRule
        description: |-
            A list of usage rules that apply to individual API methods.

             **NOTE:** All service configuration rules follow "last one wins" order.
        __proto:
            number: 6
            oneof: ""
        __ui:
            component: ""
            flags: []
            noinit: false
            noskip: false
        meta:
            default: ""
            hint: ""
            label: label.Usage.rules
            options:
                flags: []
                list: []
            readonly: false
            repeated: true
            typespecific: null
        constraints: {}
    producer_notification_channel:
        type: string
        description: |-
            The full resource name of a channel used for sending notifications to the
             service producer.

             Google Service Management currently only supports
             [Google Cloud Pub/Sub](https://cloud.google.com/pubsub) as a notification
             channel. To use Google Cloud Pub/Sub as the channel, this must be the name
             of a Cloud Pub/Sub topic that uses the Cloud Pub/Sub topic name format
             documented in https://cloud.google.com/pubsub/docs/overview.
        __proto:
            number: 7
            oneof: ""
        __ui:
            component: ""
            flags: []
            noinit: false
            noskip: false
        meta:
            default: ""
            hint: ""
            label: label.Usage.producer_notification_channel
            options:
                flags: []
                list: []
            readonly: false
            repeated: false
            typespecific: null
        constraints: {}
