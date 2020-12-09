name: task_entity
type: TaskEntity
description: TaskEntity with Task
__proto:
    package: task
    targetfile: task.proto
    imports:
        - furo/furo.proto
        - notification/notification.proto
    options: {}
fields:
    data:
        type: task.Task
        description: contains a task.Task
        __proto:
            number: 1
            oneof: ""
        __ui: null
        meta: null
        constraints: {}
    links:
        type: furo.Link
        description: Hateoas links
        __proto:
            number: 2
            oneof: ""
        __ui: null
        meta:
            default: ""
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
            oneof: ""
        __ui: null
        meta: null
        constraints: {}
    notifications:
        type: notification.Notification
        description: notification for the data
        __proto:
            number: 4
            oneof: ""
        __ui: null
        meta: null
        constraints: {}
