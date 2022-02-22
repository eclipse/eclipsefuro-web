name: DocumentationRule
type: DocumentationRule
description: A documentation rule provides information about individual API elements.
__proto:
    package: google.api
    targetfile: documentation.proto
    imports: []
    options:
        go_package: google.golang.org/genproto/googleapis/api/serviceconfig;serviceconfig
        java_multiple_files: "true"
        java_outer_classname: DocumentationProto
        java_package: com.google.api
        objc_class_prefix: GAPI
fields:
    selector:
        type: string
        description: |-
            The selector is a comma-separated list of patterns. Each pattern is a
             qualified name of the element which may end in "*", indicating a wildcard.
             Wildcards are only allowed at the end and for a whole component of the
             qualified name, i.e. "foo.*" is ok, but not "foo.b*" or "foo.*.bar". A
             wildcard will match one or more components. To specify a default for all
             applicable elements, the whole pattern "*" is used.
        __proto:
            number: 1
            oneof: ""
        __ui:
            component: ""
            flags: []
            noinit: false
            noskip: false
        meta:
            default: ""
            hint: ""
            label: label.DocumentationRule.selector
            options:
                flags: []
                list: []
            readonly: false
            repeated: false
            typespecific: null
        constraints: {}
    description:
        type: string
        description: Description of the selected API(s).
        __proto:
            number: 2
            oneof: ""
        __ui:
            component: ""
            flags: []
            noinit: false
            noskip: false
        meta:
            default: ""
            hint: ""
            label: label.DocumentationRule.description
            options:
                flags: []
                list: []
            readonly: false
            repeated: false
            typespecific: null
        constraints: {}
    deprecation_description:
        type: string
        description: |-
            Deprecation description of the selected element(s). It can be provided if
             an element is marked as `deprecated`.
        __proto:
            number: 3
            oneof: ""
        __ui:
            component: ""
            flags: []
            noinit: false
            noskip: false
        meta:
            default: ""
            hint: ""
            label: label.DocumentationRule.deprecation_description
            options:
                flags: []
                list: []
            readonly: false
            repeated: false
            typespecific: null
        constraints: {}
