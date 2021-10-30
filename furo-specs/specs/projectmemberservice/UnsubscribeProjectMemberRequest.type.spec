name: UnsubscribeProjectMemberRequest
type: UnsubscribeProjectMemberRequest
description: request message for UnsubscribeProjectMember
lifecycle: null
__proto:
    package: projectmemberservice
    targetfile: reqmsgs.proto
    imports:
        - person/person.proto
    options:
        go_package: github.com/eclipse/eclipsefuro-web/furo-specs/dist/pb/projectmemberservice;projectmemberservicepb
        java_multiple_files: "true"
        java_outer_classname: ReqmsgsProto
        java_package: com.example.tutorial.projectmemberservice
fields:
    body:
        type: .person.PersonEntity
        description: Body with person.PersonEntity
        __proto:
            number: 1
        __ui: null
        meta:
            default: ""
            placeholder: projectmemberservice.unsubscribeprojectmemberrequest.body.placeholder
            hint: ""
            label: projectmemberservice.unsubscribeprojectmemberrequest.body.label
            options:
                flags: []
                list: []
            readonly: false
            repeated: false
            typespecific: null
        constraints: {}
