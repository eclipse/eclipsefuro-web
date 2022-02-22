name: DeleteTaskRequest
type: DeleteTaskRequest
description: request message for DeleteTask
lifecycle: null
__proto:
    package: taskservice
    targetfile: reqmsgs.proto
    imports:
        - google/protobuf/empty.proto
    options:
        go_package: github.com/eclipse/eclipsefuro-web/furo-specs/dist/pb/taskservice;taskservicepb
        java_multiple_files: "true"
        java_outer_classname: ReqmsgsProto
        java_package: com.example.tutorial.taskservice
fields:
    body:
        type: .google.protobuf.Empty
        description: Body with google.protobuf.Empty
        __proto:
            number: 1
        __ui: null
        meta:
            default: ""
            placeholder: taskservice.deletetaskrequest.body.placeholder
            hint: ""
            label: taskservice.deletetaskrequest.body.label
            options:
                flags: []
                list: []
            readonly: false
            repeated: false
            typespecific: null
        constraints: {}
