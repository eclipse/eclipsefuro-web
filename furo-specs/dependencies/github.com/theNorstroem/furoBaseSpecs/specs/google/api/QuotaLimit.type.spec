name: QuotaLimit
type: QuotaLimit
description: |-
    `QuotaLimit` defines a specific limit that applies over a specified duration
     for a limit type. There can be at most one limit for a duration and limit
     type combination defined within a `QuotaGroup`.
__proto:
    package: google.api
    targetfile: quota.proto
    imports: []
    options:
        go_package: google.golang.org/genproto/googleapis/api/serviceconfig;serviceconfig
        java_multiple_files: "true"
        java_outer_classname: QuotaProto
        java_package: com.google.api
        objc_class_prefix: GAPI
fields:
    name:
        type: string
        description: |-
            Name of the quota limit.

             The name must be provided, and it must be unique within the service. The
             name can only include alphanumeric characters as well as '-'.

             The maximum length of the limit name is 64 characters.
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
            label: label.QuotaLimit.name
            options:
                flags: []
                list: []
            readonly: false
            repeated: false
            typespecific: null
        constraints: {}
    description:
        type: string
        description: |-
            Optional. User-visible, extended description for this quota limit.
             Should be used only when more context is needed to understand this limit
             than provided by the limit's display name (see: `display_name`).
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
            label: label.QuotaLimit.description
            options:
                flags: []
                list: []
            readonly: false
            repeated: false
            typespecific: null
        constraints: {}
    default_limit:
        type: int64
        description: |-
            Default number of tokens that can be consumed during the specified
             duration. This is the number of tokens assigned when a client
             application developer activates the service for his/her project.

             Specifying a value of 0 will block all requests. This can be used if you
             are provisioning quota to selected consumers and blocking others.
             Similarly, a value of -1 will indicate an unlimited quota. No other
             negative values are allowed.

             Used by group-based quotas only.
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
            label: label.QuotaLimit.default_limit
            options:
                flags: []
                list: []
            readonly: false
            repeated: false
            typespecific: null
        constraints: {}
    max_limit:
        type: int64
        description: |-
            Maximum number of tokens that can be consumed during the specified
             duration. Client application developers can override the default limit up
             to this maximum. If specified, this value cannot be set to a value less
             than the default limit. If not specified, it is set to the default limit.

             To allow clients to apply overrides with no upper bound, set this to -1,
             indicating unlimited maximum quota.

             Used by group-based quotas only.
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
            label: label.QuotaLimit.max_limit
            options:
                flags: []
                list: []
            readonly: false
            repeated: false
            typespecific: null
        constraints: {}
    free_tier:
        type: int64
        description: |-
            Free tier value displayed in the Developers Console for this limit.
             The free tier is the number of tokens that will be subtracted from the
             billed amount when billing is enabled.
             This field can only be set on a limit with duration "1d", in a billable
             group; it is invalid on any other limit. If this field is not set, it
             defaults to 0, indicating that there is no free tier for this service.

             Used by group-based quotas only.
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
            label: label.QuotaLimit.free_tier
            options:
                flags: []
                list: []
            readonly: false
            repeated: false
            typespecific: null
        constraints: {}
    duration:
        type: string
        description: |-
            Duration of this limit in textual notation. Must be "100s" or "1d".

             Used by group-based quotas only.
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
            label: label.QuotaLimit.duration
            options:
                flags: []
                list: []
            readonly: false
            repeated: false
            typespecific: null
        constraints: {}
    metric:
        type: string
        description: |-
            The name of the metric this quota limit applies to. The quota limits with
             the same metric will be checked together during runtime. The metric must be
             defined within the service config.
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
            label: label.QuotaLimit.metric
            options:
                flags: []
                list: []
            readonly: false
            repeated: false
            typespecific: null
        constraints: {}
    unit:
        type: string
        description: |-
            Specify the unit of the quota limit. It uses the same syntax as
             [Metric.unit][]. The supported unit kinds are determined by the quota
             backend system.

             Here are some examples:
             * "1/min/{project}" for quota per minute per project.

             Note: the order of unit components is insignificant.
             The "1" at the beginning is required to follow the metric unit syntax.
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
            label: label.QuotaLimit.unit
            options:
                flags: []
                list: []
            readonly: false
            repeated: false
            typespecific: null
        constraints: {}
    values:
        type: map<string,int64>
        description: |-
            Tiered limit values. You must specify this as a key:value pair, with an
             integer value that is the maximum number of requests allowed for the
             specified unit. Currently only STANDARD is supported.
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
            label: label.QuotaLimit.values
            options:
                flags: []
                list: []
            readonly: false
            repeated: false
            typespecific: null
        constraints: {}
    display_name:
        type: string
        description: |-
            User-visible display name for this limit.
             Optional. If not set, the UI will provide a default display name based on
             the quota configuration. This field can be used to override the default
             display name generated from the configuration.
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
            label: label.QuotaLimit.display_name
            options:
                flags: []
                list: []
            readonly: false
            repeated: false
            typespecific: null
        constraints: {}
