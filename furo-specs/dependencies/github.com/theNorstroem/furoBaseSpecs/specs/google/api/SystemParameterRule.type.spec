name: SystemParameterRule
type: SystemParameterRule
description: |-
    Define a system parameter rule mapping system parameter definitions to
     methods.
__proto:
    package: google.api
    targetfile: system_parameter.proto
    imports: []
    options:
        go_package: google.golang.org/genproto/googleapis/api/serviceconfig;serviceconfig
        java_multiple_files: "true"
        java_outer_classname: SystemParameterProto
        java_package: com.google.api
        objc_class_prefix: GAPI
fields:
    selector:
        type: string
        description: |-
            Selects the methods to which this rule applies. Use '*' to indicate all
             methods in all APIs.

             Refer to [selector][google.api.DocumentationRule.selector] for syntax details.
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
            label: label.SystemParameterRule.selector
            options:
                flags: []
                list: []
            readonly: false
            repeated: false
            typespecific: null
        constraints: {}
    parameters:
        type: google.api.SystemParameter
        description: |-
            Define parameters. Multiple names may be defined for a parameter.
             For a given method call, only one of them should be used. If multiple
             names are used the behavior is implementation-dependent.
             If none of the specified names are present the behavior is
             parameter-dependent.
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
            label: label.SystemParameterRule.parameters
            options:
                flags: []
                list: []
            readonly: false
            repeated: true
            typespecific: null
        constraints: {}
