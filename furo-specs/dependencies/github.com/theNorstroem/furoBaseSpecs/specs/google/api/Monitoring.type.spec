name: Monitoring
type: Monitoring
description: |-
    Monitoring configuration of the service.

     The example below shows how to configure monitored resources and metrics
     for monitoring. In the example, a monitored resource and two metrics are
     defined. The `library.googleapis.com/book/returned_count` metric is sent
     to both producer and consumer projects, whereas the
     `library.googleapis.com/book/num_overdue` metric is only sent to the
     consumer project.

         monitored_resources:
         - type: library.googleapis.com/Branch
           display_name: "Library Branch"
           description: "A branch of a library."
           launch_stage: GA
           labels:
           - key: resource_container
             description: "The Cloud container (ie. project id) for the Branch."
           - key: location
             description: "The location of the library branch."
           - key: branch_id
             description: "The id of the branch."
         metrics:
         - name: library.googleapis.com/book/returned_count
           display_name: "Books Returned"
           description: "The count of books that have been returned."
           launch_stage: GA
           metric_kind: DELTA
           value_type: INT64
           unit: "1"
           labels:
           - key: customer_id
             description: "The id of the customer."
         - name: library.googleapis.com/book/num_overdue
           display_name: "Books Overdue"
           description: "The current number of overdue books."
           launch_stage: GA
           metric_kind: GAUGE
           value_type: INT64
           unit: "1"
           labels:
           - key: customer_id
             description: "The id of the customer."
         monitoring:
           producer_destinations:
           - monitored_resource: library.googleapis.com/Branch
             metrics:
             - library.googleapis.com/book/returned_count
           consumer_destinations:
           - monitored_resource: library.googleapis.com/Branch
             metrics:
             - library.googleapis.com/book/returned_count
             - library.googleapis.com/book/num_overdue
__proto:
    package: google.api
    targetfile: monitoring.proto
    imports: []
    options:
        go_package: google.golang.org/genproto/googleapis/api/serviceconfig;serviceconfig
        java_multiple_files: "true"
        java_outer_classname: MonitoringProto
        java_package: com.google.api
        objc_class_prefix: GAPI
fields:
    producer_destinations:
        type: google.api.Monitoring.MonitoringDestination
        description: |-
            Monitoring configurations for sending metrics to the producer project.
             There can be multiple producer destinations. A monitored resource type may
             appear in multiple monitoring destinations if different aggregations are
             needed for different sets of metrics associated with that monitored
             resource type. A monitored resource and metric pair may only be used once
             in the Monitoring configuration.
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
            label: label.Monitoring.producer_destinations
            options:
                flags: []
                list: []
            readonly: false
            repeated: true
            typespecific: null
        constraints: {}
    consumer_destinations:
        type: google.api.Monitoring.MonitoringDestination
        description: |-
            Monitoring configurations for sending metrics to the consumer project.
             There can be multiple consumer destinations. A monitored resource type may
             appear in multiple monitoring destinations if different aggregations are
             needed for different sets of metrics associated with that monitored
             resource type. A monitored resource and metric pair may only be used once
             in the Monitoring configuration.
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
            label: label.Monitoring.consumer_destinations
            options:
                flags: []
                list: []
            readonly: false
            repeated: true
            typespecific: null
        constraints: {}
