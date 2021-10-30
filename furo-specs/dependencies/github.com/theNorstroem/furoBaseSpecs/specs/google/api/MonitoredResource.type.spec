name: MonitoredResource
type: MonitoredResource
description: |-
    An object representing a resource that can be used for monitoring, logging,
     billing, or other purposes. Examples include virtual machine instances,
     databases, and storage devices such as disks. The `type` field identifies a
     [MonitoredResourceDescriptor][google.api.MonitoredResourceDescriptor] object that describes the resource's
     schema. Information in the `labels` field identifies the actual resource and
     its attributes according to the schema. For example, a particular Compute
     Engine VM instance could be represented by the following object, because the
     [MonitoredResourceDescriptor][google.api.MonitoredResourceDescriptor] for `"gce_instance"` has labels
     `"instance_id"` and `"zone"`:

         { "type": "gce_instance",
           "labels": { "instance_id": "12345678901234",
                       "zone": "us-central1-a" }}
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
    type:
        type: string
        description: |-
            Required. The monitored resource type. This field must match
             the `type` field of a [MonitoredResourceDescriptor][google.api.MonitoredResourceDescriptor] object. For
             example, the type of a Compute Engine VM instance is `gce_instance`.
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
            label: label.MonitoredResource.type
            options:
                flags: []
                list: []
            readonly: false
            repeated: false
            typespecific: null
        constraints: {}
    labels:
        type: map<string,string>
        description: |-
            Required. Values for all of the labels listed in the associated monitored
             resource descriptor. For example, Compute Engine VM instances use the
             labels `"project_id"`, `"instance_id"`, and `"zone"`.
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
            label: label.MonitoredResource.labels
            options:
                flags: []
                list: []
            readonly: false
            repeated: false
            typespecific: null
        constraints: {}
