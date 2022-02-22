name: Readonly
type: Readonly
description: Readonly spec for testing
lifecycle: null
__proto:
    package: experiment
    targetfile: experiment.proto
    imports:
        - furo/furo.proto
        - project/project.proto
    options:
        go_package: github.com/eclipse/eclipsefuro-web/furo-specs/dist/pb/experiment;experimentpb
        java_multiple_files: "true"
        java_outer_classname: ExperimentProto
        java_package: com.example.tutorial.experiment
fields:
    project:
        type: project.Project
        description: Identity of a experiment
        __proto:
            number: 1
        __ui:
            component: ""
            flags: []
            noinit: false
            noskip: false
        meta:
            default: ""
            placeholder: ""
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
