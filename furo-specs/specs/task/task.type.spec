name: Task
type: Task
description: Task data description
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
    id:
        type: string
        description: Identity of a task
        __proto:
            number: 1
        __ui: null
        meta:
            default: ""
            placeholder: ""
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
        __ui: null
        meta:
            default: ""
            placeholder: ""
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
        __ui: null
        meta:
            default: ""
            placeholder: ""
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
                message: description is required
    estimated_time:
        type: int32
        description: Estimated time in days
        __proto:
            number: 4
        __ui: null
        meta:
            default: ""
            placeholder: ""
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
        __ui: null
        meta:
            default: |
                { "link":
                  { "rel": "list",
                    "href": "/mockdata/persons/list.json",
                    "method": "GET",
                    "type": "person.Person",
                    "service": "PersonService"
                  }
                }
            placeholder: ""
            hint: ""
            label: person.label
            options: null
            readonly: false
            repeated: false
            typespecific: null
        constraints: {}
    subtasks:
        type: task.Task
        description: List of subtasks
        __proto:
            number: 6
        __ui: null
        meta:
            default: ""
            placeholder: ""
            hint: ""
            label: Subtask
            options: null
            readonly: false
            repeated: true
            typespecific: null
        constraints: {}
