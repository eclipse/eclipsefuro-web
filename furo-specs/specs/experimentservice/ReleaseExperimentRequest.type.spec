name: ReleaseExperimentRequest
type: ReleaseExperimentRequest
description: request message for ReleaseExperiment
lifecycle: null
__proto:
    package: experimentservice
    targetfile: reqmsgs.proto
    imports:
        - experiment/experiment.proto
    options:
        go_package: github.com/eclipse/eclipsefuro-web/furo-specs/dist/pb/experimentservice;experimentservicepb
        java_multiple_files: "true"
        java_outer_classname: ReqmsgsProto
        java_package: com.example.tutorial.experimentservice
fields:
    body:
        type: .experiment.ExperimentEntity
        description: Body with experiment.ExperimentEntity
        __proto:
            number: 1
        __ui: null
        meta:
            default: ""
            placeholder: experimentservice.releaseexperimentrequest.body.placeholder
            hint: ""
            label: experimentservice.releaseexperimentrequest.body.label
            options:
                flags: []
                list: []
            readonly: false
            repeated: false
            typespecific: null
        constraints: {}
