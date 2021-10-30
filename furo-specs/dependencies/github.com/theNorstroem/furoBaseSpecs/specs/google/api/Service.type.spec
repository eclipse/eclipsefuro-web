name: Service
type: Service
description: |-
    `Service` is the root object of Google service configuration schema. It
     describes basic information about a service, such as the name and the
     title, and delegates other aspects to sub-sections. Each sub-section is
     either a proto message or a repeated proto message that configures a
     specific aspect, such as auth. See each proto message definition for details.

     Example:

         type: google.api.Service
         config_version: 3
         name: calendar.googleapis.com
         title: Google Calendar API
         apis:
         - name: google.calendar.v3.Calendar
         authentication:
           providers:
           - id: google_calendar_auth
             jwks_uri: https://www.googleapis.com/oauth2/v1/certs
             issuer: https://securetoken.google.com
           rules:
           - selector: "*"
             requirements:
               provider_id: google_calendar_auth
__proto:
    package: google.api
    targetfile: service.proto
    imports:
        - google/api/auth.proto
        - google/api/backend.proto
        - google/api/billing.proto
        - google/api/context.proto
        - google/api/control.proto
        - google/api/documentation.proto
        - google/api/endpoint.proto
        - google/api/http.proto
        - google/api/label.proto
        - google/api/log.proto
        - google/api/logging.proto
        - google/api/metric.proto
        - google/api/monitored_resource.proto
        - google/api/monitoring.proto
        - google/api/quota.proto
        - google/api/resource.proto
        - google/api/source_info.proto
        - google/api/system_parameter.proto
        - google/api/usage.proto
        - google/protobuf/any.proto
        - google/protobuf/api.proto
        - google/protobuf/type.proto
        - google/protobuf/wrappers.proto
    options:
        go_package: google.golang.org/genproto/googleapis/api/serviceconfig;serviceconfig
        java_multiple_files: "true"
        java_outer_classname: ServiceProto
        java_package: com.google.api
        objc_class_prefix: GAPI
fields:
    config_version:
        type: google.protobuf.UInt32Value
        description: This field is obsolete. Its value must be set to `3`.
        __proto:
            number: 20
            oneof: ""
        __ui:
            component: ""
            flags: []
            noinit: false
            noskip: false
        meta:
            default: ""
            hint: ""
            label: label.Service.config_version
            options:
                flags: []
                list: []
            readonly: false
            repeated: false
            typespecific: null
        constraints: {}
    name:
        type: string
        description: |-
            The service name, which is a DNS-like logical identifier for the
             service, such as `calendar.googleapis.com`. The service name
             typically goes through DNS verification to make sure the owner
             of the service also owns the DNS name.
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
            label: label.Service.name
            options:
                flags: []
                list: []
            readonly: false
            repeated: false
            typespecific: null
        constraints: {}
    id:
        type: string
        description: |-
            A unique ID for a specific instance of this message, typically assigned
             by the client for tracking purpose. Must be no longer than 63 characters
             and only lower case letters, digits, '.', '_' and '-' are allowed. If
             empty, the server may choose to generate one instead.
        __proto:
            number: 33
            oneof: ""
        __ui:
            component: ""
            flags: []
            noinit: false
            noskip: false
        meta:
            default: ""
            hint: ""
            label: label.Service.id
            options:
                flags: []
                list: []
            readonly: false
            repeated: false
            typespecific: null
        constraints: {}
    title:
        type: string
        description: The product title for this service.
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
            label: label.Service.title
            options:
                flags: []
                list: []
            readonly: false
            repeated: false
            typespecific: null
        constraints: {}
    producer_project_id:
        type: string
        description: The Google project that owns this service.
        __proto:
            number: 22
            oneof: ""
        __ui:
            component: ""
            flags: []
            noinit: false
            noskip: false
        meta:
            default: ""
            hint: ""
            label: label.Service.producer_project_id
            options:
                flags: []
                list: []
            readonly: false
            repeated: false
            typespecific: null
        constraints: {}
    apis:
        type: google.protobuf.Api
        description: |-
            A list of API interfaces exported by this service. Only the `name` field
             of the [google.protobuf.Api][google.protobuf.Api] needs to be provided by the configuration
             author, as the remaining fields will be derived from the IDL during the
             normalization process. It is an error to specify an API interface here
             which cannot be resolved against the associated IDL files.
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
            label: label.Service.apis
            options:
                flags: []
                list: []
            readonly: false
            repeated: true
            typespecific: null
        constraints: {}
    types:
        type: google.protobuf.Type
        description: |-
            A list of all proto message types included in this API service.
             Types referenced directly or indirectly by the `apis` are
             automatically included.  Messages which are not referenced but
             shall be included, such as types used by the `google.protobuf.Any` type,
             should be listed here by name. Example:

                 types:
                 - name: google.protobuf.Int32
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
            label: label.Service.types
            options:
                flags: []
                list: []
            readonly: false
            repeated: true
            typespecific: null
        constraints: {}
    enums:
        type: google.protobuf.Enum
        description: |-
            A list of all enum types included in this API service.  Enums
             referenced directly or indirectly by the `apis` are automatically
             included.  Enums which are not referenced but shall be included
             should be listed here by name. Example:

                 enums:
                 - name: google.someapi.v1.SomeEnum
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
            label: label.Service.enums
            options:
                flags: []
                list: []
            readonly: false
            repeated: true
            typespecific: null
        constraints: {}
    documentation:
        type: google.api.Documentation
        description: Additional API documentation.
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
            label: label.Service.documentation
            options:
                flags: []
                list: []
            readonly: false
            repeated: false
            typespecific: null
        constraints: {}
    backend:
        type: google.api.Backend
        description: API backend configuration.
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
            label: label.Service.backend
            options:
                flags: []
                list: []
            readonly: false
            repeated: false
            typespecific: null
        constraints: {}
    http:
        type: google.api.Http
        description: HTTP configuration.
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
            label: label.Service.http
            options:
                flags: []
                list: []
            readonly: false
            repeated: false
            typespecific: null
        constraints: {}
    quota:
        type: google.api.Quota
        description: Quota configuration.
        __proto:
            number: 10
            oneof: ""
        __ui:
            component: ""
            flags: []
            noinit: false
            noskip: false
        meta:
            default: ""
            hint: ""
            label: label.Service.quota
            options:
                flags: []
                list: []
            readonly: false
            repeated: false
            typespecific: null
        constraints: {}
    authentication:
        type: google.api.Authentication
        description: Auth configuration.
        __proto:
            number: 11
            oneof: ""
        __ui:
            component: ""
            flags: []
            noinit: false
            noskip: false
        meta:
            default: ""
            hint: ""
            label: label.Service.authentication
            options:
                flags: []
                list: []
            readonly: false
            repeated: false
            typespecific: null
        constraints: {}
    context:
        type: google.api.Context
        description: Context configuration.
        __proto:
            number: 12
            oneof: ""
        __ui:
            component: ""
            flags: []
            noinit: false
            noskip: false
        meta:
            default: ""
            hint: ""
            label: label.Service.context
            options:
                flags: []
                list: []
            readonly: false
            repeated: false
            typespecific: null
        constraints: {}
    usage:
        type: google.api.Usage
        description: Configuration controlling usage of this service.
        __proto:
            number: 15
            oneof: ""
        __ui:
            component: ""
            flags: []
            noinit: false
            noskip: false
        meta:
            default: ""
            hint: ""
            label: label.Service.usage
            options:
                flags: []
                list: []
            readonly: false
            repeated: false
            typespecific: null
        constraints: {}
    endpoints:
        type: google.api.Endpoint
        description: |-
            Configuration for network endpoints.  If this is empty, then an endpoint
             with the same name as the service is automatically generated to service all
             defined APIs.
        __proto:
            number: 18
            oneof: ""
        __ui:
            component: ""
            flags: []
            noinit: false
            noskip: false
        meta:
            default: ""
            hint: ""
            label: label.Service.endpoints
            options:
                flags: []
                list: []
            readonly: false
            repeated: true
            typespecific: null
        constraints: {}
    control:
        type: google.api.Control
        description: Configuration for the service control plane.
        __proto:
            number: 21
            oneof: ""
        __ui:
            component: ""
            flags: []
            noinit: false
            noskip: false
        meta:
            default: ""
            hint: ""
            label: label.Service.control
            options:
                flags: []
                list: []
            readonly: false
            repeated: false
            typespecific: null
        constraints: {}
    logs:
        type: google.api.LogDescriptor
        description: Defines the logs used by this service.
        __proto:
            number: 23
            oneof: ""
        __ui:
            component: ""
            flags: []
            noinit: false
            noskip: false
        meta:
            default: ""
            hint: ""
            label: label.Service.logs
            options:
                flags: []
                list: []
            readonly: false
            repeated: true
            typespecific: null
        constraints: {}
    metrics:
        type: google.api.MetricDescriptor
        description: Defines the metrics used by this service.
        __proto:
            number: 24
            oneof: ""
        __ui:
            component: ""
            flags: []
            noinit: false
            noskip: false
        meta:
            default: ""
            hint: ""
            label: label.Service.metrics
            options:
                flags: []
                list: []
            readonly: false
            repeated: true
            typespecific: null
        constraints: {}
    monitored_resources:
        type: google.api.MonitoredResourceDescriptor
        description: |-
            Defines the monitored resources used by this service. This is required
             by the [Service.monitoring][google.api.Service.monitoring] and [Service.logging][google.api.Service.logging] configurations.
        __proto:
            number: 25
            oneof: ""
        __ui:
            component: ""
            flags: []
            noinit: false
            noskip: false
        meta:
            default: ""
            hint: ""
            label: label.Service.monitored_resources
            options:
                flags: []
                list: []
            readonly: false
            repeated: true
            typespecific: null
        constraints: {}
    billing:
        type: google.api.Billing
        description: Billing configuration.
        __proto:
            number: 26
            oneof: ""
        __ui:
            component: ""
            flags: []
            noinit: false
            noskip: false
        meta:
            default: ""
            hint: ""
            label: label.Service.billing
            options:
                flags: []
                list: []
            readonly: false
            repeated: false
            typespecific: null
        constraints: {}
    logging:
        type: google.api.Logging
        description: Logging configuration.
        __proto:
            number: 27
            oneof: ""
        __ui:
            component: ""
            flags: []
            noinit: false
            noskip: false
        meta:
            default: ""
            hint: ""
            label: label.Service.logging
            options:
                flags: []
                list: []
            readonly: false
            repeated: false
            typespecific: null
        constraints: {}
    monitoring:
        type: google.api.Monitoring
        description: Monitoring configuration.
        __proto:
            number: 28
            oneof: ""
        __ui:
            component: ""
            flags: []
            noinit: false
            noskip: false
        meta:
            default: ""
            hint: ""
            label: label.Service.monitoring
            options:
                flags: []
                list: []
            readonly: false
            repeated: false
            typespecific: null
        constraints: {}
    system_parameters:
        type: google.api.SystemParameters
        description: System parameter configuration.
        __proto:
            number: 29
            oneof: ""
        __ui:
            component: ""
            flags: []
            noinit: false
            noskip: false
        meta:
            default: ""
            hint: ""
            label: label.Service.system_parameters
            options:
                flags: []
                list: []
            readonly: false
            repeated: false
            typespecific: null
        constraints: {}
    source_info:
        type: google.api.SourceInfo
        description: Output only. The source information for this configuration if available.
        __proto:
            number: 37
            oneof: ""
        __ui:
            component: ""
            flags: []
            noinit: false
            noskip: false
        meta:
            default: ""
            hint: ""
            label: label.Service.source_info
            options:
                flags: []
                list: []
            readonly: false
            repeated: false
            typespecific: null
        constraints: {}
