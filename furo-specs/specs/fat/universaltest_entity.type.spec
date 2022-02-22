name: UniversaltestEntity
type: UniversaltestEntity
description: UniversaltestEntity with Universaltest type in data
lifecycle: null
__proto:
    package: universaltest
    targetfile: universaltest.proto
    imports:
        - furo/furo.proto
    options:
        go_package: github.com/eclipse/eclipsefuro-web/furo-specs/dist/pb/universaltest;universaltestpb
        java_multiple_files: "true"
        java_outer_classname: UniversaltestProto
        java_package: com.example.tutorial.universaltest
fields:
    data:
        type: universaltest.Universaltest
        description: contains a universaltest.Universaltest
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
