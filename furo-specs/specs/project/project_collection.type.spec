name: ProjectCollection
type: ProjectCollection
description: ProjectCollection with repeated ProjectEntity
lifecycle: null
__proto:
    package: project
    targetfile: project.proto
    imports:
        - furo/furo.proto
    options:
        go_package: github.com/eclipse/eclipsefuro-web/furo-specs/dist/pb/project;projectpb
        java_multiple_files: "true"
        java_outer_classname: ProjectProto
        java_package: com.example.tutorial.project
fields:
    meta:
        type: furo.Meta
        description: Meta for the response
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
            repeated: false
            typespecific: null
        constraints: {}
    links:
        type: furo.Link
        description: Hateoas links
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
            repeated: true
            typespecific: null
        constraints: {}
    entities:
        type: project.ProjectEntity
        description: Contains a project.ProjectEntity repeated
        __proto:
            number: 4
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
