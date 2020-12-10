name: readonly
type: Readonly
description: Readonly spec for testing
__proto:
    package: experiment
    targetfile: experiment.proto
    imports:
        - furo/furo.proto
        - project/project.proto
    options: {}
fields:
    project:
        type: project.Project
        description: Identity of a experiment
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
            label: Id
            options:
                flags: []
                list: []
            readonly: true
            repeated: false
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
