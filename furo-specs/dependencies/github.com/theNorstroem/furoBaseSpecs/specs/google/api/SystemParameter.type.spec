name: SystemParameter
type: SystemParameter
description: |-
    Define a parameter's name and location. The parameter may be passed as either
     an HTTP header or a URL query parameter, and if both are passed the behavior
     is implementation-dependent.
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
    name:
        type: string
        description: Define the name of the parameter, such as "api_key" . It is case sensitive.
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
            label: label.SystemParameter.name
            options:
                flags: []
                list: []
            readonly: false
            repeated: false
            typespecific: null
        constraints: {}
    http_header:
        type: string
        description: |-
            Define the HTTP header name to use for the parameter. It is case
             insensitive.
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
            label: label.SystemParameter.http_header
            options:
                flags: []
                list: []
            readonly: false
            repeated: false
            typespecific: null
        constraints: {}
    url_query_parameter:
        type: string
        description: |-
            Define the URL query parameter name to use for the parameter. It is case
             sensitive.
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
            label: label.SystemParameter.url_query_parameter
            options:
                flags: []
                list: []
            readonly: false
            repeated: false
            typespecific: null
        constraints: {}
