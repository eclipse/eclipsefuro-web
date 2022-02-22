name: TaskCollection
type: TaskCollection
description: TaskCollection with repeated TaskEntity
lifecycle: null
__proto:
    package: task
    targetfile: task.proto
    imports:
        - furo/furo.proto
    options:
        go_package: github.com/eclipse/eclipsefuro-web/furo-specs/dist/pb/task;taskpb
        java_multiple_files: "true"
        java_outer_classname: TaskProto
        java_package: com.example.tutorial.task
fields:
    meta:
        type: furo.Meta
        description: Meta for the response
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
            repeated: false
            typespecific: null
        constraints: {}
    links:
        type: furo.Link
        description: Hateoas links
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
            repeated: true
            typespecific: null
        constraints: {}
    entities:
        type: task.TaskEntity
        description: Contains a task.TaskEntity repeated
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
            repeated: true
            typespecific: null
        constraints: {}
