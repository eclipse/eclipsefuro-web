name: task
type: Task
description: Task data description
__proto:
    package: task
    targetfile: task.proto
    imports:
        - furo/furo.proto
    options: {}
fields:
    id:
        type: string
        description: Identity of a task
        __proto:
            number: 1
            oneof: ""
        __ui: null
        meta:
            default: ""
            hint: ""
            label: Id
            options: null
            readonly: true
            repeated: false
            typespecific: null
        constraints: {}
    display_name:
        type: string
        description: Localized String representation of a task
        __proto:
            number: 2
            oneof: ""
        __ui: null
        meta:
            default: ""
            hint: task.display_name.hint
            label: task.display_name.label
            options: null
            readonly: true
            repeated: false
            typespecific: null
        constraints: {}
    description:
        type: string
        description: Short task description
        __proto:
            number: 3
            oneof: ""
        __ui: null
        meta:
            default: ""
            hint: ""
            label: task.desc.label
            options: null
            readonly: false
            repeated: false
            typespecific: null
        constraints:
            max:
                is: "180"
                message: task.desc.maxlength
            required:
                is: "true"
                message: is required
    estimated_time:
        type: int32
        description: Estimated time in days
        __proto:
            number: 4
            oneof: ""
        __ui: null
        meta:
            default: ""
            hint: ""
            label: Est. days
            options: null
            readonly: false
            repeated: false
            typespecific: null
        constraints: {}
    owner:
        type: furo.Reference
        description: Owner of a task
        __proto:
            number: 5
            oneof: ""
        __ui: null
        meta:
            default: ""
            hint: ""
            label: person.label
            readonly: false
            repeated: false
            typespecific: null
        constraints: {}
    subtasks:
        type: task.Task
        description: List of subtasks
        __proto:
            number: 6
            oneof: ""
        __ui: null
        meta:
            default: ""
            hint: ""
            label: Subtask
            options: null
            readonly: false
            repeated: true
            typespecific: null
        constraints: {}
