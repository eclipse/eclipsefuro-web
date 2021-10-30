name: CreateuniversaltestRequest
type: CreateuniversaltestRequest
description: request message for Createuniversaltest
lifecycle: null
__proto:
    package: UniversaltestService
    targetfile: reqmsgs.proto
    imports:
        - fat/universaltest.proto
    options:
        go_package: github.com/eclipse/eclipsefuro-web/furo-specs/dist/pb/UniversaltestService;UniversaltestServicepb
        java_multiple_files: "true"
        java_outer_classname: ReqmsgsProto
        java_package: com.example.tutorial.UniversaltestService
fields:
    body:
        type: .universaltest.Universaltest
        description: Body with universaltest.Universaltest
        __proto:
            number: 1
        __ui: null
        meta:
            default: ""
            placeholder: universaltestservice.createuniversaltestrequest.body.placeholder
            hint: ""
            label: universaltestservice.createuniversaltestrequest.body.label
            options:
                flags: []
                list: []
            readonly: false
            repeated: false
            typespecific: null
        constraints: {}
