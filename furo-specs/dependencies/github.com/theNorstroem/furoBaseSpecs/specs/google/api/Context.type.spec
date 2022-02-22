name: Context
type: Context
description: |-
    `Context` defines which contexts an API requests.

     Example:

         context:
           rules:
           - selector: "*"
             requested:
             - google.rpc.context.ProjectContext
             - google.rpc.context.OriginContext

     The above specifies that all methods in the API request
     `google.rpc.context.ProjectContext` and
     `google.rpc.context.OriginContext`.

     Available context types are defined in package
     `google.rpc.context`.

     This also provides mechanism to allowlist any protobuf message extension that
     can be sent in grpc metadata using “x-goog-ext-<extension_id>-bin” and
     “x-goog-ext-<extension_id>-jspb” format. For example, list any service
     specific protobuf types that can appear in grpc metadata as follows in your
     yaml file:

     Example:

         context:
           rules:
            - selector: "google.example.library.v1.LibraryService.CreateBook"
              allowed_request_extensions:
              - google.foo.v1.NewExtension
              allowed_response_extensions:
              - google.foo.v1.NewExtension

     You can also specify extension ID instead of fully qualified extension name
     here.
__proto:
    package: google.api
    targetfile: context.proto
    imports: []
    options:
        go_package: google.golang.org/genproto/googleapis/api/serviceconfig;serviceconfig
        java_multiple_files: "true"
        java_outer_classname: ContextProto
        java_package: com.google.api
        objc_class_prefix: GAPI
fields:
    rules:
        type: google.api.ContextRule
        description: |-
            A list of RPC context rules that apply to individual API methods.

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
            label: label.Context.rules
            options:
                flags: []
                list: []
            readonly: false
            repeated: true
            typespecific: null
        constraints: {}
