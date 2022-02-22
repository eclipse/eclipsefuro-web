name: Logging
type: Logging
description: |-
    Logging configuration of the service.

     The following example shows how to configure logs to be sent to the
     producer and consumer projects. In the example, the `activity_history`
     log is sent to both the producer and consumer projects, whereas the
     `purchase_history` log is only sent to the producer project.

         monitored_resources:
         - type: library.googleapis.com/branch
           labels:
           - key: /city
             description: The city where the library branch is located in.
           - key: /name
             description: The name of the branch.
         logs:
         - name: activity_history
           labels:
           - key: /customer_id
         - name: purchase_history
         logging:
           producer_destinations:
           - monitored_resource: library.googleapis.com/branch
             logs:
             - activity_history
             - purchase_history
           consumer_destinations:
           - monitored_resource: library.googleapis.com/branch
             logs:
             - activity_history
__proto:
    package: google.api
    targetfile: logging.proto
    imports: []
    options:
        go_package: google.golang.org/genproto/googleapis/api/serviceconfig;serviceconfig
        java_multiple_files: "true"
        java_outer_classname: LoggingProto
        java_package: com.google.api
        objc_class_prefix: GAPI
fields:
    producer_destinations:
        type: google.api.Logging.LoggingDestination
        description: |-
            Logging configurations for sending logs to the producer project.
             There can be multiple producer destinations, each one must have a
             different monitored resource type. A log can be used in at most
             one producer destination.
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
            label: label.Logging.producer_destinations
            options:
                flags: []
                list: []
            readonly: false
            repeated: true
            typespecific: null
        constraints: {}
    consumer_destinations:
        type: google.api.Logging.LoggingDestination
        description: |-
            Logging configurations for sending logs to the consumer project.
             There can be multiple consumer destinations, each one must have a
             different monitored resource type. A log can be used in at most
             one consumer destination.
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
            label: label.Logging.consumer_destinations
            options:
                flags: []
                list: []
            readonly: false
            repeated: true
            typespecific: null
        constraints: {}
