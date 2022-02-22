name: HttpBody
type: HttpBody
description: |-
    Message that represents an arbitrary HTTP body. It should only be used for
     payload formats that can't be represented as JSON, such as raw binary or
     an HTML page.


     This message can be used both in streaming and non-streaming API methods in
     the request as well as the response.

     It can be used as a top-level request field, which is convenient if one
     wants to extract parameters from either the URL or HTTP template into the
     request fields and also want access to the raw HTTP body.

     Example:

         message GetResourceRequest {
           // A unique request id.
           string request_id = 1;

           // The raw HTTP body is bound to this field.
           google.api.HttpBody http_body = 2;
         }

         service ResourceService {
           rpc GetResource(GetResourceRequest) returns (google.api.HttpBody);
           rpc UpdateResource(google.api.HttpBody) returns
           (google.protobuf.Empty);
         }

     Example with streaming methods:

         service CaldavService {
           rpc GetCalendar(stream google.api.HttpBody)
             returns (stream google.api.HttpBody);
           rpc UpdateCalendar(stream google.api.HttpBody)
             returns (stream google.api.HttpBody);
         }

     Use of this type only changes how the request and response bodies are
     handled, all other features will continue to work unchanged.
__proto:
    package: google.api
    targetfile: httpbody.proto
    imports:
        - google/protobuf/any.proto
    options:
        cc_enable_arenas: "true"
        go_package: google.golang.org/genproto/googleapis/api/httpbody;httpbody
        java_multiple_files: "true"
        java_outer_classname: HttpBodyProto
        java_package: com.google.api
        objc_class_prefix: GAPI
fields:
    content_type:
        type: string
        description: The HTTP Content-Type header value specifying the content type of the body.
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
            label: label.HttpBody.content_type
            options:
                flags: []
                list: []
            readonly: false
            repeated: false
            typespecific: null
        constraints: {}
    data:
        type: bytes
        description: The HTTP request/response body as raw binary.
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
            label: label.HttpBody.data
            options:
                flags: []
                list: []
            readonly: false
            repeated: false
            typespecific: null
        constraints: {}
    extensions:
        type: google.protobuf.Any
        description: |-
            Application specific response metadata. Must be set in the first response
             for streaming APIs.
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
            label: label.HttpBody.extensions
            options:
                flags: []
                list: []
            readonly: false
            repeated: true
            typespecific: null
        constraints: {}
