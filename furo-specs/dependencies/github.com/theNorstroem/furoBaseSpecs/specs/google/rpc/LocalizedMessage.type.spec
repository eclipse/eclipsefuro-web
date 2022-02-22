name: LocalizedMessage
type: LocalizedMessage
description: |-
    Provides a localized error message that is safe to return to the user
     which can be attached to an RPC error.
__proto:
    package: google.rpc
    targetfile: error_details.proto
    imports:
        - google/protobuf/duration.proto
    options:
        go_package: google.golang.org/genproto/googleapis/rpc/errdetails;errdetails
        java_multiple_files: "true"
        java_outer_classname: ErrorDetailsProto
        java_package: com.google.rpc
        objc_class_prefix: RPC
fields:
    locale:
        type: string
        description: |-
            The locale used following the specification defined at
             http://www.rfc-editor.org/rfc/bcp/bcp47.txt.
             Examples are: "en-US", "fr-CH", "es-MX"
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
            label: label.LocalizedMessage.locale
            options:
                flags: []
                list: []
            readonly: false
            repeated: false
            typespecific: null
        constraints: {}
    message:
        type: string
        description: The localized error message in the above locale.
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
            label: label.LocalizedMessage.message
            options:
                flags: []
                list: []
            readonly: false
            repeated: false
            typespecific: null
        constraints: {}
