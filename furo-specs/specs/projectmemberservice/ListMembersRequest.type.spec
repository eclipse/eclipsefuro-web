name: ListMembersRequest
type: ListMembersRequest
description: request message for ListMembers
lifecycle: null
__proto:
    package: projectmemberservice
    targetfile: reqmsgs.proto
    imports:
        - google/protobuf/empty.proto
    options:
        go_package: github.com/eclipse/eclipsefuro-web/furo-specs/dist/pb/projectmemberservice;projectmemberservicepb
        java_multiple_files: "true"
        java_outer_classname: ReqmsgsProto
        java_package: com.example.tutorial.projectmemberservice
fields:
    body:
        type: .google.protobuf.Empty
        description: Body with google.protobuf.Empty
        __proto:
            number: 1
        __ui: null
        meta:
            default: ""
            placeholder: projectmemberservice.listmembersrequest.body.placeholder
            hint: ""
            label: projectmemberservice.listmembersrequest.body.label
            options:
                flags: []
                list: []
            readonly: false
            repeated: false
            typespecific: null
        constraints: {}
