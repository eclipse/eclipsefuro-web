name: MonitoredResourceDescriptor
type: MonitoredResourceDescriptor
description: |
    An object that describes the schema of a [MonitoredResource][google.api.MonitoredResource] object using a
     type name and a set of labels.  For example, the monitored resource
     descriptor for Google Compute Engine VM instances has a type of
     `"gce_instance"` and specifies the use of the labels `"instance_id"` and
     `"zone"` to identify particular VM instances.

     Different APIs can support different monitored resource types. APIs generally
     provide a `list` method that returns the monitored resource descriptors used
     by the API.
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
    name:
        type: string
        description: |-
            Optional. The resource name of the monitored resource descriptor:
             `"projects/{project_id}/monitoredResourceDescriptors/{type}"` where
             {type} is the value of the `type` field in this object and
             {project_id} is a project ID that provides API-specific context for
             accessing the type.  APIs that do not use project information can use the
             resource name format `"monitoredResourceDescriptors/{type}"`.
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
            label: label.MonitoredResourceDescriptor.name
            options:
                flags: []
                list: []
            readonly: false
            repeated: false
            typespecific: null
        constraints: {}
    type:
        type: string
        description: |-
            Required. The monitored resource type. For example, the type
             `"cloudsql_database"` represents databases in Google Cloud SQL.
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
            label: label.MonitoredResourceDescriptor.type
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
            Optional. A concise name for the monitored resource type that might be
             displayed in user interfaces. It should be a Title Cased Noun Phrase,
             without any article or other determiners. For example,
             `"Google Cloud SQL Database"`.
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
            label: label.MonitoredResourceDescriptor.display_name
            options:
                flags: []
                list: []
            readonly: false
            repeated: false
            typespecific: null
        constraints: {}
    description:
        type: string
        description: |-
            Optional. A detailed description of the monitored resource type that might
             be used in documentation.
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
            label: label.MonitoredResourceDescriptor.description
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
            Required. A set of labels used to describe instances of this monitored
             resource type. For example, an individual Google Cloud SQL database is
             identified by values for the labels `"database_id"` and `"zone"`.
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
            label: label.MonitoredResourceDescriptor.labels
            options:
                flags: []
                list: []
            readonly: false
            repeated: true
            typespecific: null
        constraints: {}
    launch_stage:
        type: unknown
        description: Optional. The launch stage of the monitored resource definition.
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
            label: label.MonitoredResourceDescriptor.launch_stage
            options:
                flags: []
                list: []
            readonly: false
            repeated: false
            typespecific: null
        constraints: {}
