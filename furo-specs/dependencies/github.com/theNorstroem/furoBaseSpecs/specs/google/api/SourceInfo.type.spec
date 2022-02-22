name: SourceInfo
type: SourceInfo
description: Source information used to create a Service Config
__proto:
    package: google.api
    targetfile: source_info.proto
    imports:
        - google/protobuf/any.proto
    options:
        go_package: google.golang.org/genproto/googleapis/api/serviceconfig;serviceconfig
        java_multiple_files: "true"
        java_outer_classname: SourceInfoProto
        java_package: com.google.api
        objc_class_prefix: GAPI
fields:
    source_files:
        type: google.protobuf.Any
        description: All files used during config generation.
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
            label: label.SourceInfo.source_files
            options:
                flags: []
                list: []
            readonly: false
            repeated: true
            typespecific: null
        constraints: {}
