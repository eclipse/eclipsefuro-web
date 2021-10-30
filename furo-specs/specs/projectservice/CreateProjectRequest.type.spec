name: CreateProjectRequest
type: CreateProjectRequest
description: request message for CreateProject
lifecycle: null
__proto:
    package: projectservice
    targetfile: reqmsgs.proto
    imports:
        - project/project.proto
    options:
        go_package: github.com/eclipse/eclipsefuro-web/furo-specs/dist/pb/projectservice;projectservicepb
        java_multiple_files: "true"
        java_outer_classname: ReqmsgsProto
        java_package: com.example.tutorial.projectservice
fields:
    body:
        type: .project.Project
        description: Body with project.Project
        __proto:
            number: 1
        __ui: null
        meta:
            default: ""
            placeholder: projectservice.createprojectrequest.body.placeholder
            hint: ""
            label: projectservice.createprojectrequest.body.label
            options:
                flags: []
                list: []
            readonly: false
            repeated: false
            typespecific: null
        constraints: {}
