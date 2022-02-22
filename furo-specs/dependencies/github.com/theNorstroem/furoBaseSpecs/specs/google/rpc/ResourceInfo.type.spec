name: ResourceInfo
type: ResourceInfo
description: Describes the resource that is being accessed.
__proto:
    package: google.rpc
    targetfile: error_details.proto
    imports:
        - google/protobuf/duration.proto
    options:
        go_package: google.golang.org/genproto/googleapis/rpc/errdetails;errdetails
        java_multiple_files: "true"
        java_outer_classname: ErrorDetailsProto
        java_package: com.google.rpc
        objc_class_prefix: RPC
fields:
    resource_type:
        type: string
        description: |-
            A name for the type of resource being accessed, e.g. "sql table",
             "cloud storage bucket", "file", "Google calendar"; or the type URL
             of the resource: e.g. "type.googleapis.com/google.pubsub.v1.Topic".
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
            label: label.ResourceInfo.resource_type
            options:
                flags: []
                list: []
            readonly: false
            repeated: false
            typespecific: null
        constraints: {}
    resource_name:
        type: string
        description: |-
            The name of the resource being accessed.  For example, a shared calendar
             name: "example.com_4fghdhgsrgh@group.calendar.google.com", if the current
             error is [google.rpc.Code.PERMISSION_DENIED][google.rpc.Code.PERMISSION_DENIED].
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
            label: label.ResourceInfo.resource_name
            options:
                flags: []
                list: []
            readonly: false
            repeated: false
            typespecific: null
        constraints: {}
    owner:
        type: string
        description: |-
            The owner of the resource (optional).
             For example, "user:<owner email>" or "project:<Google developer project
             id>".
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
            label: label.ResourceInfo.owner
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
            Describes what error is encountered when accessing this resource.
             For example, updating a cloud project may require the `writer` permission
             on the developer console project.
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
            label: label.ResourceInfo.description
            options:
                flags: []
                list: []
            readonly: false
            repeated: false
            typespecific: null
        constraints: {}
