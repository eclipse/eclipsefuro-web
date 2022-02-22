name: DeleteProjectRequest
type: DeleteProjectRequest
description: request message for DeleteProject
lifecycle: null
__proto:
    package: projectservice
    targetfile: reqmsgs.proto
    imports:
        - google/protobuf/empty.proto
    options:
        go_package: github.com/eclipse/eclipsefuro-web/furo-specs/dist/pb/projectservice;projectservicepb
        java_multiple_files: "true"
        java_outer_classname: ReqmsgsProto
        java_package: com.example.tutorial.projectservice
fields:
    body:
        type: .google.protobuf.Empty
        description: Body with google.protobuf.Empty
        __proto:
            number: 1
        __ui: null
        meta:
            default: ""
            placeholder: projectservice.deleteprojectrequest.body.placeholder
            hint: ""
            label: projectservice.deleteprojectrequest.body.label
            options:
                flags: []
                list: []
            readonly: false
            repeated: false
            typespecific: null
        constraints: {}
