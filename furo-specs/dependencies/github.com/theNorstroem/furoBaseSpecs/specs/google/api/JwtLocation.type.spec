name: JwtLocation
type: JwtLocation
description: Specifies a location to extract JWT from an API request.
__proto:
    package: google.api
    targetfile: auth.proto
    imports: []
    options:
        go_package: google.golang.org/genproto/googleapis/api/serviceconfig;serviceconfig
        java_multiple_files: "true"
        java_outer_classname: AuthProto
        java_package: com.google.api
        objc_class_prefix: GAPI
fields:
    header:
        type: string
        description: Specifies HTTP header name to extract JWT token.
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
            label: label.JwtLocation.header
            options:
                flags: []
                list: []
            readonly: false
            repeated: false
            typespecific: null
        constraints: {}
    query:
        type: string
        description: Specifies URL query parameter name to extract JWT token.
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
            label: label.JwtLocation.query
            options:
                flags: []
                list: []
            readonly: false
            repeated: false
            typespecific: null
        constraints: {}
    value_prefix:
        type: string
        description: |-
            The value prefix. The value format is "value_prefix{token}"
             Only applies to "in" header type. Must be empty for "in" query type.
             If not empty, the header value has to match (case sensitive) this prefix.
             If not matched, JWT will not be extracted. If matched, JWT will be
             extracted after the prefix is removed.

             For example, for "Authorization: Bearer {JWT}",
             value_prefix="Bearer " with a space at the end.
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
            label: label.JwtLocation.value_prefix
            options:
                flags: []
                list: []
            readonly: false
            repeated: false
            typespecific: null
        constraints: {}
