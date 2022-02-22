name: UpdateTaskRequest
type: UpdateTaskRequest
description: request message for UpdateTask
lifecycle: null
__proto:
    package: taskservice
    targetfile: reqmsgs.proto
    imports:
        - task/task.proto
    options:
        go_package: github.com/eclipse/eclipsefuro-web/furo-specs/dist/pb/taskservice;taskservicepb
        java_multiple_files: "true"
        java_outer_classname: ReqmsgsProto
        java_package: com.example.tutorial.taskservice
fields:
    body:
        type: .task.Task
        description: Body with task.Task
        __proto:
            number: 1
        __ui: null
        meta:
            default: ""
            placeholder: taskservice.updatetaskrequest.body.placeholder
            hint: ""
            label: taskservice.updatetaskrequest.body.label
            options:
                flags: []
                list: []
            readonly: false
            repeated: false
            typespecific: null
        constraints: {}
