name: Backend
type: Backend
description: '`Backend` defines the backend configuration for a service.'
__proto:
    package: google.api
    targetfile: backend.proto
    imports: []
    options:
        go_package: google.golang.org/genproto/googleapis/api/serviceconfig;serviceconfig
        java_multiple_files: "true"
        java_outer_classname: BackendProto
        java_package: com.google.api
        objc_class_prefix: GAPI
fields:
    rules:
        type: google.api.BackendRule
        description: |-
            A list of API backend rules that apply to individual API methods.

             **NOTE:** All service configuration rules follow "last one wins" order.
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
            label: label.Backend.rules
            options:
                flags: []
                list: []
            readonly: false
            repeated: true
            typespecific: null
        constraints: {}
