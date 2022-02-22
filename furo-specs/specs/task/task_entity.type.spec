name: TaskEntity
type: TaskEntity
description: TaskEntity with Task
lifecycle: null
__proto:
    package: task
    targetfile: task.proto
    imports:
        - furo/furo.proto
        - notification/notification.proto
    options:
        go_package: github.com/eclipse/eclipsefuro-web/furo-specs/dist/pb/task;taskpb
        java_multiple_files: "true"
        java_outer_classname: TaskProto
        java_package: com.example.tutorial.task
fields:
    data:
        type: task.Task
        description: contains a task.Task
        __proto:
            number: 1
        __ui: null
        meta:
            default: ""
            placeholder: ""
            hint: ""
            label: ""
            options: null
            readonly: false
            repeated: false
            typespecific: null
        constraints: {}
    links:
        type: furo.Link
        description: Hateoas links
        __proto:
            number: 2
        __ui: null
        meta:
            default: ""
            placeholder: ""
            hint: ""
            label: ""
            options: null
            readonly: false
            repeated: true
            typespecific: null
        constraints: {}
    meta:
        type: furo.Meta
        description: Meta for the response
        __proto:
            number: 3
        __ui: null
        meta:
            default: ""
            placeholder: ""
            hint: ""
            label: ""
            options: null
            readonly: false
            repeated: false
            typespecific: null
        constraints: {}
    notifications:
        type: notification.Notification
        description: notification for the data
        __proto:
            number: 4
        __ui: null
        meta:
            default: ""
            placeholder: ""
            hint: ""
            label: ""
            options: null
            readonly: false
            repeated: false
            typespecific: null
        constraints: {}
