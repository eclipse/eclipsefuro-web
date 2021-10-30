name: ResourceReference
type: ResourceReference
description: |-
    Defines a proto annotation that describes a string field that refers to
     an API resource.
__proto:
    package: google.api
    targetfile: resource.proto
    imports:
        - google/protobuf/descriptor.proto
    options:
        cc_enable_arenas: "true"
        go_package: google.golang.org/genproto/googleapis/api/annotations;annotations
        java_multiple_files: "true"
        java_outer_classname: ResourceProto
        java_package: com.google.api
        objc_class_prefix: GAPI
fields:
    type:
        type: string
        description: |-
            The resource type that the annotated field references.

             Example:

                 message Subscription {
                   string topic = 2 [(google.api.resource_reference) = {
                     type: "pubsub.googleapis.com/Topic"
                   }];
                 }

             Occasionally, a field may reference an arbitrary resource. In this case,
             APIs use the special value * in their resource reference.

             Example:

                 message GetIamPolicyRequest {
                   string resource = 2 [(google.api.resource_reference) = {
                     type: "*"
                   }];
                 }
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
            label: label.ResourceReference.type
            options:
                flags: []
                list: []
            readonly: false
            repeated: false
            typespecific: null
        constraints: {}
    child_type:
        type: string
        description: |-
            The resource type of a child collection that the annotated field
             references. This is useful for annotating the `parent` field that
             doesn't have a fixed resource type.

             Example:

                 message ListLogEntriesRequest {
                   string parent = 1 [(google.api.resource_reference) = {
                     child_type: "logging.googleapis.com/LogEntry"
                   };
                 }
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
            label: label.ResourceReference.child_type
            options:
                flags: []
                list: []
            readonly: false
            repeated: false
            typespecific: null
        constraints: {}
