name: BackendRule
type: BackendRule
description: A backend rule provides configuration for an individual API element.
__proto:
    package: google.api
    targetfile: backend.proto
    imports: []
    options:
        go_package: google.golang.org/genproto/googleapis/api/serviceconfig;serviceconfig
        java_multiple_files: "true"
        java_outer_classname: BackendProto
        java_package: com.google.api
        objc_class_prefix: GAPI
fields:
    selector:
        type: string
        description: |-
            Selects the methods to which this rule applies.

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
            label: label.BackendRule.selector
            options:
                flags: []
                list: []
            readonly: false
            repeated: false
            typespecific: null
        constraints: {}
    address:
        type: string
        description: |-
            The address of the API backend.

             The scheme is used to determine the backend protocol and security.
             The following schemes are accepted:

                SCHEME        PROTOCOL    SECURITY
                http://       HTTP        None
                https://      HTTP        TLS
                grpc://       gRPC        None
                grpcs://      gRPC        TLS

             It is recommended to explicitly include a scheme. Leaving out the scheme
             may cause constrasting behaviors across platforms.

             If the port is unspecified, the default is:
             - 80 for schemes without TLS
             - 443 for schemes with TLS

             For HTTP backends, use [protocol][google.api.BackendRule.protocol]
             to specify the protocol version.
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
            label: label.BackendRule.address
            options:
                flags: []
                list: []
            readonly: false
            repeated: false
            typespecific: null
        constraints: {}
    deadline:
        type: double
        description: |-
            The number of seconds to wait for a response from a request. The default
             varies based on the request protocol and deployment environment.
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
            label: label.BackendRule.deadline
            options:
                flags: []
                list: []
            readonly: false
            repeated: false
            typespecific: null
        constraints: {}
    min_deadline:
        type: double
        description: |-
            Minimum deadline in seconds needed for this method. Calls having deadline
             value lower than this will be rejected.
        __proto:
            number: 4
            oneof: ""
        __ui:
            component: ""
            flags: []
            noinit: false
            noskip: false
        meta:
            default: ""
            hint: ""
            label: label.BackendRule.min_deadline
            options:
                flags: []
                list: []
            readonly: false
            repeated: false
            typespecific: null
        constraints: {}
    operation_deadline:
        type: double
        description: |-
            The number of seconds to wait for the completion of a long running
             operation. The default is no deadline.
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
            label: label.BackendRule.operation_deadline
            options:
                flags: []
                list: []
            readonly: false
            repeated: false
            typespecific: null
        constraints: {}
    path_translation:
        type: unknown
        description: ""
        __proto:
            number: 6
            oneof: ""
        __ui:
            component: ""
            flags: []
            noinit: false
            noskip: false
        meta:
            default: ""
            hint: ""
            label: label.BackendRule.path_translation
            options:
                flags: []
                list: []
            readonly: false
            repeated: false
            typespecific: null
        constraints: {}
    jwt_audience:
        type: string
        description: |-
            The JWT audience is used when generating a JWT ID token for the backend.
             This ID token will be added in the HTTP "authorization" header, and sent
             to the backend.
        __proto:
            number: 7
            oneof: ""
        __ui:
            component: ""
            flags: []
            noinit: false
            noskip: false
        meta:
            default: ""
            hint: ""
            label: label.BackendRule.jwt_audience
            options:
                flags: []
                list: []
            readonly: false
            repeated: false
            typespecific: null
        constraints: {}
    disable_auth:
        type: bool
        description: |-
            When disable_auth is true, a JWT ID token won't be generated and the
             original "Authorization" HTTP header will be preserved. If the header is
             used to carry the original token and is expected by the backend, this
             field must be set to true to preserve the header.
        __proto:
            number: 8
            oneof: ""
        __ui:
            component: ""
            flags: []
            noinit: false
            noskip: false
        meta:
            default: ""
            hint: ""
            label: label.BackendRule.disable_auth
            options:
                flags: []
                list: []
            readonly: false
            repeated: false
            typespecific: null
        constraints: {}
    protocol:
        type: string
        description: |-
            The protocol used for sending a request to the backend.
             The supported values are "http/1.1" and "h2".

             The default value is inferred from the scheme in the
             [address][google.api.BackendRule.address] field:

                SCHEME        PROTOCOL
                http://       http/1.1
                https://      http/1.1
                grpc://       h2
                grpcs://      h2

             For secure HTTP backends (https://) that support HTTP/2, set this field
             to "h2" for improved performance.

             Configuring this field to non-default values is only supported for secure
             HTTP backends. This field will be ignored for all other backends.

             See
             https://www.iana.org/assignments/tls-extensiontype-values/tls-extensiontype-values.xhtml#alpn-protocol-ids
             for more details on the supported values.
        __proto:
            number: 9
            oneof: ""
        __ui:
            component: ""
            flags: []
            noinit: false
            noskip: false
        meta:
            default: ""
            hint: ""
            label: label.BackendRule.protocol
            options:
                flags: []
                list: []
            readonly: false
            repeated: false
            typespecific: null
        constraints: {}
