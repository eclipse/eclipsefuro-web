name: Control
type: Control
description: |-
    Selects and configures the service controller used by the service.  The
     service controller handles features like abuse, quota, billing, logging,
     monitoring, etc.
__proto:
    package: google.api
    targetfile: control.proto
    imports: []
    options:
        go_package: google.golang.org/genproto/googleapis/api/serviceconfig;serviceconfig
        java_multiple_files: "true"
        java_outer_classname: ControlProto
        java_package: com.google.api
        objc_class_prefix: GAPI
fields:
    environment:
        type: string
        description: |-
            The service control environment to use. If empty, no control plane
             feature (like quota and billing) will be enabled.
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
            label: label.Control.environment
            options:
                flags: []
                list: []
            readonly: false
            repeated: false
            typespecific: null
        constraints: {}
