name: SystemParameters
type: SystemParameters
description: |-
    ### System parameter configuration

     A system parameter is a special kind of parameter defined by the API
     system, not by an individual API. It is typically mapped to an HTTP header
     and/or a URL query parameter. This configuration specifies which methods
     change the names of the system parameters.
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
    rules:
        type: google.api.SystemParameterRule
        description: |-
            Define system parameters.

             The parameters defined here will override the default parameters
             implemented by the system. If this field is missing from the service
             config, default system parameters will be used. Default system parameters
             and names is implementation-dependent.

             Example: define api key for all methods

                 system_parameters
                   rules:
                     - selector: "*"
                       parameters:
                         - name: api_key
                           url_query_parameter: api_key


             Example: define 2 api key names for a specific method.

                 system_parameters
                   rules:
                     - selector: "/ListShelves"
                       parameters:
                         - name: api_key
                           http_header: Api-Key1
                         - name: api_key
                           http_header: Api-Key2

             **NOTE:** All service configuration rules follow "last one wins" order.
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
            label: label.SystemParameters.rules
            options:
                flags: []
                list: []
            readonly: false
            repeated: true
            typespecific: null
        constraints: {}
