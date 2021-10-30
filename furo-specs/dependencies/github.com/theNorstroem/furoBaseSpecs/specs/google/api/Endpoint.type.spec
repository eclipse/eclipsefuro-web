name: Endpoint
type: Endpoint
description: |-
    `Endpoint` describes a network endpoint that serves a set of APIs.
     A service may expose any number of endpoints, and all endpoints share the
     same service configuration, such as quota configuration and monitoring
     configuration.

     Example service configuration:

         name: library-example.googleapis.com
         endpoints:
           # Below entry makes 'google.example.library.v1.Library'
           # API be served from endpoint address library-example.googleapis.com.
           # It also allows HTTP OPTIONS calls to be passed to the backend, for
           # it to decide whether the subsequent cross-origin request is
           # allowed to proceed.
         - name: library-example.googleapis.com
           allow_cors: true
__proto:
    package: google.api
    targetfile: endpoint.proto
    imports: []
    options:
        go_package: google.golang.org/genproto/googleapis/api/serviceconfig;serviceconfig
        java_multiple_files: "true"
        java_outer_classname: EndpointProto
        java_package: com.google.api
        objc_class_prefix: GAPI
fields:
    name:
        type: string
        description: The canonical name of this endpoint.
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
            label: label.Endpoint.name
            options:
                flags: []
                list: []
            readonly: false
            repeated: false
            typespecific: null
        constraints: {}
    aliases:
        type: string
        description: |-
            DEPRECATED: This field is no longer supported. Instead of using aliases,
             please specify multiple [google.api.Endpoint][google.api.Endpoint] for each of the intended
             aliases.

             Additional names that this endpoint will be hosted on.
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
            label: label.Endpoint.aliases
            options:
                flags: []
                list: []
            readonly: false
            repeated: true
            typespecific: null
        constraints: {}
    target:
        type: string
        description: |-
            The specification of an Internet routable address of API frontend that will
             handle requests to this [API
             Endpoint](https://cloud.google.com/apis/design/glossary). It should be
             either a valid IPv4 address or a fully-qualified domain name. For example,
             "8.8.8.8" or "myservice.appspot.com".
        __proto:
            number: 101
            oneof: ""
        __ui:
            component: ""
            flags: []
            noinit: false
            noskip: false
        meta:
            default: ""
            hint: ""
            label: label.Endpoint.target
            options:
                flags: []
                list: []
            readonly: false
            repeated: false
            typespecific: null
        constraints: {}
    allow_cors:
        type: bool
        description: |-
            Allowing
             [CORS](https://en.wikipedia.org/wiki/Cross-origin_resource_sharing), aka
             cross-domain traffic, would allow the backends served from this endpoint to
             receive and respond to HTTP OPTIONS requests. The response will be used by
             the browser to determine whether the subsequent cross-origin request is
             allowed to proceed.
        __proto:
            number: 5
            oneof: ""
        __ui:
            component: ""
            flags: []
            noinit: false
            noskip: false
        meta:
            default: ""
            hint: ""
            label: label.Endpoint.allow_cors
            options:
                flags: []
                list: []
            readonly: false
            repeated: false
            typespecific: null
        constraints: {}
