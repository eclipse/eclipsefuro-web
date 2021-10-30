name: Billing
type: Billing
description: |-
    Billing related configuration of the service.

     The following example shows how to configure monitored resources and metrics
     for billing, `consumer_destinations` is the only supported destination and
     the monitored resources need at least one label key
     `cloud.googleapis.com/location` to indicate the location of the billing
     usage, using different monitored resources between monitoring and billing is
     recommended so they can be evolved independently:


         monitored_resources:
         - type: library.googleapis.com/billing_branch
           labels:
           - key: cloud.googleapis.com/location
             description: |
               Predefined label to support billing location restriction.
           - key: city
             description: |
               Custom label to define the city where the library branch is located
               in.
           - key: name
             description: Custom label to define the name of the library branch.
         metrics:
         - name: library.googleapis.com/book/borrowed_count
           metric_kind: DELTA
           value_type: INT64
           unit: "1"
         billing:
           consumer_destinations:
           - monitored_resource: library.googleapis.com/billing_branch
             metrics:
             - library.googleapis.com/book/borrowed_count
__proto:
    package: google.api
    targetfile: billing.proto
    imports:
        - google/api/metric.proto
    options:
        go_package: google.golang.org/genproto/googleapis/api/serviceconfig;serviceconfig
        java_multiple_files: "true"
        java_outer_classname: BillingProto
        java_package: com.google.api
        objc_class_prefix: GAPI
fields:
    consumer_destinations:
        type: google.api.Billing.BillingDestination
        description: |-
            Billing configurations for sending metrics to the consumer project.
             There can be multiple consumer destinations per service, each one must have
             a different monitored resource type. A metric can be used in at most
             one consumer destination.
        __proto:
            number: 8
            oneof: ""
        __ui:
            component: ""
            flags: []
            noinit: false
            noskip: false
        meta:
            default: ""
            hint: ""
            label: label.Billing.consumer_destinations
            options:
                flags: []
                list: []
            readonly: false
            repeated: true
            typespecific: null
        constraints: {}
