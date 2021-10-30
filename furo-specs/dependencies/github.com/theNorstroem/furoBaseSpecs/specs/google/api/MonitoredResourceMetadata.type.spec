name: MonitoredResourceMetadata
type: MonitoredResourceMetadata
description: |-
    Auxiliary metadata for a [MonitoredResource][google.api.MonitoredResource] object.
     [MonitoredResource][google.api.MonitoredResource] objects contain the minimum set of information to
     uniquely identify a monitored resource instance. There is some other useful
     auxiliary metadata. Monitoring and Logging use an ingestion
     pipeline to extract metadata for cloud resources of all types, and store
     the metadata in this message.
__proto:
    package: google.api
    targetfile: monitored_resource.proto
    imports:
        - google/api/label.proto
        - google/api/launch_stage.proto
        - google/protobuf/struct.proto
    options:
        cc_enable_arenas: "true"
        go_package: google.golang.org/genproto/googleapis/api/monitoredres;monitoredres
        java_multiple_files: "true"
        java_outer_classname: MonitoredResourceProto
        java_package: com.google.api
        objc_class_prefix: GAPI
fields:
    system_labels:
        type: google.protobuf.Struct
        description: |-
            Output only. Values for predefined system metadata labels.
             System labels are a kind of metadata extracted by Google, including
             "machine_image", "vpc", "subnet_id",
             "security_group", "name", etc.
             System label values can be only strings, Boolean values, or a list of
             strings. For example:

                 { "name": "my-test-instance",
                   "security_group": ["a", "b", "c"],
                   "spot_instance": false }
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
            label: label.MonitoredResourceMetadata.system_labels
            options:
                flags: []
                list: []
            readonly: false
            repeated: false
            typespecific: null
        constraints: {}
    user_labels:
        type: google.api.MonitoredResourceMetadata.UserLabelsEntry
        description: Output only. A map of user-defined metadata labels.
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
            label: label.MonitoredResourceMetadata.user_labels
            options:
                flags: []
                list: []
            readonly: false
            repeated: true
            typespecific: null
        constraints: {}
