name: Http
type: Http
description: |-
    Defines the HTTP configuration for an API service. It contains a list of
     [HttpRule][google.api.HttpRule], each specifying the mapping of an RPC method
     to one or more HTTP REST API methods.
__proto:
    package: google.api
    targetfile: http.proto
    imports: []
    options:
        cc_enable_arenas: "true"
        go_package: google.golang.org/genproto/googleapis/api/annotations;annotations
        java_multiple_files: "true"
        java_outer_classname: HttpProto
        java_package: com.google.api
        objc_class_prefix: GAPI
fields:
    rules:
        type: google.api.HttpRule
        description: |-
            A list of HTTP configuration rules that apply to individual API methods.

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
            label: label.Http.rules
            options:
                flags: []
                list: []
            readonly: false
            repeated: true
            typespecific: null
        constraints: {}
    fully_decode_reserved_expansion:
        type: bool
        description: |-
            When set to true, URL path parameters will be fully URI-decoded except in
             cases of single segment matches in reserved expansion, where "%2F" will be
             left encoded.

             The default behavior is to not decode RFC 6570 reserved characters in multi
             segment matches.
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
            label: label.Http.fully_decode_reserved_expansion
            options:
                flags: []
                list: []
            readonly: false
            repeated: false
            typespecific: null
        constraints: {}
