name: CreatePersonRequest
type: CreatePersonRequest
description: request message for CreatePerson
lifecycle: null
__proto:
    package: personservice
    targetfile: reqmsgs.proto
    imports:
        - person/person.proto
    options:
        go_package: github.com/eclipse/eclipsefuro-web/furo-specs/dist/pb/personservice;personservicepb
        java_multiple_files: "true"
        java_outer_classname: ReqmsgsProto
        java_package: com.example.tutorial.personservice
fields:
    body:
        type: .person.Person
        description: Body with person.Person
        __proto:
            number: 1
        __ui: null
        meta:
            default: ""
            placeholder: personservice.createpersonrequest.body.placeholder
            hint: ""
            label: personservice.createpersonrequest.body.label
            options:
                flags: []
                list: []
            readonly: false
            repeated: false
            typespecific: null
        constraints: {}
