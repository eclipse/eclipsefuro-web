name: ExperimentEntity
type: ExperimentEntity
description: ExperimentEntity with Experiment
lifecycle: null
__proto:
    package: experiment
    targetfile: experiment.proto
    imports:
        - furo/furo.proto
    options:
        go_package: github.com/eclipse/eclipsefuro-web/furo-specs/dist/pb/experiment;experimentpb
        java_multiple_files: "true"
        java_outer_classname: ExperimentProto
        java_package: com.example.tutorial.experiment
fields:
    data:
        type: experiment.Experiment
        description: contains a experiment.Experiment
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
